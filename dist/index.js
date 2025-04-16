"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
export function ReactTailwindVisibleMotion({ id, children, onInTransitionMode = "translate-y-0 opacity-100 delay-[200ms] duration-[1000ms]", onOutTransitionMode = "translate-y-20 opacity-0 duration-100", className = "", }) {
    const myRef = useRef(null);
    const [myElementVisible, setMyElementVisible] = useState(false);
    const elementsViewed = useRef([]);
    useEffect(() => {
        let observerRefValue = null;
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setMyElementVisible(entry.isIntersecting);
            if (myRef.current && entry.isIntersecting) {
                if (!elementsViewed.current.includes(myRef.current.id)) {
                    elementsViewed.current.push(myRef.current.id);
                }
            }
        });
        if (myRef.current) {
            observer.observe(myRef.current);
            observerRefValue = myRef.current;
        }
        return () => {
            if (observerRefValue) {
                observer.unobserve(observerRefValue);
            }
        };
    }, []);
    return (_jsx("div", { id: id, className: `${myElementVisible ? onInTransitionMode : !elementsViewed.current.includes(id) && onOutTransitionMode} transition ${className}`, ref: myRef, children: children }));
}
