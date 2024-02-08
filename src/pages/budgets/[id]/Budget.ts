import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { type Budget } from "@/models/budet.model";
import { MOCK_BUDGETS } from "@/pages/budgets/Budgets.constants";

type UseBudget = {
    budget: Budget | null;
};

export const useBudget = (): UseBudget => {
    const router = useRouter();
    const { id } = router.query;

    const [budget, setBudget] = useState<Budget | null>(null);

    useEffect(() => {
        const mockBudget = MOCK_BUDGETS.find(budget => budget.id === Number(id));
        if (mockBudget) {
            setBudget(mockBudget);
        }
    }, [id]);

    return {
        budget
    };
};
