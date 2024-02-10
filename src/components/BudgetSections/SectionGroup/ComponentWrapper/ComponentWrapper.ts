import { type ButtonProps } from "@chakra-ui/react";

export type ComponentWrapperProps = {
    title: string;
} & ButtonProps;

type UseComponentWrapper = () => {
    handleSelectComponent: () => void;
};

export const useComponentWrapper: UseComponentWrapper = () => {
    const handleSelectComponent = (): void => {
        console.log("Select component");
    };

    return {
        handleSelectComponent
    };
};
