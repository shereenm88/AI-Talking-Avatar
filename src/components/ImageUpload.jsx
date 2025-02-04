import React from 'react';

function ImageUpload() {
  return (
    <div className="mb-4">
      <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700 mb-2">
        Upload Your Image
      </label>
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      />
      {/* Image preview and cropping will be added here */}
    </div>
  );
}

export default ImageUpload;
