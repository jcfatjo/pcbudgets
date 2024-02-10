import type { NextApiRequest, NextApiResponse } from "next";

import { type BudgetModel, ComponentType } from "@/models/budet.model";
import { type BudgetsResponse } from "@/types/budgets.response";

export const MOCK_BUDGETS: BudgetModel[] = [
    {
        id: 1,
        name: "PC de Grecia",
        componentRecord: {
            [ComponentType.CPU]: [
                {
                    id: 1,
                    type: ComponentType.CPU,
                    brand: "Intel",
                    model: "Core i7 13700K",
                    quantity: 1,
                    price: 405.96
                }
            ],
            [ComponentType.MOTHERBOARD]: [
                {
                    id: 2,
                    type: ComponentType.MOTHERBOARD,
                    brand: "ASUS",
                    model: "ROG STRIX B760-I GAMING WIFI",
                    quantity: 1,
                    price: 215.18
                }
            ],
            [ComponentType.RAM]: [null],
            [ComponentType.CASE]: [null],
            [ComponentType.PSU]: [null],
            [ComponentType.STORAGE_SSD_M2]: [
                {
                    id: 3,
                    type: ComponentType.STORAGE_SSD_M2,
                    brand: "Samsung",
                    model: "990 PRO",
                    quantity: 1,
                    price: 89.99
                },
                {
                    id: 4,
                    type: ComponentType.STORAGE_SSD_M2,
                    brand: "WD_BLACK",
                    model: "SN850X",
                    quantity: 1,
                    price: 84.99
                }
            ],
            [ComponentType.STORAGE_SSD_SATA]: [null],
            [ComponentType.STORAGE_HDD_SATA]: [null],
            [ComponentType.WATER_COOLING]: [
                {
                    id: 5,
                    type: ComponentType.WATER_COOLING,
                    brand: "",
                    model: "",
                    quantity: 0,
                    price: 0
                }
            ],
            [ComponentType.AIR_COOLING]: [
                {
                    id: 6,
                    type: ComponentType.AIR_COOLING,
                    brand: "",
                    model: "",
                    quantity: 0,
                    price: 0
                }
            ],
            [ComponentType.CASE_COOLING]: [null],
            [ComponentType.GPU]: [
                {
                    id: 7,
                    type: ComponentType.RAM,
                    brand: "",
                    model: "",
                    quantity: 0,
                    price: 0
                }
            ]
        },
        total: 796.12
    },
    {
        id: 2,
        name: "PC de Miguel",
        componentRecord: {
            [ComponentType.CPU]: [
                {
                    id: 8,
                    type: ComponentType.CPU,
                    brand: "Ryzen",
                    model: "7 5800X",
                    quantity: 1,
                    price: 245.99
                }
            ],
            [ComponentType.MOTHERBOARD]: [
                {
                    id: 9,
                    type: ComponentType.MOTHERBOARD,
                    brand: "MSI",
                    model: "MPG B550I GAMING EDGE WIFI",
                    quantity: 1,
                    price: 194.35
                }
            ],
            [ComponentType.RAM]: [null],
            [ComponentType.CASE]: [null],
            [ComponentType.PSU]: [null],
            [ComponentType.STORAGE_SSD_M2]: [
                {
                    id: 10,
                    type: ComponentType.STORAGE_SSD_M2,
                    brand: "Samsung",
                    model: "980 PRO",
                    quantity: 1,
                    price: 105.03
                },
                {
                    id: 11,
                    type: ComponentType.STORAGE_SSD_M2,
                    brand: "WD_BLACK",
                    model: "SN850",
                    quantity: 1,
                    price: 104.96
                }
            ],
            [ComponentType.STORAGE_SSD_SATA]: [null],
            [ComponentType.STORAGE_HDD_SATA]: [null],
            [ComponentType.WATER_COOLING]: [null],
            [ComponentType.AIR_COOLING]: [null],
            [ComponentType.CASE_COOLING]: [null],
            [ComponentType.GPU]: [null]
        },
        total: 650.33
    },
    {
        id: 3,
        name: "PC de Vera",
        componentRecord: {
            [ComponentType.CPU]: [
                {
                    id: 12,
                    type: ComponentType.CPU,
                    brand: "Ryzen",
                    model: "5 5600G",
                    quantity: 1,
                    price: 116.99
                }
            ],
            [ComponentType.MOTHERBOARD]: [
                {
                    id: 13,
                    type: ComponentType.MOTHERBOARD,
                    brand: "ASUS",
                    model: "TUF GAMING B550M-PLUS WIFI II",
                    quantity: 1,
                    price: 134.99
                }
            ],
            [ComponentType.RAM]: [null],
            [ComponentType.CASE]: [null],
            [ComponentType.PSU]: [null],
            [ComponentType.STORAGE_SSD_M2]: [
                {
                    id: 14,
                    type: ComponentType.STORAGE_SSD_M2,
                    brand: "Crucial",
                    model: "P3 Plus",
                    quantity: 1,
                    price: 105.03
                }
            ],
            [ComponentType.STORAGE_SSD_SATA]: [null],
            [ComponentType.STORAGE_HDD_SATA]: [null],
            [ComponentType.WATER_COOLING]: [null],
            [ComponentType.AIR_COOLING]: [null],
            [ComponentType.CASE_COOLING]: [null],
            [ComponentType.GPU]: [null]
        },
        total: 356.01
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
