import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(

    {

        employeeId: {

            type: String,

            unique: true,

            sparse: true,

            trim: true,

        },

        name: {

            type: String,

            required: true,

            trim: true,

        },

        email: {

            type: String,

            required: true,

            unique: true,

            lowercase: true,

            trim: true,

        },

        password: {

            type: String,

            required: true,

            minlength: 8,

        },

        phone: {

            type: String,

            default: "",

        },

        role: {

            type: String,

            enum: [

                "Super Admin",

                "Admin",

                "Asset Manager",

                "Department Manager",

                "Technician",

                "Employee",

                "Auditor",

            ],

            default: "Employee",

        },

        department: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "Department",

        },

        designation: {

            type: String,

            default: "",

        },

        profileImage: {

            type: String,

            default: "",

        },

        refreshToken: {

            type: String,

            default: "",

        },

        passwordResetToken: {

            type: String,

            default: "",

        },

        passwordResetExpires: {

            type: Date,

        },

        lastLogin: {

            type: Date,

        },

        isActive: {

            type: Boolean,

            default: true,

        },

        createdBy: {

            type: mongoose.Schema.Types.ObjectId,

            ref: "User",

        },

    },

    {

        timestamps: true,

    }

);

userSchema.pre(

    "save",

    async function (next) {

        if (!this.isModified("password")) {

            return next();

        }

        const salt = await bcrypt.genSalt(

            Number(process.env.BCRYPT_SALT_ROUNDS) || 10

        );

        this.password = await bcrypt.hash(

            this.password,

            salt

        );

        next();

    }

);

userSchema.methods.comparePassword = async function (

    password

) {

    return await bcrypt.compare(

        password,

        this.password

    );

};

userSchema.methods.toJSON = function () {

    const user = this.toObject();

    delete user.password;

    delete user.refreshToken;

    delete user.passwordResetToken;

    delete user.passwordResetExpires;

    return user;

};

const User = mongoose.model(

    "User",

    userSchema

);

export default User;