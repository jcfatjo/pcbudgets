import { Divider, Stack, Text } from "@chakra-ui/react";
import React from "react";

import BudgetTable from "@/components/BudgetTable";
import { useBudget } from "@/pages/budgets/[id]/Budget";

const Budget: React.FC = () => {
    const { budget } = useBudget();

    return (
        <Stack>
            <Text>{budget?.name}</Text>
            <Divider />
            {budget && <BudgetTable budget={budget} />}
        </Stack>
    );
};

export default Budget;
