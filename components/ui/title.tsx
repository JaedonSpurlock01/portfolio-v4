import { cn } from "@/lib/utils";

export function Title({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        className,
        "flex gap-2 items-center text-primary font-semibold"
      )}
    >
      {title}
    </span>
  );
}
