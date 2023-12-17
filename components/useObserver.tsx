import { MutableRefObject, useEffect, useRef, useState } from 'react';
/**
 * @description: Tells if the component is observable by the user
 */
export const useObserver = (): [visible: boolean, componentRef: MutableRefObject<any>] => {
    const [visible, setVisible] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.45,
        };
        const observerCallback = (entries) => {
            const [entry] = entries;

            if (entry.isIntersecting && !visible) {
                setVisible(true);
            } else if (!entry.isIntersecting && visible) {
                setVisible(false);
            }
        };

        if (componentRef.current) {
            const observer = new IntersectionObserver(observerCallback, options);
            observer.observe(componentRef.current);
            return () => {
                if (componentRef.current) observer.unobserve(componentRef.current);
            };
        }
    }, [visible, componentRef]);

    return [visible, componentRef];
};
