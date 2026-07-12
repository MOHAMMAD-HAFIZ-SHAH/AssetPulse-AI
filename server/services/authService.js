import crypto from "crypto";
import User from "../models/User.js";
import {
    generateAccessToken,
    generateRefreshToken,
} from "../utils/generateToken.js";

class AuthService {

    async register(data) {

        const existingUser = await User.findOne({

            email: data.email,

        });

        if (existingUser) {

            throw new Error("Email already registered.");

        }

        const user = await User.create({

            employeeId: data.employeeId,

            name: data.name,

            email: data.email,

            password: data.password,

            phone: data.phone,

            role: data.role || "Employee",

            designation: data.designation,

            department: data.department,

        });

        return user;

    }

    async login(email, password) {

        const user = await User.findOne({

            email,

        }).populate("department");

        if (!user) {

            throw new Error("Invalid email or password.");

        }

        if (!user.isActive) {

            throw new Error("Account has been disabled.");

        }

        const validPassword = await user.comparePassword(password);

        if (!validPassword) {

            throw new Error("Invalid email or password.");

        }

        user.lastLogin = new Date();

        user.refreshToken = generateRefreshToken(user);

        await user.save();

        return {

            user,

            accessToken: generateAccessToken(user),

            refreshToken: user.refreshToken,

        };

    }

    async logout(userId) {

        await User.findByIdAndUpdate(

            userId,

            {

                refreshToken: "",

            }

        );

    }

    async refreshToken(token) {

        const user = await User.findOne({

            refreshToken: token,

        });

        if (!user) {

            throw new Error("Invalid refresh token.");

        }

        const accessToken = generateAccessToken(user);

        return accessToken;

    }

    async forgotPassword(email) {

        const user = await User.findOne({

            email,

        });

        if (!user) {

            throw new Error("User not found.");

        }

        const resetToken = crypto

            .randomBytes(32)

            .toString("hex");

        user.passwordResetToken = resetToken;

        user.passwordResetExpires =

            Date.now() + 1000 * 60 * 30;

        await user.save();

        return resetToken;

    }

    async resetPassword(token, password) {

        const user = await User.findOne({

            passwordResetToken: token,

            passwordResetExpires: {

                $gt: Date.now(),

            },

        });

        if (!user) {

            throw new Error(

                "Reset link has expired."

            );

        }

        user.password = password;

        user.passwordResetToken = "";

        user.passwordResetExpires = null;

        await user.save();

    }

    async changePassword(

        userId,

        currentPassword,

        newPassword

    ) {

        const user = await User.findById(userId);

        if (!user) {

            throw new Error("User not found.");

        }

        const valid = await user.comparePassword(

            currentPassword

        );

        if (!valid) {

            throw new Error(

                "Current password is incorrect."

            );

        }

        user.password = newPassword;

        await user.save();

    }

    async getProfile(userId) {

        return await User.findById(userId)

            .populate("department");

    }

    async updateProfile(userId, data) {

        return await User.findByIdAndUpdate(

            userId,

            {

                $set: {

                    name: data.name,

                    phone: data.phone,

                    designation: data.designation,

                    department: data.department,

                    profileImage: data.profileImage,

                },

            },

            {

                new: true,

            }

        ).populate("department");

    }

}

export default new AuthService();