'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

interface TestingGuideProps {
  onClose: () => void;
}

const TestingGuide: React.FC<TestingGuideProps> = ({ onClose }) => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-belzig-green-800">
          Testing Guide
        </h2>
        <button
          className="text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="space-y-6">
        <section>
          <h3 className="text-xl font-semibold text-belzig-green-700 mb-2">Map and Geolocation Testing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Verify map loads correctly with all 10 POI markers</li>
            <li>Test user location tracking (allow location permissions)</li>
            <li>Verify geofence circles appear around POIs</li>
            <li>Test proximity detection by simulating location changes</li>
            <li>Verify "center map" button functionality</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold text-belzig-green-700 mb-2">Quiz System Testing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Verify quiz triggers when entering POI geofence</li>
            <li>Test answering questions correctly and incorrectly</li>
            <li>Verify score calculation works properly</li>
            <li>Test quiz completion with perfect and imperfect scores</li>
            <li>Verify quiz content displays in both English and German</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold text-belzig-green-700 mb-2">Badge System Testing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Verify badge awarding on perfect quiz completion</li>
            <li>Test badge modal appearance and dismissal</li>
            <li>Verify badge collection screen shows all badges</li>
            <li>Test earned vs. locked badge display</li>
            <li>Verify badge descriptions appear in both languages</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold text-belzig-green-700 mb-2">UI/UX Testing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Test responsive layout on different screen sizes</li>
            <li>Verify language switching between English and German</li>
            <li>Test all interactive elements (buttons, links, etc.)</li>
            <li>Verify consistent styling and color scheme</li>
            <li>Test accessibility features (contrast, focus states, etc.)</li>
          </ul>
        </section>
        
        <section>
          <h3 className="text-xl font-semibold text-belzig-green-700 mb-2">Offline Functionality Testing</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Test app behavior when offline</li>
            <li>Verify map caching works for offline use</li>
            <li>Test persistence of user progress when offline</li>
            <li>Verify app gracefully handles reconnection</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TestingGuide;
