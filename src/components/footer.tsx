
import { useState, useEffect } from 'react';

const Footer = () => {

    // Used for detecting the size of the window when loaded & resized

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

        console.log(`Current window width: ${windowWidth}px`);

        // Clean up: Remove event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array ensures this runs only on mount and unmount


    return (
      <>
        <div className={`flex ${ windowWidth < 600 ? 'flex-col space-y-8' : ''} items-center justify-between w-full p-8`}>

            {/* <3 */}
            <div>
            We ❤ ⛓️
            </div>

            {/* Social Media Links */}
            <div className="flex items-center m-2 space-x-12">
              <a href="https://twitter.com/0xeigenstate" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--text)" role="img" aria-label="X logo"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#FAFAFA"></path></svg>
              </a>
              <a href="https://discord.gg/N9ZeJ9sR" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--text)" role="img" aria-label="Discord logo"><path fillRule="evenodd" d="M20.32 4.66C18.79 3.95 17.15 3.44 15.43 3.14C15.4 3.13 15.37 3.15 15.35 3.18C15.14 3.55 14.91 4.04 14.75 4.43C12.9 4.15 11.07 4.15 9.26 4.43C9.09 4.03 8.85 3.55 8.64 3.18C8.62 3.15 8.59 3.14 8.56 3.14C6.85 3.44 5.21 3.95 3.68 4.66C3.66 4.66 3.65 4.67 3.64 4.68C0.53 9.33 -0.32 13.87 0.1 18.34C0.1 18.37 0.11 18.39 0.13 18.4C2.18 19.91 4.17 20.82 6.12 21.43C6.15 21.44 6.19 21.43 6.21 21.4C6.67 20.77 7.08 20.11 7.43 19.41C7.45 19.37 7.43 19.32 7.39 19.3C6.74 19.05 6.12 18.75 5.52 18.41C5.47 18.38 5.47 18.31 5.51 18.28C5.64 18.19 5.76 18.09 5.88 17.99C5.91 17.97 5.94 17.97 5.96 17.98C9.89 19.77 14.14 19.77 18.02 17.98C18.05 17.97 18.08 17.97 18.1 17.99C18.22 18.09 18.35 18.19 18.47 18.28C18.52 18.31 18.51 18.38 18.47 18.41C17.87 18.76 17.25 19.05 16.59 19.3C16.55 19.32 16.53 19.37 16.55 19.41C16.91 20.11 17.33 20.77 17.78 21.4C17.8 21.43 17.83 21.44 17.86 21.43C19.82 20.82 21.81 19.91 23.87 18.4C23.88 18.39 23.89 18.37 23.9 18.34C24.4 13.17 23.06 8.67 20.35 4.68C20.34 4.67 20.33 4.66 20.32 4.66ZM8.02 15.62C6.84 15.62 5.86 14.53 5.86 13.2C5.86 11.86 6.82 10.78 8.02 10.78C9.23 10.78 10.2 11.87 10.18 13.2C10.18 14.53 9.22 15.62 8.02 15.62ZM15.99 15.62C14.81 15.62 13.84 14.53 13.84 13.2C13.84 11.86 14.79 10.78 15.99 10.78C17.21 10.78 18.17 11.87 18.15 13.2C18.15 14.53 17.21 15.62 15.99 15.62Z" fill="#FAFAFA"></path></svg>
              </a>
              <a href="https://github.com/eigen-labs" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="var(--text)" role="img" aria-label="Github logo"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="#FAFAFA"></path></svg>
              </a>
            </div>

            {/* Copyright */}
            <div>
                © 2023 EigenState
            </div>

        </div>
      </>
    )
  }

export default Footer;
