import { type MouseEventHandler } from "react";

export type ComponentIconsProps = {
    index: number;
    count: number;
    max: number;
    hasComponent: boolean;
    onRemove: MouseEventHandler;
    onAdd: MouseEventHandler;
};

type UseComponentIcons = () => {
    isCanAdd: (index: number, count: number, max: number) => boolean;
};

export const useComponentIcons: UseComponentIcons = () => {
    const isCanAdd = (index: number, count: number, max: number): boolean => {
        const isMax = max > 0 && count === max;
        return !isMax && index === count - 1;
    };

    return { isCanAdd };
};
