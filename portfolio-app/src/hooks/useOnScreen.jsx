// This custom hook serves to check whether an element is visible to start animations using classNames changes for example.

import { useState, useRef, useEffect } from "react";

//---------------------------------------------------------------------
const useOnScreen = (threshold = 0.1) => {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold }
        );
        if (ref.current) {
            observer.observe(ref.current)
        }

        return () => {
            if (ref.current) {
                observer.disconnect();
            }
        };
    }, [threshold]);

    return [ref, isVisible]

};

export default useOnScreen;

