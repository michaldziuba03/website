interface IProps {
  position: string;
  place: string;
  contract?: string;
  location: string;
  image: string;
  dateRange: string;
}

export function ExperienceItem(props: IProps) {
  return (
    <div className="flex gap-3 sm:gap-4 w-full">
      <img 
        src={props.image} 
        alt={`${props.place} logo`}
        className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] border border-gray-300 shrink-0 rounded-lg object-cover"
      />
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-1 sm:gap-0">
        <div className="flex flex-col">
          <span className="font-semibold text-sm sm:text-base">{props.position}</span>
          <span className="text-xs sm:text-sm text-gray-600">{props.place} { props.contract && ` • ${props.contract}` } • {props.location} </span>
        </div>
        <span className="text-xs sm:text-sm text-gray-500 sm:text-gray-900">{props.dateRange}</span>
      </div>
    </div>
  );
}