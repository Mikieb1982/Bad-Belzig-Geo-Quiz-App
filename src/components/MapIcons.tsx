'use client';

import React from 'react';
import L from 'leaflet';

// Create marker icons for POIs
export const createPoiIcon = () => {
  return L.icon({
    iconUrl: '/poi-marker.svg',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
};

// Create user location marker icon
export const createUserLocationIcon = () => {
  return L.icon({
    iconUrl: '/user-location.svg',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12]
  });
};
