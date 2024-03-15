import { type ComponentType } from "@/models/budet.model";

export type ComponentGroup = {
    type: ComponentType;
    title: string;
    isMandatory: boolean;
    max: number;
};

export type BudgetSection = {
    title: string;
    componentGroups: ComponentGroup[];
};
