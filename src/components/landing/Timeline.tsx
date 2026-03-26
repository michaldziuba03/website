import { TimelineItem } from "./TimelineItem";
import { LuBriefcase, LuGraduationCap } from "react-icons/lu";

const workExperience = [
  {
    title: "Software Developer",
    organization: "2cW",
    period: "Oct 2025 - Present",
    location: "Remote",
    employmentType: "Contract",
    isActive: true,
  },
  {
    title: "Intern Software Developer",
    organization: "2cW",
    period: "Jul 2025 - Sep 2025",
    location: "Remote",
    employmentType: "Internship",
  },
  {
    title: "Software Developer",
    organization: "Ever Technologies",
    period: "Jan 2025 - Apr 2025",
    location: "Remote",
    employmentType: "B2B Contract",
  },
];

const education = [
  {
    title: "Bachelor of Computer Science",
    organization: "Maria Curie-Skłodowska University",
    period: "Oct 2023 - Present",
    location: "Lublin, Poland",
    isActive: true,
  },
];


export function Timeline() {
  return (
    <div className="flex flex-col sm:flex-row gap-10 sm:gap-12 w-full">
      {/* Work Experience */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2.5 mb-7">
          <span className="text-primary"><LuBriefcase className="w-5 h-5 lg:w-6 lg:h-6" /></span>
          <h3 className="text-xl lg:text-2xl font-bold">Work Experience</h3>
        </div>
        <div>
          {workExperience.map((item, index) => (
            <TimelineItem
              key={`${item.organization}-${item.period}`}
              {...item}
              isLast={index === workExperience.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2.5 mb-7">
          <span className="text-primary"><LuGraduationCap className="w-5 h-5 lg:w-6 lg:h-6" /></span>
          <h3 className="text-xl lg:text-2xl font-bold">Education</h3>
        </div>
        <div>
          {education.map((item, index) => (
            <TimelineItem
              key={`${item.organization}-${item.period}`}
              {...item}
              isLast={index === education.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
