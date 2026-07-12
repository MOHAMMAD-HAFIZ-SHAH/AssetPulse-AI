import React from "react";

export default function AppInput({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    required = false,
    disabled = false,
    error = "",
}) {
    return (
        <div className="flex flex-col gap-2 w-full">
            {label && (
                <label
                    htmlFor={name}
                    className="text-sm font-semibold text-slate-700"
                >
                    {label}
                    {required && (
                        <span className="text-red-500 ml-1">*</span>
                    )}
                </label>
            )}

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                className={`w-full rounded-xl border px-4 py-3 outline-none transition
                ${
                    error
                        ? "border-red-500"
                        : "border-slate-300 focus:border-indigo-600"
                }
                ${
                    disabled
                        ? "bg-slate-100 cursor-not-allowed"
                        : "bg-white"
                }`}
            />

            {error && (
                <span className="text-sm text-red-500">
                    {error}
                </span>
            )}
        </div>
    );
}