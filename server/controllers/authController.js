import authService from "../services/authService.js";
import ApiResponse from "../utils/ApiResponse.js";
import { sendAuthResponse } from "../utils/generateToken.js";

export const register = async (req, res, next) => {

    try {

        const user = await authService.register(req.body);

        return ApiResponse.created(

            res,

            user,

            "User registered successfully."

        );

    }

    catch (error) {

        next(error);

    }

};

export const login = async (req, res, next) => {

    try {

        const {

            email,

            password,

        } = req.body;

        const result = await authService.login(

            email,

            password

        );

        return sendAuthResponse(

            res,

            result.user

        );

    }

    catch (error) {

        next(error);

    }

};

export const logout = async (req, res, next) => {

    try {

        await authService.logout(

            req.user._id

        );

        res.clearCookie("refreshToken");

        return ApiResponse.success(

            res,

            {},

            "Logged out successfully."

        );

    }

    catch (error) {

        next(error);

    }

};

export const refreshToken = async (req, res, next) => {

    try {

        const token = req.cookies.refreshToken;

        if (!token) {

            return ApiResponse.unauthorized(

                res,

                "Refresh token missing."

            );

        }

        const accessToken =

            await authService.refreshToken(token);

        return ApiResponse.success(

            res,

            {

                accessToken,

            },

            "Token refreshed successfully."

        );

    }

    catch (error) {

        next(error);

    }

};

export const forgotPassword = async (req, res, next) => {

    try {

        const resetToken =

            await authService.forgotPassword(

                req.body.email

            );

        return ApiResponse.success(

            res,

            {

                resetToken,

            },

            "Password reset token generated."

        );

    }

    catch (error) {

        next(error);

    }

};

export const resetPassword = async (req, res, next) => {

    try {

        await authService.resetPassword(

            req.params.token,

            req.body.password

        );

        return ApiResponse.success(

            res,

            {},

            "Password reset successfully."

        );

    }

    catch (error) {

        next(error);

    }

};

export const changePassword = async (req, res, next) => {

    try {

        await authService.changePassword(

            req.user._id,

            req.body.currentPassword,

            req.body.newPassword

        );

        return ApiResponse.success(

            res,

            {},

            "Password changed successfully."

        );

    }

    catch (error) {

        next(error);

    }

};

export const getProfile = async (req, res, next) => {

    try {

        const user =

            await authService.getProfile(

                req.user._id

            );

        return ApiResponse.success(

            res,

            user,

            "Profile fetched successfully."

        );

    }

    catch (error) {

        next(error);

    }

};

export const updateProfile = async (req, res, next) => {

    try {

        const profileImage =

            req.file

                ? `/uploads/employees/${req.file.filename}`

                : req.body.profileImage;

        const user =

            await authService.updateProfile(

                req.user._id,

                {

                    ...req.body,

                    profileImage,

                }

            );

        return ApiResponse.success(

            res,

            user,

            "Profile updated successfully."

        );

    }

    catch (error) {

        next(error);

    }

};