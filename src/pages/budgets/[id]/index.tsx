import { Stack, Text } from "@chakra-ui/react";
import React from "react";

import BudgetSections from "@/components/BudgetSections";
import { useBudget } from "@/pages/budgets/[id]/Budget";

const Budget: React.FC = () => {
    const { budget } = useBudget();

    return (
        <>
            {budget && (
                <Stack>
                    <Text fontSize="xl" textAlign="center" my={4}>
                        {budget.name}
                    </Text>
                    <BudgetSections budgetId={budget.id} components={budget.componentRecord} />
                </Stack>
            )}
        </>
    );
};

export default Budget;
