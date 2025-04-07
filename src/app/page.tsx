'use client'; // Keep this if the page itself needs client interactivity, otherwise optional

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Layout component, disabling SSR
const DynamicLayout = dynamic(() => import('../components/Layout'), {
  ssr: false, // This prevents the component from running during server-side build
  loading: () => <p>Loading page layout...</p> // Optional: Show a loading indicator
});

export default function Home() {
  return (
    // Use the dynamically imported component
    <DynamicLayout />
  );
}
