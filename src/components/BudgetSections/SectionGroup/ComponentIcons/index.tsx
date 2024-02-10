import { Center, Flex } from "@chakra-ui/react";
import React from "react";
import { FaChevronRight, FaPlus, FaRegTrashCan } from "react-icons/fa6";

import { type ComponentIconsProps, useComponentIcons } from "@/components/BudgetSections/SectionGroup/ComponentIcons/ComponentIcons";

const ComponentIcons: React.FC<ComponentIconsProps> = ({ index, count, max, hasComponent, onRemove, onAdd }) => {
    const { isCanAdd } = useComponentIcons();

    return (
        <Flex display="none" _groupHover={{ display: "flex" }} direction="column" alignItems="center" justifyContent="center" h="full">
            {hasComponent ? (
                <>
                    <Center p={4} pb={isCanAdd(index, count, max) ? 2 : 4} h="full" _hover={{ color: "red.600" }} onClick={onRemove}>
                        <FaRegTrashCan />
                    </Center>
                    {isCanAdd(index, count, max) && (
                        <Center p={4} pt={2} h="full" _hover={{ color: "blue.600" }} onClick={onAdd}>
                            <FaPlus />
                        </Center>
                    )}
                </>
            ) : (
                <Center p={4} h="full">
                    <FaChevronRight />
                </Center>
            )}
        </Flex>
    );
};

export default ComponentIcons;
