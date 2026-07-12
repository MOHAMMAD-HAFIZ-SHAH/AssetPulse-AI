import { z } from "zod";

export const bookingSchema = z.object({

    assetId: z
        .string()
        .min(1, "Please select an asset"),

    employeeId: z
        .string()
        .min(1, "Please select an employee"),

    bookingDate: z
        .string()
        .min(1, "Booking date is required"),

    startTime: z
        .string()
        .min(1, "Start time is required"),

    endTime: z
        .string()
        .min(1, "End time is required"),

    purpose: z
        .string()
        .min(5, "Purpose must be at least 5 characters")
        .max(300),

    remarks: z
        .string()
        .max(500)
        .optional(),

});