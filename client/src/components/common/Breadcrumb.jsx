import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ items = [] }) {
    return (
        <div className="flex items-center gap-2 text-sm text-slate-500">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="flex items-center gap-2"
                >
                    <span>{item}</span>

                    {index !== items.length - 1 && (
                        <ChevronRight size={15} />
                    )}
                </div>
            ))}
        </div>
    );
}