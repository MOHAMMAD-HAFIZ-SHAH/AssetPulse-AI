import { body, validationResult } from "express-validator";

export const registerValidation = [

    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required.")
        .isLength({ min: 3, max: 50 })
        .withMessage("Name must be between 3 and 50 characters."),

    body("email")
        .trim()
        .isEmail()
        .withMessage("Valid email is required.")
        .normalizeEmail(),

    body("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters.")
        .matches(/[A-Z]/)
        .withMessage("Password must contain one uppercase letter.")
        .matches(/[a-z]/)
        .withMessage("Password must contain one lowercase letter.")
        .matches(/[0-9]/)
        .withMessage("Password must contain one number.")
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage("Password must contain one special character."),

    body("role")
        .optional()
        .isIn([
            "Super Admin",
            "Admin",
            "Asset Manager",
            "Department Manager",
            "Technician",
            "Employee",
            "Auditor",
        ])
        .withMessage("Invalid role."),

];

export const loginValidation = [

    body("email")
        .trim()
        .isEmail()
        .withMessage("Valid email is required.")
        .normalizeEmail(),

    body("password")
        .notEmpty()
        .withMessage("Password is required."),

];

export const forgotPasswordValidation = [

    body("email")
        .trim()
        .isEmail()
        .withMessage("Valid email is required.")
        .normalizeEmail(),

];

export const resetPasswordValidation = [

    body("password")
        .isLength({ min: 8 })
        .withMessage("Password must be at least 8 characters.")
        .matches(/[A-Z]/)
        .withMessage("Password must contain one uppercase letter.")
        .matches(/[a-z]/)
        .withMessage("Password must contain one lowercase letter.")
        .matches(/[0-9]/)
        .withMessage("Password must contain one number.")
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage("Password must contain one special character."),

];

export const changePasswordValidation = [

    body("currentPassword")
        .notEmpty()
        .withMessage("Current password is required."),

    body("newPassword")
        .isLength({ min: 8 })
        .withMessage("New password must be at least 8 characters.")
        .matches(/[A-Z]/)
        .withMessage("New password must contain one uppercase letter.")
        .matches(/[a-z]/)
        .withMessage("New password must contain one lowercase letter.")
        .matches(/[0-9]/)
        .withMessage("New password must contain one number.")
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage("New password must contain one special character."),

];

export const validate = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.status(422).json({

            success: false,

            message: "Validation Failed",

            errors: errors.array(),

        });

    }

    next();

};