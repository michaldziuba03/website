interface IProps {
  position: string;
  place: string;
  contract?: string;
  location: string;
}

export function ExperienceItem(props: IProps) {
  return (
    <div className="flex gap-4 w-full">
      <div className="w-16 h-16 bg-gray-600 rounded-xl"></div>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <span className="font-semibold text-lg">{props.position}</span>
          <span>{props.place} { props.contract && ` • ${props.contract}` } • {props.location} </span>
        </div>
        <span className="text-sm">Jan 2025 - Apr 2025</span>
      </div>
    </div>
  );
}