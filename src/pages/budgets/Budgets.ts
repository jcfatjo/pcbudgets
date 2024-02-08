import { useEffect, useState } from "react";

import { type Budget } from "@/models/budet.model";
import { MOCK_BUDGETS } from "@/pages/budgets/Budgets.constants";

type UseBudgets = {
    budgets: Budget[];
};

export const useBudgets = (): UseBudgets => {
    const [budgets, setBudgets] = useState(MOCK_BUDGETS);

    useEffect(() => {
        setBudgets(MOCK_BUDGETS);
    }, []);

    return {
        budgets
    };
};
