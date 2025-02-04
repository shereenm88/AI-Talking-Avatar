import React from 'react';

function AvatarControls() {
  return (
    <div className="mb-4">
      <div className="mb-2">
        <label htmlFor="text-input" className="block text-sm font-medium text-gray-700 mb-2">
          Enter Text for Avatar to Speak
        </label>
        <textarea
          id="text-input"
          rows="3"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Type something here..."
        ></textarea>
      </div>
      <div className="mb-2">
        <label htmlFor="voice-select" className="block text-sm font-medium text-gray-700 mb-2">
          Select Voice
        </label>
        <select
          id="voice-select"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        >
          <option value="">Default Voice</option>
          {/* Voice options will be dynamically added here */}
        </select>
      </div>
      {/* More controls like style selection can be added here */}
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
        Generate Talking Avatar
      </button>
    </div>
  );
}

export default AvatarControls;
