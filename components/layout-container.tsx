import {cn} from "@/lib/utils";

export default function LayoutContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full mx-auto max-w-[1240px] px-10 py-6", className)}>{children}</div>
  );
}
