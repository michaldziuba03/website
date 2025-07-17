interface Experience {
  position: string;
  place: string;
  contract?: string;
  location: string;
  image: string;
  dateRange: string;
}

interface TimelineProps {
  experiences: Experience[];
}

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  return (
    <div className="relative flex items-center gap-4">
      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 mt-1">
        <img className="rounded-full w-10 h-10 object-cover" src={experience.image} alt={experience.place} />
      </div>
      {/* Card */}
      <div className="flex-1 bg-white p-4 rounded border border-slate-200 shadow">
        <div className="flex items-center justify-between space-x-2 mb-1">
          <div className="font-bold text-slate-900">{experience.position}</div>
          <div className="text-sm text-slate-500">{experience.dateRange}</div>
        </div>
        <div className="text-slate-600 font-semibold mb-2 text-sm">{experience.place}</div>
        <div className="text-slate-500 text-sm">
          Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
          morbi blandit cursus risus.
        </div>
      </div>
    </div>
  );
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="space-y-6 relative before:absolute before:left-6 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      {experiences.map((experience, index) => (
        <TimelineItem key={index} experience={experience} index={index} />
      ))}
    </div>
  );
}
