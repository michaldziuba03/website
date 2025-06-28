interface IProps {
  position: string;
  place: string;
  contract?: string;
  location: string;
}

export function ExperienceItem(props: IProps) {
  return (
    <div className="flex gap-4 w-full">
      <div className="w-12 h-12 shrink-0 bg-gray-600 rounded-lg"></div>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <span className="font-semibold">{props.position}</span>
          <span className="text-sm">{props.place} { props.contract && ` • ${props.contract}` } • {props.location} </span>
        </div>
        <span className="text-sm">Jan 2025 - Apr 2025</span>
      </div>
    </div>
  );
}