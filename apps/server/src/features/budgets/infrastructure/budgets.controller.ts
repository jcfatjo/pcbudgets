import { type NextFunction, type Request, type Response } from "express";

import { isValidBudget, isValidId } from "../../../config/utils.js";
import { type BudgetDto } from "../dto/budget.dto.js";
import { type BudgetsDto } from "../dto/budgets.dto.js";
import { type BudgetModel } from "../models/budget.model.js";
import * as budgetsService from "./budgets.service.js";

const getAll = async (_req: Request, res: Response<BudgetsDto>, next: NextFunction): Promise<void> => {
    try {
        const budgets = await budgetsService.getAll();

        if (budgets == null || typeof budgets === "undefined") {
            console.error("Budgets not found");
            res.status(404).send();
            return;
        }

        res.status(200).json({ data: budgets });
    } catch (error) {
        console.error("Couldn't get all budgets: ", error);
        next(error);
    }
};

const get = async (req: Request, res: Response<BudgetDto>, next: NextFunction): Promise<void> => {
    try {
        const budgetId: string = req.params.id;

        if (!isValidId(budgetId)) {
            console.error("Budget id is not valid");
            res.status(400).send();
            return;
        }

        const budget = await budgetsService.get(budgetId);

        if (budget == null || typeof budget === "undefined") {
            console.error(`Budget with id "${budgetId}" not found`);
            res.status(404).send();
            return;
        }

        res.status(200).json({ data: budget });
    } catch (error) {
        console.error("Couldn't get budget: ", error);
        next(error);
    }
};

const create = async (req: Request, res: Response<BudgetDto>, next: NextFunction): Promise<void> => {
    try {
        const budget: BudgetModel = req.body;

        if (!isValidBudget(budget)) {
            console.error("Budget data is not valid");
            res.status(400).send();
            return;
        }

        const createdBudget = await budgetsService.create(budget);

        if (!isValidBudget(createdBudget)) {
            console.error("Budget couldn't be created");
            res.status(500).send();
            return;
        }

        res.status(201).json({ data: createdBudget });
    } catch (error) {
        console.error("Couldn't create budget: ", error);
        next(error);
    }
};

const update = async (req: Request, res: Response<BudgetDto>, next: NextFunction): Promise<void> => {
    try {
        const budgetId: string = req.params.id;
        const budget: BudgetModel = req.body;

        if (!isValidId(budgetId) || !isValidBudget(budget)) {
            console.error("Budget data is not valid");
            res.status(400).send();
            return;
        }

        const updatedBudget = await budgetsService.update(budgetId, budget);

        if (updatedBudget == null || typeof updatedBudget === "undefined") {
            console.error("Budget couldn't be updated");
            res.status(500).send();
            return;
        }

        res.status(200).json({ data: updatedBudget });
    } catch (error) {
        console.error("Couldn't create budget: ", error);
        next(error);
    }
};

const remove = async (req: Request, res: Response<BudgetDto>, next: NextFunction): Promise<void> => {
    try {
        const budgetId: string = req.params.id;

        if (budgetId == null || typeof budgetId === "undefined") {
            console.error("Budget id is not valid");
            res.status(400).send();
            return;
        }

        const removedBudget = await budgetsService.remove(budgetId);

        if (removedBudget == null || typeof removedBudget === "undefined") {
            console.error("Budget not found or couldn't be removed");
            res.status(404).send();
            return;
        }

        res.status(204).send();
    } catch (error) {
        console.error("Couldn't remove budget: ", error);
        next(error);
    }
};

export { getAll, get, create, update, remove };
