import DolphinLogo from "@/components/DolphinLogo";

type BrandLockupProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
  light?: boolean;
};

const sizes = {
  sm: { icon: 22, text: "text-sm" },
  md: { icon: 28, text: "text-base" },
  lg: { icon: 36, text: "text-xl" },
  hero: { icon: 48, text: "text-3xl sm:text-4xl" },
} as const;

export default function BrandLockup({
  className,
  size = "md",
  light = false,
}: BrandLockupProps) {
  const { icon, text } = sizes[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <DolphinLogo
        size={icon}
        className={light ? "text-white" : "text-blue-500"}
      />
      <span
        className={`${text} font-bold tracking-tight ${light ? "text-white" : "text-gray-900"}`}
      >
        돌고래
      </span>
    </div>
  );
}
