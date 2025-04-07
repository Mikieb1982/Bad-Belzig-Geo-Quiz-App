// src/app/page.tsx
'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Layout component from its correct path, disabling SSR
const DynamicLayout = dynamic(() => import('../components/Layout'), { // Ensure this path is correct
  ssr: false, // This prevents the component from running during server-side build
  loading: () => <p>Loading page layout...</p> // Optional loading state
});

export default function Home() {
  return (
    // Render the dynamically imported Layout component
    <DynamicLayout />
  );
}
