import type React from "react";
import { type MouseEventHandler } from "react";

import { useCreateComponent, useDeleteComponent } from "@/hooks/api/api.hook";
import { type BudgetComponentModel, type ComponentType } from "@/models/budet.model";

export type GroupComponentProps = {
    budgetId: number;
    type: ComponentType;
    title: string;
    isMandatory: boolean;
    max: number;
    count: number;
    index: number;
    component: BudgetComponentModel | null;
};

type UseGroupComponent = (
    budgetId: number,
    type: ComponentType,
    componentId: number
) => {
    isDeleteError: boolean;
    handleRemove: MouseEventHandler;
    handleAdd: MouseEventHandler;
};

export const useGroupComponent: UseGroupComponent = (budgetId: number, type: ComponentType, componentId: number) => {
    const { deleteComponent, isDeleteError } = useDeleteComponent(budgetId, type, componentId);
    const { createComponent, isCreateError } = useCreateComponent(budgetId, type);

    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();
        console.log("Remove component");
        void deleteComponent();
    };

    const handleAdd = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();
        console.log("Add component");
        void createComponent();
    };

    return {
        isDeleteError,
        isCreateError,
        handleRemove,
        handleAdd
    };
};
