import { type BudgetSection } from "@/components/BudgetSections/BudgetSections.types";
import { ComponentType } from "@/models/budet.model";

export const BUDGET_SECTIONS: BudgetSection[] = [
    {
        title: "Componentes base",
        componentGroups: [
            {
                type: ComponentType.CPU,
                title: "Procesador",
                isMandatory: true,
                max: 1
            },
            {
                type: ComponentType.MOTHERBOARD,
                title: "Placa base",
                isMandatory: true,
                max: 1
            },
            {
                type: ComponentType.RAM,
                title: "Memoria RAM",
                isMandatory: true,
                max: 4
            },
            {
                type: ComponentType.CASE,
                title: "Caja / Torre",
                isMandatory: true,
                max: 1
            },
            {
                type: ComponentType.PSU,
                title: "Fuente de alimentación",
                isMandatory: false,
                max: 1
            }
        ]
    },
    {
        title: "Almacenamiento",
        componentGroups: [
            {
                type: ComponentType.STORAGE_SSD_M2,
                title: "SSD M.2",
                isMandatory: false,
                max: 0
            },
            {
                type: ComponentType.STORAGE_SSD_SATA,
                title: "SSD SATA",
                isMandatory: false,
                max: 0
            },
            {
                type: ComponentType.STORAGE_HDD_SATA,
                title: "HDD SATA",
                isMandatory: false,
                max: 0
            }
        ]
    },
    {
        title: "Refrigeración",
        componentGroups: [
            {
                type: ComponentType.WATER_COOLING,
                title: "Refrigeración líquida",
                isMandatory: false,
                max: 1
            },
            {
                type: ComponentType.AIR_COOLING,
                title: "Refrigeración de CPU",
                isMandatory: false,
                max: 1
            },
            {
                type: ComponentType.CASE_COOLING,
                title: "Refrigeración de caja",
                isMandatory: false,
                max: 0
            }
        ]
    },
    {
        title: "Gráfica",
        componentGroups: [
            {
                type: ComponentType.GPU,
                title: "Tarjeta gráfica",
                isMandatory: false,
                max: 3
            }
        ]
    }
];
