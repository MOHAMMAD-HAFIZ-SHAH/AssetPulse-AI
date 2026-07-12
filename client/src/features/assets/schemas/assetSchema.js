import { z } from "zod";

export const assetSchema = z.object({
    assetName: z
        .string()
        .min(3, "Asset name must be at least 3 characters")
        .max(100, "Asset name is too long"),

    categoryId: z
        .string()
        .min(1, "Category is required"),

    serialNumber: z
        .string()
        .min(3, "Serial Number is required")
        .max(100),

    acquisitionDate: z
        .string()
        .min(1, "Acquisition Date is required"),

    acquisitionCost: z
        .coerce
        .number()
        .positive("Cost must be greater than zero"),

    departmentId: z
        .string()
        .min(1, "Department is required"),

    location: z
        .string()
        .min(2, "Location is required"),

    condition: z
        .string()
        .min(1, "Condition is required"),

    warrantyExpiry: z
        .string()
        .optional(),

    description: z
        .string()
        .max(500)
        .optional(),

    isBookable: z.boolean(),

    status: z.string(),

    image: z.any().optional(),
});