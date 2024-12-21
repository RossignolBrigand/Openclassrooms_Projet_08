// This hook is used to track the viewport's size on mount and set a bool condition to render some elements for example.

import { useState, useEffect } from "react";

//---------------------------------------------------------------------------

const useWindowSize = () => {

    // Initialize state with undefined so server and client renders match
    const [windowSize, setWindowSize] = useState({ width: undefined, height: undefined });

    useEffect(() => {
        if (typeof window !== "undefined") {

            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            }

            // Add event listener
            window.addEventListener('resize', handleResize);

            // Call handler right away so state gets updated with initial window size
            handleResize();

            // Remove event listener on cleanup
            return () => {
                window.removeEventListener('resize', handleResize);
            }
        }

    }, []); // Empty array ensures that effect is only run once on mount

    return windowSize;
};

export default useWindowSize;
