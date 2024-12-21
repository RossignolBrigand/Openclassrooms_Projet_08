// This custom hook serves to check whether an element is visible to start animations using classNames changes for example.

import { useState, useRef, useEffect } from "react";

//---------------------------------------------------------------------
const useOnScreen = (threshold = [0.1, 0.25, 0.5]) => {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const currentRef = ref.current;
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
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            observer.disconnect(); // Disconnect the observer
        };
    }, [threshold]);

    return [ref, isVisible]

};

export default useOnScreen;

