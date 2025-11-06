import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
}

export const SectionHeader = ({ title, subtitle, icon: Icon }: SectionHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-2">
        {Icon && (
          <div className="p-2 rounded-lg bg-primary/10">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        )}
        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-muted-foreground text-lg ml-11">{subtitle}</p>
      )}
    </div>
  );
};
