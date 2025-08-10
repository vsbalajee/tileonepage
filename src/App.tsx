import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          tileonepage
        </h1>
        <p className="text-gray-600 mb-8">
          tiles vetical
        </p>
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            Built with React, TypeScript, Tailwind CSS, Vite
          </p>
          <p className="text-xs text-gray-400">
            Created with Vibe - AI-powered development
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;