'use client';

import React, { useState, useEffect } from 'react';
import { POI } from '../types';
import { pois } from '../data/pois';
import { GeolocationUtils } from './GeolocationService';

interface ProximityDetectorProps {
  onPoiEnter: (poi: POI) => void;
  onPoiExit: (poi: POI) => void;
  children: React.ReactNode;
}

export const ProximityDetector: React.FC<ProximityDetectorProps> = ({
  onPoiEnter,
  onPoiExit,
  children
}) => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [poisInRange, setPoisInRange] = useState<Set<string>>(new Set());
  
  // Watch for user location changes
  useEffect(() => {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by this browser.');
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
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
    
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  // Check for POIs in range whenever user location changes
  useEffect(() => {
    if (!userLocation) return;
    
    const [lat, lng] = userLocation;
    const currentPoisInRange = new Set<string>();
    
    // Check each POI
    pois.forEach(poi => {
      const isInRange = GeolocationUtils.isWithinGeofence(lat, lng, poi);
      
      if (isInRange) {
        currentPoisInRange.add(poi.id);
        
        // If this is a new POI in range, trigger the enter event
        if (!poisInRange.has(poi.id)) {
          onPoiEnter(poi);
        }
      } else if (poisInRange.has(poi.id)) {
        // If user was in range but now isn't, trigger the exit event
        onPoiExit(poi);
      }
    });
    
    setPoisInRange(currentPoisInRange);
  }, [userLocation, onPoiEnter, onPoiExit, poisInRange]);

  return <>{children}</>;
};

// Hook for detecting proximity to POIs
export const useProximityDetection = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [poisInRange, setPoisInRange] = useState<POI[]>([]);
  const [nearestPoi, setNearestPoi] = useState<{poi: POI, distance: number} | null>(null);
  
  useEffect(() => {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by this browser.');
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      },
      (error) => {
        console.error('Error getting user location:', error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 5000,
        timeout: 5000
      }
    );
    
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);

  // Update POIs in range and nearest POI whenever user location changes
  useEffect(() => {
    if (!userLocation) return;
    
    const [lat, lng] = userLocation;
    
    // Find POIs in range
    const inRangePois = pois.filter(poi => 
      GeolocationUtils.isWithinGeofence(lat, lng, poi)
    );
    
    setPoisInRange(inRangePois);
    
    // Find nearest POI
    let nearest: {poi: POI, distance: number} | null = null;
    let minDistance = Infinity;
    
    pois.forEach(poi => {
      const distance = GeolocationUtils.calculateDistance(
        lat,
        lng,
        poi.coordinates.latitude,
        poi.coordinates.longitude
      );
      
      if (distance < minDistance) {
        minDistance = distance;
        nearest = { poi, distance };
      }
    });
    
    setNearestPoi(nearest);
  }, [userLocation]);

  return { 
    userLocation, 
    poisInRange, 
    nearestPoi,
    isWithinAnyPoi: poisInRange.length > 0
  };
};
