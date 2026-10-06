import {
  BarChart3,
  Building2,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Globe,
  Palette,
  PenTool,
  Puzzle,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  BarChart3,
  Building2,
  Cloud,
  Code2,
  Compass,
  Cpu,
  Globe,
  Palette,
  PenTool,
  Puzzle,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Sparkles;
  return <Cmp className={className} aria-hidden="true" />;
}
