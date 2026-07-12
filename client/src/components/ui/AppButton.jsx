import { Button } from "@/components/ui/button";

export default function AppButton({
    children,
    className = "",
    variant = "default",
    size = "default",
    type = "button",
    ...props
}) {
    return (
        <Button
            variant={variant}
            size={size}
            type={type}
            className={`rounded-xl ${className}`}
            {...props}
        >
            {children}
        </Button>
    );
}