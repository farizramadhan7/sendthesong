import React from 'react';

function ButtonSupport() {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:flex-nowrap md:gap-4">
      {/* Tombol Saweria */}
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-gray-900 px-4 py-2 w-auto h-10 text-sm">
        Support TelcomSendTheSong (Saweria)
      </button>

      {/* Tombol SociaBuzz */}
      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-gray-900 px-4 py-2 w-auto h-10 text-sm">
        Support TelcomSendTheSong (BCA/QRIS/BRI)
      </button>
    </div>
  );
}

export default ButtonSupport;
