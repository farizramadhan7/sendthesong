import React from 'react';

function TextSupport() {
  return (
    <div className="text-center mt-24 mb-8 md:mt-32 md:mb-8 max-w-3xl mx-auto">
      {/* Margin atas lebih besar untuk heading */}
      <h1 className="mb-4 text-3xl font-medium sm:text-5xl md:mb-6" >
        Support <span className="font-beanie"style={{ fontFamily: 'ReenieBeanie' }}>TelcomSendTheSong</span>
      </h1>
      <p className="max-w-3xl mx-auto mb-6 text-center font-normal text-base leading-[26px] md:mb-8">
        TelcomSendTheSong is and will always be completely free to use! However, if you'd like to support the development and server costs,
        you can make a voluntary contribution. Any amount is deeply appreciated and helps keep this service running smoothly for everyone ❤️ Bayar KTA YAHH!
      </p>
    </div>
  );
}

export default TextSupport;
