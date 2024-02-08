import { useQuery } from "@tanstack/react-query";

import { QueryKeys } from "@/hooks/api/api.constants";
import { type BudgetModel } from "@/models/budet.model";

const fetchBudgets = async (): Promise<BudgetModel[]> => {
    const response = await fetch("/api/budgets");

    if (!response.ok) {
        const errorMessage = "An error occurred while fetching the budgets.";
        console.error(errorMessage);
        throw new Error(errorMessage);
    }

    const { data } = await response.json();

    return data;
};

type UseGetBudgets = {
    budgets: BudgetModel[] | undefined;
    isLoading: boolean;
    isError: boolean;
};

export const useGetBudgets = (): UseGetBudgets => {
    const {
        data: budgets,
        isLoading,
        isError
    } = useQuery({
        queryKey: [QueryKeys.BUDGETS],
        queryFn: async () => await fetchBudgets(),
        refetchOnWindowFocus: false
    });

    return {
        budgets,
        isLoading,
        isError
    };
};

const fetchBudget = async (id: number): Promise<BudgetModel> => {
    const response = await fetch(`/api/budgets/${id}`);

    if (!response.ok) {
        const errorMessage = `An error occurred while fetching the budget with id "${id}".`;
        console.error(errorMessage);
        throw new Error(errorMessage);
    }

    const { data } = await response.json();

    return data;
};

type UseGetBudget = {
    budget: BudgetModel | undefined;
    isLoading: boolean;
    isError: boolean;
};

export const useGetBudget = (id: number): UseGetBudget => {
    const {
        data: budget,
        isLoading,
        isError
    } = useQuery({
        queryKey: [QueryKeys.BUDGET, id],
        queryFn: async () => await fetchBudget(id),
        refetchOnWindowFocus: false
    });

    return {
        budget,
        isLoading,
        isError
    };
};
