'use client';

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { POI } from '../types';
import { pois } from '../data/pois';

// Fix for Leaflet marker icons in Next.js
// This is needed because Leaflet's default marker icons have issues with webpack
const DefaultIcon = L.icon({
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom marker for user location
const UserLocationIcon = L.icon({
  iconUrl: '/user-location.png',
  iconSize: [24, 24],
  iconAnchor: [12, 12],
  popupAnchor: [0, -12]
});

// Component to handle map center and zoom based on user location
const MapController: React.FC<{
  userLocation: [number, number] | null;
  centerOnUser: boolean;
}> = ({ userLocation, centerOnUser }) => {
  const map = useMap();

  useEffect(() => {
    if (centerOnUser && userLocation) {
      map.setView(userLocation, 15);
    }
  }, [map, userLocation, centerOnUser]);

  return null;
};

interface MapProps {
  language: 'en' | 'de';
  onPoiClick: (poi: POI) => void;
}

const Map: React.FC<MapProps> = ({ language, onPoiClick }) => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [centerOnUser, setCenterOnUser] = useState(true);
  const [watchId, setWatchId] = useState<number | null>(null);

  // Initial map center (Bad Belzig center)
  const defaultCenter: [number, number] = [52.1394, 12.5928]; // Marktplatz coordinates

  // Start watching user location
  useEffect(() => {
    if (navigator.geolocation) {
      const id = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error('Error getting user location:', error);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 10000,
          timeout: 5000
        }
      );
      
      setWatchId(id);
      
      return () => {
        if (watchId !== null) {
          navigator.geolocation.clearWatch(watchId);
        }
      };
    }
  }, []);

  // Calculate distance between two coordinates in meters
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
    const distance = R * c;

    return distance;
  };

  // Check if user is within geofence radius of a POI
  const isWithinGeofence = (poi: POI): boolean => {
    if (!userLocation) return false;
    
    const distance = calculateDistance(
      userLocation[0],
      userLocation[1],
      poi.coordinates.latitude,
      poi.coordinates.longitude
    );
    
    return distance <= poi.geofenceRadius;
  };

  return (
    <div className="h-[70vh] w-full relative">
      <MapContainer
        center={defaultCenter}
        zoom={14}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapController userLocation={userLocation} centerOnUser={centerOnUser} />
        
        {/* Render POI markers */}
        {pois.map((poi) => {
          const isInRange = isWithinGeofence(poi);
          
          return (
            <React.Fragment key={poi.id}>
              <Marker
                position={[poi.coordinates.latitude, poi.coordinates.longitude]}
                eventHandlers={{
                  click: () => onPoiClick(poi)
                }}
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
                        {language === 'en' ? 'Get closer to unlock the quiz!' : 'Komm näher, um das Quiz freizuschalten!'}
                      </p>
                    )}
                  </div>
                </Popup>
              </Marker>
              
              {/* Geofence circle */}
              <Circle
                center={[poi.coordinates.latitude, poi.coordinates.longitude]}
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
        
        {/* User location marker */}
        {userLocation && (
          <Marker position={userLocation} icon={UserLocationIcon}>
            <Popup>
              {language === 'en' ? 'Your location' : 'Dein Standort'}
            </Popup>
          </Marker>
        )}
      </MapContainer>
      
      {/* Center on user button */}
      <button
        className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md z-[1000]"
        onClick={() => {
          setCenterOnUser(true);
          setTimeout(() => setCenterOnUser(false), 100);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      </button>
    </div>
  );
};

export default Map;
