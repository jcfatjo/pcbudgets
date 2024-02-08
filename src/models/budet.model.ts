export enum ComponentType {
    CPU = "CPU",
    MOTHERBOARD = "MOTHERBOARD"
    /* RAM = "RAM"
    STORAGE_M2 = "STORAGE_M2",
    STORAGE_SATA = "STORAGE_SATA",
    PSU = "PSU",
    CASE = "CASE",
    AIR_COOLING = "AIR_COOLING",
    WATER_COOLING = "WATER_COOLING",
    GPU = "GPU" */
}

export type BudgetComponentModel = {
    type: ComponentType;
    brand: string;
    model: string;
    price: number;
    quantity: number;
};

export type BudgetModel = {
    id: number;
    name: string;
    components: Record<ComponentType, BudgetComponentModel[]>;
};
