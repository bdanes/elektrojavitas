import { LucideIcon } from "lucide-react";

interface InfoBadgeProps {
  icon: LucideIcon;
  text: string;
}

export default function InfoBadge({
  icon: Icon,
  text,
}: InfoBadgeProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border px-4 py-3">
      <Icon size={18} className="text-blue-600" />
      <span>{text}</span>
    </div>
  );
}