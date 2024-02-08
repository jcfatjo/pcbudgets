import type { NextApiRequest, NextApiResponse } from "next";

import { type BudgetModel, ComponentType } from "@/models/budet.model";
import { type BudgetsResponse } from "@/types/budgets.response";

export const MOCK_BUDGETS: BudgetModel[] = [
    {
        id: 1,
        name: "PC de Grecia",
        components: {
            [ComponentType.CPU]: [
                {
                    type: ComponentType.CPU,
                    brand: "Intel",
                    model: "Core i7 13700K",
                    quantity: 1,
                    price: 405.96
                }
            ],
            [ComponentType.MOTHERBOARD]: [
                {
                    type: ComponentType.MOTHERBOARD,
                    brand: "ASUS",
                    model: "ROG STRIX B760-I GAMING WIFI",
                    quantity: 1,
                    price: 215.18
                }
            ]
        }
    },
    {
        id: 2,
        name: "PC de Miguel",
        components: {
            [ComponentType.CPU]: [
                {
                    type: ComponentType.CPU,
                    brand: "Ryzen",
                    model: "7 5800X",
                    quantity: 1,
                    price: 245.99
                }
            ],
            [ComponentType.MOTHERBOARD]: [
                {
                    type: ComponentType.MOTHERBOARD,
                    brand: "MSI",
                    model: "MPG B550I GAMING EDGE WIFI",
                    quantity: 1,
                    price: 194.35
                }
            ]
        }
    },
    {
        id: 3,
        name: "PC de Vera",
        components: {
            [ComponentType.CPU]: [
                {
                    type: ComponentType.CPU,
                    brand: "Ryzen",
                    model: "5 5600G",
                    quantity: 1,
                    price: 116.99
                }
            ],
            [ComponentType.MOTHERBOARD]: [
                {
                    type: ComponentType.MOTHERBOARD,
                    brand: "ASUS",
                    model: "TUF GAMING B550M-PLUS WIFI II",
                    quantity: 1,
                    price: 134.99
                }
            ]
        }
    }
];

const handler = async (_req: NextApiRequest, res: NextApiResponse<BudgetsResponse>): Promise<void> => {
    try {
        // TODO: Fetch data from the API
        /* const response = await fetch("");

        if (!response.ok) {
            const errorMessage = "Error fetching data.";
            res.status(400).end(JSON.stringify({ error: errorMessage }));
        } */

        res.status(200).json({ data: MOCK_BUDGETS });
    } catch (error) {
        res.status(500).end(JSON.stringify({ error }));
    }
};

export default handler;
