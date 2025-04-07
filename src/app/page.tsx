// src/app/page.tsx
'use client'; // This might be optional depending on if page.tsx *itself* needs client features,
              // but it's safer to keep if unsure. The dynamic import handles the Layout part.

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the Layout component from its correct path, disabling SSR
const DynamicLayout = dynamic(() => import('../components/Layout'), { // Ensure this path is correct
  ssr: false, // This is the crucial fix!
  loading: () => <p>Loading page layout...</p> // Optional loading state
});

export default function Home() {
  return (
    // Render the dynamically imported Layout component
    <DynamicLayout />
  );
}
