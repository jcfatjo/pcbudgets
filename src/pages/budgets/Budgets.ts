import { useEffect, useState } from "react";

import { type Budget } from "@/models/budet.model";

const MOCK_BUDGETS: Budget[] = [
    {
        id: 1,
        name: "PC de Grecia"
    },
    {
        id: 2,
        name: "PC de Miguel"
    },
    {
        id: 3,
        name: "PC de Vera"
    }
];

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
