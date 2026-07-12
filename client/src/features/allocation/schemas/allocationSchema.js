import { z } from "zod";

export const allocationSchema = z.object({

    assetId: z
        .string()
        .min(1, "Please select an asset"),

    allocationType: z
        .string()
        .min(1, "Allocation type is required"),

    employeeId: z
        .string()
        .optional(),

    departmentId: z
        .string()
        .optional(),

    allocationDate: z
        .string()
        .min(1, "Allocation date is required"),

    expectedReturnDate: z
        .string()
        .optional(),

    purpose: z
        .string()
        .min(5, "Purpose must contain at least 5 characters")
        .max(300),

    remarks: z
        .string()
        .max(1000)
        .optional(),

}).superRefine((data, ctx) => {

    if (

        data.allocationType === "Employee" &&

        !data.employeeId

    ) {

        ctx.addIssue({

            code: z.ZodIssueCode.custom,

            path: ["employeeId"],

            message: "Please select an employee",

        });

    }

    if (

        data.allocationType === "Department" &&

        !data.departmentId

    ) {

        ctx.addIssue({

            code: z.ZodIssueCode.custom,

            path: ["departmentId"],

            message: "Please select a department",

        });

    }

});