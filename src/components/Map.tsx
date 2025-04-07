'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { POI } from '../types'; // Assuming POI type is defined correctly
import { pois } from '../data/pois'; // Assuming pois data is imported correctly

// --- Leaflet Icon Configuration ---
// Fix for default marker icons in environments like Next.js
const DefaultIcon = L.icon({
    iconUrl: '/marker-icon.png',
    shadowUrl: '/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom icon for user's location
const UserLocationIcon = L.icon({
    iconUrl: '/user-location.png', // Make sure this image is in your public folder
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12]
});

// --- Utility Function ---
// Calculates distance between two lat/lng points in meters (Haversine formula)
const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number): number => {
    const R = 6371e3; // Earth radius in meters
    const φ1 = (lat1 * Math.PI) / 180;
    const φ2 = (lat2 * Math.PI) / 180;
    const Δφ = ((lat2 - lat1) * Math.PI) / 180;
    const Δλ = ((lon2 - lon1) * Math.PI) / 180;

    const a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; // distance in meters
};

// --- Helper Component: Map Controller ---
// Handles map centering logic
const MapController: React.FC<{ center: LatLngExpression | null; zoom: number }> = ({ center, zoom }) => {
    const map = useMap();

    useEffect(() => {
        if (center) {
            map.setView(center, zoom);
        }
    }, [map, center, zoom]); // Re-run effect if center or zoom changes

    return null;
};

// --- Main Map Component ---
interface MapProps {
    language: 'en' | 'de';
    onPoiClick: (poi: POI) => void;
}

