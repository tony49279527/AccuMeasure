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
  const secondaryStroke = inverse ? "#378ADD" : "#9CCAF1";
  const accent = "#C2410C";

  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={cn("h-10 w-10 flex-shrink-0", className)}
    >
      <path d="M32 2.5 58 17.5v29L32 61.5 6 46.5v-29L32 2.5Z" fill={field} />
      <path
        d="M15 45 24.5 18 34 45"
        fill="none"
        stroke={primaryStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5.6"
      />
      <path
        d="M20.5 35.5h10"
        fill="none"
        stroke={primaryStroke}
        strokeLinecap="round"
        strokeWidth="4.8"
      />
      <path
        d="M36 45V20l7.6 14.2L51.2 20v25"
        fill="none"
        stroke={primaryStroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5.6"
      />
      <path
        d="M15.5 51h33"
        fill="none"
        stroke={secondaryStroke}
        strokeLinecap="round"
        strokeWidth="2.4"
        opacity={inverse ? 0.72 : 0.82}
      />
      <circle cx="43.6" cy="34.2" r="3.2" fill={accent} />
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
            "text-xl font-bold",
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
