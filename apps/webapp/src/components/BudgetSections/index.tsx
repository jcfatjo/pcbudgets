import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Text, VStack } from "@chakra-ui/react";
import React from "react";

import { type BudgetSectionsProps } from "@/components/BudgetSections/BudgetSections";
import { BUDGET_SECTIONS } from "@/components/BudgetSections/BudgetSections.constants";
import SectionGroup from "@/components/BudgetSections/SectionGroup";

const BudgetSections: React.FC<BudgetSectionsProps> = ({ budgetId, components }) => {
    return (
        <Accordion defaultIndex={[0]} allowMultiple>
            {BUDGET_SECTIONS.map(section => (
                <AccordionItem key={section.title}>
                    <AccordionButton h="60px" _hover={{ bgColor: "blackAlpha.100" }}>
                        <Text as="b" fontSize="lg" flex="1" textAlign="left">
                            {section.title}
                        </Text>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <VStack spacing={4} align="stretch">
                            {section.componentGroups.map(componentGroup => (
                                <SectionGroup
                                    key={componentGroup.type}
                                    budgetId={budgetId}
                                    componentGroup={componentGroup}
                                    components={components[componentGroup.type]}
                                />
                            ))}
                        </VStack>
                    </AccordionPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default BudgetSections;
