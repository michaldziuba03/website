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
    <div className="flex gap-4 w-full">
      <img 
        src={props.image} 
        alt={`${props.place} logo`}
        className="w-[50px] h-[50px] border border-gray-300 shrink-0 rounded-lg object-cover"
      />
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <span className="font-semibold">{props.position}</span>
          <span className="text-sm">{props.place} { props.contract && ` • ${props.contract}` } • {props.location} </span>
        </div>
        <span className="text-sm">{props.dateRange}</span>
      </div>
    </div>
  );
}