import { Card, CardContent } from "@/components/ui/card";

export default function AppCard({ children, className = "" }) {
    return (
        <Card className={`rounded-2xl shadow-sm ${className}`}>
            <CardContent className="p-6">
                {children}
            </CardContent>
        </Card>
    );
}