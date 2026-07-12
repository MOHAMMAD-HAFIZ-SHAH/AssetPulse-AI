class ApiResponse {

    static success(

        res,

        data = {},

        message = "Success",

        statusCode = 200

    ) {

        return res.status(statusCode).json({

            success: true,

            message,

            data,

        });

    }

    static created(

        res,

        data = {},

        message = "Created Successfully"

    ) {

        return res.status(201).json({

            success: true,

            message,

            data,

        });

    }

    static error(

        res,

        message = "Internal Server Error",

        statusCode = 500,

        errors = null

    ) {

        return res.status(statusCode).json({

            success: false,

            message,

            errors,

        });

    }

    static unauthorized(

        res,

        message = "Unauthorized"

    ) {

        return res.status(401).json({

            success: false,

            message,

        });

    }

    static forbidden(

        res,

        message = "Forbidden"

    ) {

        return res.status(403).json({

            success: false,

            message,

        });

    }

    static notFound(

        res,

        message = "Resource Not Found"

    ) {

        return res.status(404).json({

            success: false,

            message,

        });

    }

    static validation(

        res,

        errors,

        message = "Validation Failed"

    ) {

        return res.status(422).json({

            success: false,

            message,

            errors,

        });

    }

    static paginated(

        res,

        {

            items,

            page,

            limit,

            totalItems,

            message = "Success",

        }

    ) {

        const totalPages = Math.ceil(

            totalItems / limit

        );

        return res.status(200).json({

            success: true,

            message,

            data: items,

            pagination: {

                page,

                limit,

                totalItems,

                totalPages,

                hasNextPage: page < totalPages,

                hasPreviousPage: page > 1,

            },

        });

    }

}

export default ApiResponse;