const MapComponent: React.FC<MapProps> = ({ language, onPoiClick }) => {
    // State
    const [userLocation, setUserLocation] = useState<LatLngExpression | null>(null);
    const [mapCenter, setMapCenter] = useState<LatLngExpression>([52.1394, 12.5928]); // Default: Bad Belzig Marktplatz
    const [currentZoom, setCurrentZoom] = useState<number>(14);
    const [locationError, setLocationError] = useState<string | null>(null);
    const watchIdRef = useRef<number | null>(null); // Use ref for watchId to avoid effect dependency issues

    // Geolocation Effect
    useEffect(() => {
        if (!navigator.geolocation) {
            setLocationError(language === 'en' ? 'Geolocation is not supported by your browser.' : 'Geolokalisierung wird von Ihrem Browser nicht unterstützt.');
            return;
        }

        const handleSuccess = (position: GeolocationPosition) => {
            const { latitude, longitude } = position.coords;
            const newLocation: LatLngExpression = [latitude, longitude];
            setUserLocation(newLocation);
            // Only center map on first location fix, user can pan freely afterwards
            if (watchIdRef.current === null) { // Check if it's the first fix
                 setMapCenter(newLocation);
                 setCurrentZoom(15);
            }
            setLocationError(null); // Clear previous errors
        };

        const handleError = (error: GeolocationPositionError) => {
            console.error('Error getting user location:', error);
            let message = '';
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    message = language === 'en' ? 'Location permission denied.' : 'Standortberechtigung verweigert.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    message = language === 'en' ? 'Location information unavailable.' : 'Standortinformationen nicht verfügbar.';
                    break;
                case error.TIMEOUT:
                    message = language === 'en' ? 'Location request timed out.' : 'Standortanfrage Zeitüberschreitung.';
                    break;
                default:
                    message = language === 'en' ? 'An unknown error occurred.' : 'Ein unbekannter Fehler ist aufgetreten.';
                    break;
            }
            setLocationError(message);
        };

        // Start watching position
        watchIdRef.current = navigator.geolocation.watchPosition(
            handleSuccess,
            handleError,
            {
                enableHighAccuracy: true,
                maximumAge: 10000, // Don't use cached position older than 10 seconds
                timeout: 5000      // Wait 5 seconds for a fix
            }
        );

        // Cleanup function to clear the watch
        return () => {
            if (watchIdRef.current !== null) {
                navigator.geolocation.clearWatch(watchIdRef.current);
                watchIdRef.current = null;
            }
        };
    }, [language]); // Re-run if language changes to update error messages

    // Function to check if user is within geofence
    const isWithinGeofence = (poi: POI): boolean => {
        if (!userLocation || !Array.isArray(userLocation)) return false; // Check if userLocation is valid LatLngExpression array

        const distance = calculateDistance(
            userLocation[0],
            userLocation[1],
            poi.coordinates.latitude,
            poi.coordinates.longitude
        );
        return distance <= poi.geofenceRadius;
    };

    // Recenter map on user location
    const recenterMap = () => {
        if (userLocation) {
            setMapCenter(userLocation);
            setCurrentZoom(15); // Or keep current zoom: map.getZoom() if MapController exposes it
        } else {
            // Optionally handle case where user location isn't available yet
             console.warn("User location not available to recenter.");
        }
    };

    return (
        <div className="h-[70vh] w-full relative">
            {/* Display Location Error Message */}
            {locationError && (
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded shadow-md z-[1001]">
                    {locationError}
                </div>
            )}

            <MapContainer
                center={mapCenter} // Controlled center
                zoom={currentZoom} // Controlled zoom
                style={{ height: '100%', width: '100%' }}
                // Update state if user manually pans/zooms
                whenReady={(mapInstance) => {
                     // Use mapInstance.target to access the map instance if needed directly
                }}
                onMoveEnd={(e) => {
                     const map = e.target;
                     setMapCenter(map.getCenter());
                     // setCurrentZoom(map.getZoom()); // Uncomment if you want state to track manual zoom too
                 }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Use MapController to react to state changes */}
                <MapController center={mapCenter} zoom={currentZoom} />

                {/* Render POI Markers and Geofence Circles */}
                {pois.map((poi) => {
                    const isInRange = isWithinGeofence(poi);
                    const poiPosition: LatLngExpression = [poi.coordinates.latitude, poi.coordinates.longitude];

                    return (
                        <React.Fragment key={poi.id}>
                            <Marker
                                position={poiPosition}
                                eventHandlers={{ click: () => onPoiClick(poi) }}
                            >
                                <Popup>
                                    <div>
                                        <h3 className="font-bold">{poi.names[language]}</h3>
                                        <p>{poi.descriptions[language]}</p>
                                        {isInRange ? (
                                            <p className="text-green-600 font-bold">
                                                {language === 'en' ? 'You are in range!' : 'Du bist in Reichweite!'}
                                            </p>
                                        ) : (
                                            <p className="text-gray-600">
                                                {language === 'en' ? 'Get closer to unlock!' : 'Komm näher zum Freischalten!'}
                                            </p>
                                        )}
                                    </div>
                                </Popup>
                            </Marker>

                            <Circle
                                center={poiPosition}
                                radius={poi.geofenceRadius}
                                pathOptions={{
                                    color: isInRange ? 'green' : 'gray',
                                    fillColor: isInRange ? 'green' : 'gray',
                                    fillOpacity: 0.2
                                }}
                            />
                        </React.Fragment>
                    );
                })}

                {/* Render User Location Marker */}
                {userLocation && Array.isArray(userLocation) && (
                    <Marker position={userLocation} icon={UserLocationIcon}>
                        <Popup>
                            {language === 'en' ? 'Your location' : 'Dein Standort'}
                        </Popup>
                    </Marker>
                )}
            </MapContainer>

            {/* Recenter Button */}
            <button
                title={language === 'en' ? 'Center on my location' : 'Auf meinen Standort zentrieren'}
                className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md z-[1000] hover:bg-gray-100 disabled:opacity-50"
                onClick={recenterMap}
                disabled={!userLocation} // Disable if location is not available
            >
                {/* Simple crosshair icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="3" />
                    <line x1="12" y1="2" x2="12" y2="5" />
                    <line x1="12" y1="19" x2="12" y2="22" />
                    <line x1="2" y1="12" x2="5" y2="12" />
                    <line x1="19" y1="12" x2="22" y2="12" />
                 </svg>
            </button>
        </div>
    );
};

export default MapComponent; // Renamed component to avoid conflict with HTML Map element
