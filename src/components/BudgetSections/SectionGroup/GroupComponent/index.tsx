import { Text, VStack } from "@chakra-ui/react";
import React from "react";

import ComponentIcons from "@/components/BudgetSections/SectionGroup/ComponentIcons";
import ComponentWrapper from "@/components/BudgetSections/SectionGroup/ComponentWrapper";
import { type GroupComponentProps, useGroupComponent } from "@/components/BudgetSections/SectionGroup/GroupComponent/GroupComponent";

const GroupComponent: React.FC<GroupComponentProps> = ({ budgetId, type, title, isMandatory, max, count, index, component }) => {
    const { handleRemove, handleAdd } = useGroupComponent(budgetId, type, component?.id ?? 0);

    return (
        <ComponentWrapper key={`${type}-${index}`} title={title}>
            <VStack spacing={component ? 1 : 0} align="stretch" p={4}>
                <Text as="b">
                    {title} {isMandatory ? "*" : ""}
                </Text>
                {component && (
                    <Text>
                        {component.brand} {component.model}
                    </Text>
                )}
            </VStack>
            <ComponentIcons index={index} max={max} count={count} hasComponent={!!component} onRemove={handleRemove} onAdd={handleAdd} />
        </ComponentWrapper>
    );
};

export default GroupComponent;
