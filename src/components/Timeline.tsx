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
    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
      {/* Icon */}
      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <img className="rounded-full" src={experience.image} alt={experience.place} />
      </div>
      {/* Card */}
      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
        <div className="flex items-center justify-between space-x-2 mb-1">
          <div className="font-bold text-slate-900">{experience.position}</div>
        </div>
        <div className="text-slate-500">
          Pretium lectus quam id leo. Urna et pharetra aliquam vestibulum
          morbi blandit cursus risus.
        </div>
      </div>
    </div>
  );
}

export function Timeline({ experiences }: TimelineProps) {
  return (
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      {experiences.map((experience, index) => (
        <TimelineItem key={index} experience={experience} index={index} />
      ))}
    </div>
  );
}
