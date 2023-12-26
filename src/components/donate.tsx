import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Donate() {

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Function to update the state with the current window width
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    // Set the initial width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up: Remove event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
}, []); // Empty dependency array ensures this runs only on mount and unmount


  return (
    <>
      {/* Title */}
      <div className={`font-orbitron ${windowWidth < 600 ? 'm-8 text-lg': 'm-20 mb-8 text-2xl' }`}>
          Donate
      </div>

      {/* Description */}
      <div className={`font-avantgarde ${windowWidth < 600 ? 'm-8 text-xs': 'm-20 mt-8 text-lg' }`}>
        Your donation helps to support our efforts to bring reliable information regarding the state, benefits, use cases and risks of restaking protocols as they exist today and as they evolve over time.

        <br />
        <br />

        We aim to provide information that is unbiased and credibly neutral. As restaking protocols develop, we expect to add more metrics to this website, including but not limited to the composition of AVS operators, the audits of AVS software, slashing conditions, fees, use of veto comittees, stake token composition, AVS computational requirements, business models & more.

        <br />
        <br />

        We are a small but nifty team of blockchain enthusiasts who believe in greater information availability and transparency. We are not supported by EigenLayer.
      </div>

      <div className='flex flex-col items-center'>

        {/* QR Code */}
        <Image
            src="/address-qr-code.png"
            alt="Address QR Code"
            width={windowWidth * 0.3 > 400 ? 400 : windowWidth * 0.3}  
            height={windowWidth * 0.3 > 400 ? 400 : windowWidth * 0.3}
        />

        {/* Address */}
        <div className={`font-avantgarde m-12 ${windowWidth < 600 ? ' text-xs m-6': 'text-xl'}`}>
          0x3268d5e38a7287d28a5cc0312677b02a212d8795 
        </div>
      </div>



    </>
  )
}
