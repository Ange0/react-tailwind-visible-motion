import React from "react";
type Props = {
    id: string;
    children: React.ReactNode;
    onInTransitionMode?: string;
    onOutTransitionMode?: string;
    className?: string;
};
export default function ElementOnScreenComponent({ id, children, onInTransitionMode, onOutTransitionMode, className, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
