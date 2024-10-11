
"use client"
import * as React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';

export default function HomeV2() {
  return (
    <main>
      <ResponsiveAppBar />
      <div className="w-full h-full my-10 mx-10">
        <h1 className="font-bold text-xl">Stock App</h1>
        <p>Simple stock management</p>
      </div>
    </main>
  );
}


