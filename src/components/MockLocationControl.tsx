'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

interface MockLocationControlProps {
  onSetLocation: (latitude: number, longitude: number) => void;
}

const MockLocationControl: React.FC<MockLocationControlProps> = ({ onSetLocation }) => {
  const { t } = useTranslation();
  
  // Predefined locations for each POI in Bad Belzig
  const poiLocations = [
    { name: 'Burg Eisenhardt', lat: 52.1416, lng: 12.5917 },
    { name: 'SteinTherme', lat: 52.1372, lng: 12.5967 },
    { name: 'Marktplatz', lat: 52.1394, lng: 12.5928 },
    { name: 'Rathaus', lat: 52.1395, lng: 12.5930 },
    { name: 'St. Marienkirche', lat: 52.1399, lng: 12.5925 },
    { name: 'Bricciuskapelle', lat: 52.1418, lng: 12.5915 },
    { name: 'Heimatmuseum', lat: 52.1415, lng: 12.5920 },
    { name: 'Postmeilensäule', lat: 52.1390, lng: 12.5935 },
    { name: 'Fläming-Bahnhof', lat: 52.1342, lng: 12.5868 },
    { name: 'Reißiger-Haus', lat: 52.1397, lng: 12.5940 }
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-belzig-green-700 mb-3">
        Test Location Simulator
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        For testing purposes only. Select a location to simulate being there:
      </p>
      
      <div className="space-y-2">
        {poiLocations.map((location, index) => (
          <button
            key={index}
            className="w-full text-left px-3 py-2 rounded border border-gray-300 hover:border-belzig-green-500 hover:bg-belzig-green-50"
            onClick={() => onSetLocation(location.lat, location.lng)}
          >
            {location.name} ({location.lat.toFixed(4)}, {location.lng.toFixed(4)})
          </button>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Note: This control overrides your actual GPS location for testing purposes.
          In a production environment, the app would use your device's real GPS.
        </p>
      </div>
    </div>
  );
};

export default MockLocationControl;
