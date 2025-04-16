"use client";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  id: string;
  children: React.ReactNode;
  onInTransitionMode?: string;
  onOutTransitionMode?: string;
  className?: string;
};

export function ReactTailwindVisibleMotion({
  id,
  children,
  onInTransitionMode = "translate-y-0 opacity-100 delay-[200ms] duration-[1000ms]",
  onOutTransitionMode = "translate-y-20 opacity-0 duration-100",
  className = "",
}: Props) {
  const myRef = useRef<HTMLDivElement>(null);
  const [myElementVisible, setMyElementVisible] = useState<boolean>(false);
  const elementsViewed = useRef<string[]>([]);

  useEffect(() => {
    let observerRefValue: HTMLDivElement | null = null;
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

  return (
    <div
      id={id}
      className={`${
        myElementVisible ? onInTransitionMode : !elementsViewed.current.includes(id) && onOutTransitionMode
      } transition ${className}`}
      ref={myRef}
    >
      {children}
    </div>
  );
}