import type { NextApiRequest, NextApiResponse } from "next";

import { type ComponentType } from "@/models/budet.model";
import { MOCK_BUDGETS } from "@/pages/api/budgets";
import { type BudgetResponse } from "@/types/budget.response";

const handler = async (req: NextApiRequest, res: NextApiResponse<BudgetResponse>): Promise<void> => {
    const budgetId = req.query.budgetId as string;
    const componentType = req.query.componentType as ComponentType;
    const componentId = req.query.componentId as string;

    try {
        const budget = MOCK_BUDGETS.find(budget => budget.id === Number(budgetId));

        if (!budget) {
            const errorMessage = `Budget with id "${budgetId}" not found.`;
            res.status(404).end(JSON.stringify({ error: errorMessage }));
            return;
        }

        const components = budget.componentRecord[componentType];
        const componentIndex = components.findIndex(component => component?.id === Number(componentId));

        if (componentIndex === -1) {
            const errorMessage = `Component with type "${componentType}" and id "${componentId}" of budget "${budgetId}" not found.`;
            res.status(404).end(JSON.stringify({ error: errorMessage }));
            return;
        }

        if (components.length > 1) {
            components.splice(componentIndex, 1);
        } else {
            components[0] = null;
        }

        res.status(200).end();
    } catch (error) {
        res.status(500).end(JSON.stringify({ error }));
    }
};

export default handler;
