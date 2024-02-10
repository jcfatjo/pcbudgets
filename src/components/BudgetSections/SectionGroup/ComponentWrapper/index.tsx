import { Flex } from "@chakra-ui/react";
import React from "react";

import {
    type ComponentWrapperProps,
    useComponentWrapper
} from "@/components/BudgetSections/SectionGroup/ComponentWrapper/ComponentWrapper";

const ComponentWrapper: React.FC<ComponentWrapperProps> = ({ title, children }) => {
    const { handleSelectComponent } = useComponentWrapper();

    return (
        <Flex
            key={title}
            role="group"
            alignItems="center"
            justifyContent="space-between"
            rounded={8}
            _hover={{ cursor: "pointer", bgColor: "blackAlpha.100" }}
            h="80px"
            onClick={handleSelectComponent}>
            {children}
        </Flex>
    );
};

export default ComponentWrapper;
