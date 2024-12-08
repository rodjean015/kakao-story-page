import React from 'react';

function App() {
  const openLink = (fileUrl) => {
    window.open(fileUrl, '_blank'); // Open the link in a new tab
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to kakaoStory Page</h1>
      <p className="text-lg text-gray-300 mb-6">
        Access your desired application or tool below.
      </p>
      <div className="flex flex-row space-x-4">
        <button
          onClick={() =>
            openLink('https://drive.google.com/drive/folders/1vLKi-BvW3jlmn-sGR5rdxmO9neA30_P9?usp=sharing')
          }
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-400"
        >
          Open LineageII Bot
        </button>
        <button
          onClick={() =>
            openLink('https://drive.google.com/drive/folders/1Oh1nWaemmfeTQ4zYn3Kr93tIVnj2dkRT?usp=sharing')
          }
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-400"
        >
          Open Blackjack Bot
        </button>
        <button
          onClick={() =>
            openLink('https://drive.google.com/drive/folders/1W13RYtjKFyLbFN_BfHIKhXKyElFKZCoF?usp=sharing')
          }
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-400"
        >
          Open Poker Bot
        </button>
      </div>
    </div>
  );
}

export default App;
