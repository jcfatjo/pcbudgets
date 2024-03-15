import { isValidObjectId } from "mongoose";

import { type BudgetModel } from "../features/budgets/models/budget.model.js";

export const isValidId = (id?: string | null): boolean => {
    return id != null && typeof id !== "undefined" && isValidObjectId(id);
};

export const isValidBudget = (budget?: BudgetModel | null): boolean => {
    return budget != null && typeof budget !== "undefined";
};
