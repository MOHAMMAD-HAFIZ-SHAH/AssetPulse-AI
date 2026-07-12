import { z } from "zod";

export const maintenanceSchema = z.object({

    assetId: z
        .string()
        .min(1, "Please select an asset"),

    maintenanceType: z
        .string()
        .min(1, "Maintenance type is required"),

    priority: z
        .string()
        .min(1, "Priority is required"),

    technicianId: z
        .string()
        .optional(),

    startDate: z
        .string()
        .min(1, "Start date is required"),

    dueDate: z
        .string()
        .min(1, "Due date is required"),

    estimatedCost: z
        .coerce
        .number()
        .min(0, "Estimated cost cannot be negative"),

    description: z
        .string()
        .min(10, "Description must be at least 10 characters")
        .max(1000),

    notes: z
        .string()
        .max(1000)
        .optional(),

    attachments: z
        .any()
        .optional(),

});