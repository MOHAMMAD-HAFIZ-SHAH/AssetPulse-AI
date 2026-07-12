import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {

    return jwt.sign(

        {

            id: user._id,

            role: user.role,

        },

        process.env.JWT_SECRET,

        {

            expiresIn:

                process.env.JWT_EXPIRES_IN ||

                "7d",

        }

    );

};

export const generateRefreshToken = (user) => {

    return jwt.sign(

        {

            id: user._id,

        },

        process.env.REFRESH_TOKEN_SECRET,

        {

            expiresIn:

                process.env.REFRESH_TOKEN_EXPIRES_IN ||

                "30d",

        }

    );

};

export const verifyAccessToken = (token) => {

    return jwt.verify(

        token,

        process.env.JWT_SECRET

    );

};

export const verifyRefreshToken = (token) => {

    return jwt.verify(

        token,

        process.env.REFRESH_TOKEN_SECRET

    );

};

export const getRefreshCookieOptions = () => ({

    httpOnly: true,

    secure: process.env.NODE_ENV === "production",

    sameSite: "strict",

    maxAge: 30 * 24 * 60 * 60 * 1000,

});

export const sendAuthResponse = (res, user) => {

    const accessToken = generateAccessToken(user);

    const refreshToken = generateRefreshToken(user);

    res.cookie(

        "refreshToken",

        refreshToken,

        getRefreshCookieOptions()

    );

    return res.status(200).json({

        success: true,

        message: "Authentication successful.",

        accessToken,

        user: {

            id: user._id,

            name: user.name,

            email: user.email,

            role: user.role,

            profileImage: user.profileImage,

        },

    });

};