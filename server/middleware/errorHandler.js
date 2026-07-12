import multer from "multer";
import mongoose from "mongoose";

const errorHandler = (err, req, res, next) => {

    console.error(err);

    if (err instanceof multer.MulterError) {

        return res.status(400).json({

            success: false,

            message: err.message,

        });

    }

    if (err.name === "JsonWebTokenError") {

        return res.status(401).json({

            success: false,

            message: "Invalid token.",

        });

    }

    if (err.name === "TokenExpiredError") {

        return res.status(401).json({

            success: false,

            message: "Token expired.",

        });

    }

    if (err instanceof mongoose.Error.ValidationError) {

        const errors = Object.values(err.errors).map(

            error => error.message

        );

        return res.status(400).json({

            success: false,

            message: "Validation failed.",

            errors,

        });

    }

    if (err.code === 11000) {

        const field = Object.keys(err.keyValue)[0];

        return res.status(409).json({

            success: false,

            message: `${field} already exists.`,

        });

    }

    if (err instanceof mongoose.Error.CastError) {

        return res.status(400).json({

            success: false,

            message: "Invalid ID.",

        });

    }

    return res.status(

        err.statusCode || 500

    ).json({

        success: false,

        message:

            err.message ||

            "Internal Server Error",

        ...(process.env.NODE_ENV === "development" && {

            stack: err.stack,

        }),

    });

};

export default errorHandler;