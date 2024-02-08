import { useRouter } from "next/router";

import { useGetBudget } from "@/hooks/api/api.hook";
import { type BudgetModel } from "@/models/budet.model";

type UseBudget = {
    budget?: BudgetModel;
    isLoading: boolean;
    isError: boolean;
};

export const useBudget = (): UseBudget => {
    const router = useRouter();
    const { id } = router.query;

    const { budget, isLoading, isError } = useGetBudget(Number(id));

    return {
        budget,
        isLoading,
        isError
    };
};
