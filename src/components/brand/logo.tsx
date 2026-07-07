import { cn } from "@/lib/utils";

type LogoTone = "default" | "inverse";

interface LogoMarkProps {
  className?: string;
  tone?: LogoTone;
}

interface BrandLogoProps extends LogoMarkProps {
  showDescriptor?: boolean;
}

export function LogoMark({ className, tone = "default" }: LogoMarkProps) {
  const inverse = tone === "inverse";
  const field = inverse ? "#FFFFFF" : "#0C447C";
  const primaryStroke = inverse ? "#0C447C" : "#FFFFFF";
  const mutedStroke = inverse ? "#185FA5" : "#B7D7F4";
  const needle = "#C2410C";

  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={cn("h-10 w-10 flex-shrink-0", className)}
    >
      <rect width="64" height="64" rx="14" fill={field} />
      <circle
        cx="32"
        cy="32"
        r="21"
        fill="none"
        stroke={mutedStroke}
        strokeWidth="5"
        opacity={inverse ? 0.35 : 0.42}
      />
      <path
        d="M16 43 32 15l16 28"
        fill="none"
        stroke={primaryStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5.5"
      />
      <path
        d="M24.5 34h15"
        fill="none"
        stroke={primaryStroke}
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        d="M32 32 47 22"
        fill="none"
        stroke={needle}
        strokeLinecap="round"
        strokeWidth="3.8"
      />
      <circle cx="32" cy="32" r="3.5" fill={needle} />
      <path
        d="M20 49h24"
        fill="none"
        stroke={mutedStroke}
        strokeLinecap="round"
        strokeWidth="3"
        opacity={inverse ? 0.5 : 0.68}
      />
    </svg>
  );
}

export function BrandLogo({
  className,
  tone = "default",
  showDescriptor = false,
}: BrandLogoProps) {
  const inverse = tone === "inverse";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark tone={tone} />
      <div className="leading-none">
        <div
          className={cn(
            "text-xl font-bold tracking-tight",
            inverse ? "text-white" : "text-dark",
          )}
        >
          AccuMeasure
        </div>
        {showDescriptor && (
          <div
            className={cn(
              "mt-1 text-[11px] font-medium uppercase",
              inverse ? "text-white/60" : "text-muted",
            )}
          >
            Precision Instruments
          </div>
        )}
      </div>
    </div>
  );
}
