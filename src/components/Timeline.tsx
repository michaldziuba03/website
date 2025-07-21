import { LuMapPin } from "react-icons/lu";

interface Experience {
  position: string;
  place: string;
  contract?: string;
  location: string;
  image: ImageMetadata;
  dateRange: string;
}

interface TimelineProps {
  experiences: Experience[];
}

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

function TimelineItem({ experience, index }: TimelineItemProps) {
  return (
    <div className="group relative flex items-start w-full space-x-4 pb-8">
      {/* Timeline line - hidden on last item */}
      {index < 100 && (
        <div className="absolute left-6 top-12 h-full w-0.5 bg-gray-200 group-last:hidden" />
      )}
      
      {/* Logo container */}
      <div className="relative z-10 flex-shrink-0">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-2 ring-gray-100 dark:bg-gray-800 dark:ring-gray-700">
          <img
            src={experience.image.src}
            alt={`${experience.place} logo`}
            className="h-10 w-10 rounded-full object-contain"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="min-w-0 flex-1 w-full">
        <div className="relative rounded-xl border border-gray-200 bg-white py-4 px-5 shadow-sm before:content-[''] before:absolute before:left-[-8px] before:top-6 before:h-0 before:w-0 before:border-t-8 before:border-r-8 before:border-b-8 before:border-l-0 before:border-transparent before:border-r-gray-200">
          {/* Header */}
          <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                {experience.position}
              </h3>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {experience.place}
              </p>
            </div>
            <div className="mt-1 sm:mt-0 sm:text-right">
              <time className="text-xs font-medium text-gray-600 dark:text-gray-400">
                {experience.dateRange}
              </time>
            </div>
          </div>
          
          {/* Details */}
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-gray-600">
            {experience.contract && (
              <div>
                <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium">
                  {experience.contract}
                </span>
              </div>
            )}
            <div>
              <span className="inline-flex items-center text-xs font-medium gap-1 px-2 py-1 bg-gray-100 rounded-full">
                <LuMapPin className="h-3 w-3" />
                <span>{experience.location}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="relative w-full">
      {experiences.map((experience, index) => (
        <TimelineItem
          key={`${experience.place}-${experience.position}-${index}`}
          experience={experience}
          index={index}
        />
      ))}
    </div>
  );
}

