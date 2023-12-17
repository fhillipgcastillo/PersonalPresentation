import { useEffect, useState } from 'react';
/**
 * @description: Tells if the component is observable by the user
 * @param object <{ref : componentRef}>
 * @returns visible
 */
export const useObserver = ({ ref }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.45,
        };
        const observerCallback = (entries) => {
            const [entry] = entries;

            if (entry.isIntersecting && !visible) {
                console.log("intercepting", entry);
                setVisible(true);
            } else if (!entry.isIntersecting && visible) {
                setVisible(false);
            }
        };

        if (ref.current) {
            const observer = new IntersectionObserver(observerCallback, options);
            observer.observe(ref.current);
            return () => {
                if (ref.current) observer.unobserve(ref.current);
            };
        }
    }, [visible, ref]);

    return visible;
};
