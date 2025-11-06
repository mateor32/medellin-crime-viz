import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  trend?: "up" | "down" | "neutral";
  variant?: "default" | "alert" | "warning";
}

export const StatsCard = ({ 
  title, 
  value, 
  icon: Icon, 
  description, 
  trend = "neutral",
  variant = "default" 
}: StatsCardProps) => {
  const variantStyles = {
    default: "border-l-4 border-l-primary",
    alert: "border-l-4 border-l-destructive bg-destructive/5",
    warning: "border-l-4 border-l-accent bg-accent/5"
  };

  return (
    <Card className={`transition-all hover:shadow-lg ${variantStyles[variant]}`}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground mb-2">{title}</p>
            <p className="text-3xl font-bold text-foreground mb-1">{value}</p>
            {description && (
              <p className="text-sm text-muted-foreground">{description}</p>
            )}
          </div>
          <div className={`p-3 rounded-lg ${
            variant === "alert" ? "bg-destructive/10" : 
            variant === "warning" ? "bg-accent/10" : 
            "bg-primary/10"
          }`}>
            <Icon className={`w-6 h-6 ${
              variant === "alert" ? "text-destructive" : 
              variant === "warning" ? "text-accent" : 
              "text-primary"
            }`} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
