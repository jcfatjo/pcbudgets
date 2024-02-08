import { Text } from "@chakra-ui/react";
import React from "react";

import { useBudget } from "@/pages/budgets/[id]/Budget";

const Budget: React.FC = () => {
    const { budget } = useBudget();

    return <Text>{budget?.name}</Text>;
};

export default Budget;
