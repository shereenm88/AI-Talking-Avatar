import React from 'react'
import ImageUpload from './components/ImageUpload';
import AvatarControls from './components/AvatarControls';
import AvatarDisplay from './components/AvatarDisplay';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">PersonaSync AI Avatar Generator</h1>
      <ImageUpload />
      <AvatarControls />
      <AvatarDisplay />
    </div>
  );
}

export default App;
