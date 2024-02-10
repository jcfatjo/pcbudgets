import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { QueryKeys } from "@/hooks/api/api.constants";
import { type BudgetModel, type ComponentType } from "@/models/budet.model";

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

type UseGetBudgets = () => {
    budgets: BudgetModel[] | undefined;
    isLoading: boolean;
    isError: boolean;
};

export const useGetBudgets: UseGetBudgets = () => {
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

type UseGetBudget = (id: number) => {
    budget: BudgetModel | undefined;
    isLoading: boolean;
    isError: boolean;
};

export const useGetBudget: UseGetBudget = (id: number) => {
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

const fetchDeleteComponent = async (budgetId: number, componentType: ComponentType, componentId: number): Promise<void> => {
    const response = await fetch(`/api/budgets/${budgetId}/components/${componentType}/${componentId}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        const errorMessage = `An error occurred while deleting the component with id "${componentId}" and type "${componentType}" of budget with id "${budgetId}".`;
        console.error(errorMessage);
        throw new Error(errorMessage);
    }
};

type UseDeleteComponent = (
    budgetId: number,
    componentType: ComponentType,
    componentId: number
) => {
    deleteComponent: () => Promise<void>;
    isDeleteError: boolean;
};

export const useDeleteComponent: UseDeleteComponent = (budgetId: number, componentType: ComponentType, componentId: number) => {
    const queryClient = useQueryClient();

    const { mutateAsync: deleteComponent, isError: isDeleteError } = useMutation({
        mutationKey: [QueryKeys.BUDGET_COMPONENT, budgetId, componentType, componentId],
        mutationFn: async () => {
            await fetchDeleteComponent(budgetId, componentType, componentId);
        },
        onSettled: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKeys.BUDGET, budgetId] });
        }
    });

    return {
        deleteComponent,
        isDeleteError
    };
};

const fetchCreateComponent = async (budgetId: number, componentType: ComponentType): Promise<void> => {
    const response = await fetch(`/api/budgets/${budgetId}/components/${componentType}`, {
        method: "CREATE"
    });

    if (!response.ok) {
        const errorMessage = `An error occurred while creating a component of type "${componentType}" for budget with id "${budgetId}".`;
        console.error(errorMessage);
        throw new Error(errorMessage);
    }
};

type UseCreateComponent = (
    budgetId: number,
    componentType: ComponentType
) => {
    createComponent: () => Promise<void>;
    isCreateError: boolean;
};

export const useCreateComponent: UseCreateComponent = (budgetId: number, componentType: ComponentType) => {
    const queryClient = useQueryClient();

    const { mutateAsync: createComponent, isError: isCreateError } = useMutation({
        mutationKey: [QueryKeys.BUDGET_COMPONENT, budgetId, componentType],
        mutationFn: async () => {
            await fetchCreateComponent(budgetId, componentType);
        },
        onSettled: async () => {
            await queryClient.invalidateQueries({ queryKey: [QueryKeys.BUDGET, budgetId] });
        }
    });

    return {
        createComponent,
        isCreateError
    };
};
