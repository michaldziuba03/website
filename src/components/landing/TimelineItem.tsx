import { LuMapPin } from "react-icons/lu";

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  location?: string;
  employmentType?: string;
  isActive?: boolean;
  isLast?: boolean;
}

export function TimelineItem({
  title,
  organization,
  period,
  location,
  employmentType,
  isActive = false,
  isLast = false,
}: TimelineItemProps) {
  return (
    <div className="relative flex gap-5">
      {/* Line + dot */}
      <div className="flex flex-col items-center">
        <div className="relative flex items-center justify-center shrink-0 mt-1.5">
          {isActive && (
            <span className="absolute inline-flex w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-primary opacity-60 animate-ping" />
          )}
          <div className="w-3 h-3 lg:w-4 lg:h-4 rounded-full bg-primary ring-4 lg:ring-[5px] ring-primary/20" />
        </div>
        {!isLast && <div className="w-px flex-1 bg-background-darken mt-1" />}
      </div>

      {/* Content */}
      <div className={`pb-8 min-w-0 text-left ${isLast ? "pb-0" : ""}`}>
        <p className="text-sm font-medium text-primary mb-0.5">{period}</p>
        <h3 className="text-lg font-bold leading-snug">{title}</h3>
        <div className="flex flex-wrap items-center gap-1.5 text-foreground/70 text-sm mt-0.5">
          <span className="font-medium">{organization}</span>
          {location && (
            <span className="inline-flex items-center gap-1 text-xs bg-background-darken px-2 py-0.5 rounded-full font-medium">
              <LuMapPin className="w-3 h-3" />
              {location}
            </span>
          )}
          {employmentType && (
            <span className="inline-flex items-center text-xs bg-background-darken px-2 py-0.5 rounded-full font-medium">
              {employmentType}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
