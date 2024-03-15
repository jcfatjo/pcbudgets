import { useGetBudgets } from "@/hooks/api/api.hook";
import { type BudgetModel } from "@/models/budet.model";

type UseBudgets = () => {
    budgets?: BudgetModel[];
    isLoading: boolean;
    isError: boolean;
};

export const useBudgets: UseBudgets = () => {
    const { budgets, isLoading, isError } = useGetBudgets();

    return {
        budgets,
        isLoading,
        isError
    };
};
