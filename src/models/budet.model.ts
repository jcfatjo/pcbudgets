export enum ComponentType {
    CPU = "CPU",
    MOTHERBOARD = "MOTHERBOARD",
    RAM = "RAM",
    CASE = "CASE",
    PSU = "PSU",
    STORAGE_SSD_M2 = "STORAGE_SSD_M2",
    STORAGE_SSD_SATA = "STORAGE_SSD_SATA",
    STORAGE_HDD_SATA = "STORAGE_HDD_SATA",
    WATER_COOLING = "WATER_COOLING",
    AIR_COOLING = "AIR_COOLING",
    CASE_COOLING = "CASE_COOLING",
    GPU = "GPU"
}

export type BudgetComponentModel = {
    id: number;
    type: ComponentType;
    brand: string;
    model: string;
    price: number;
    quantity: number;
};

export type ComponentRecord = Record<ComponentType, BudgetComponentModel[] | null[]>;

export type BudgetModel = {
    id: number;
    name: string;
    componentRecord: ComponentRecord;
    total: number;
};
