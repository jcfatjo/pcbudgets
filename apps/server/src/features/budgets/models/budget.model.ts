import { model, Schema } from "mongoose";

import { type BudgetComponent } from "../types/budget-component.type.js";
import { type ComponentType } from "../types/component-type.enum.js";

export type BudgetModel = {
    mame: string;
    components: Record<ComponentType, BudgetComponent>;
    total: number;
};

const budgetSchema = new Schema({
    name: String,
    components: {
        CPU: Schema.ObjectId,
        MOTHERBOARD: Schema.ObjectId,
        RAM: Schema.ObjectId,
        CASE: Schema.ObjectId,
        PSU: Schema.ObjectId,
        STORAGE_SSD_M2: Schema.ObjectId,
        STORAGE_SSD_SATA: Schema.ObjectId,
        STORAGE_HDD_SATA: Schema.ObjectId,
        WATER_COOLING: Schema.ObjectId,
        AIR_COOLING: Schema.ObjectId,
        CASE_COOLING: Schema.ObjectId,
        GPU: Schema.ObjectId
    }
});

export const Budget = model<BudgetModel>("Budget", budgetSchema);
