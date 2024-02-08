import type { NextApiRequest, NextApiResponse } from "next";

import { MOCK_BUDGETS } from "@/pages/api/budgets";
import { type BudgetResponse } from "@/types/budget.response";

const handler = async (req: NextApiRequest, res: NextApiResponse<BudgetResponse>): Promise<void> => {
    const budgetId = req.query.id as string;

    try {
        // TODO: Fetch data from the API
        /* const response = await fetch("");

        if (!response.ok) {
            const errorMessage = "Error fetching data.";
            res.status(400).end(JSON.stringify({ error: errorMessage }));
        } */

        const budget = MOCK_BUDGETS.find(budget => budget.id === Number(budgetId));

        if (budget) {
            res.status(200).json({ data: budget });
        } else {
            const errorMessage = `Budget with id "${budgetId}" not found.`;
            res.status(404).end(JSON.stringify({ error: errorMessage }));
        }
    } catch (error) {
        res.status(500).end(JSON.stringify({ error }));
    }
};

export default handler;
