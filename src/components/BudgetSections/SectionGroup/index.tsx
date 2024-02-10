import React from "react";

import GroupComponent from "@/components/BudgetSections/SectionGroup/GroupComponent";
import { type SectionGroupProps } from "@/components/BudgetSections/SectionGroup/SectionGroup";

const SectionGroup: React.FC<SectionGroupProps> = ({ budgetId, componentGroup, components }) => {
    return (
        <>
            {components.map((component, index) => (
                <GroupComponent
                    key={`${componentGroup.type}-${index}`}
                    budgetId={budgetId}
                    {...componentGroup}
                    count={components.length}
                    index={index}
                    component={component}
                />
            ))}
        </>
    );
};

export default SectionGroup;
