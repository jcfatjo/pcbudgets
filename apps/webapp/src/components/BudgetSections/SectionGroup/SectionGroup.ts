import { type ComponentGroup } from "@/components/BudgetSections/BudgetSections.types";
import { type BudgetComponentModel } from "@/models/budet.model";

export type SectionGroupProps = {
    budgetId: number;
    componentGroup: ComponentGroup;
    components: BudgetComponentModel[] | null[];
};
