import { Budget, type BudgetModel } from "../models/budget.model.js";

const getAll = async (): Promise<BudgetModel[]> => {
    return Budget.find();
};

const get = async (id: string): Promise<BudgetModel | null> => {
    return Budget.findById(id);
};

const create = async (budget: BudgetModel): Promise<BudgetModel> => {
    return new Budget(budget).save();
};

const update = async (id: string, budget: BudgetModel): Promise<BudgetModel | null> => {
    return Budget.findOneAndUpdate({ _id: id }, budget);
};

const remove = async (id: string): Promise<BudgetModel | null> => {
    return Budget.findByIdAndDelete(id);
};

export { getAll, get, create, update, remove };
