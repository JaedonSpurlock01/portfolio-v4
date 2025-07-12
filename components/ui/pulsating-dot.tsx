import { cn } from "@/lib/utils";

interface PulsatingDotProps {
  className?: string;
  coreDotClassName?: string;
  outerDotClassName?: string;
}

const PulsatingDot = ({
  className,
  coreDotClassName,
  outerDotClassName,
}: PulsatingDotProps) => {
  return (
    <div className={cn("relative", className)}>
      {/* Core dot */}
      <div className={cn("absolute rounded-full", coreDotClassName)} />

      {/* Pulsing rings */}
      <div
        className={cn(
          "absolute inset-0 rounded-full opacity-75 animate-ping-slow",
          outerDotClassName
        )}
      />
    </div>
  );
};

export default PulsatingDot;
