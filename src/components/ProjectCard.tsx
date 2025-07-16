interface IProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  badge?: string;
}

export function ProjectCard(props: IProps) {
  return (
    <div className={`break-inside-avoid rounded-lg shadow-md border border-gray-200 bg-white overflow-hidden flex h-full ${
      props.featured 
        ? 'row-span-1 col-span-1 sm:col-span-2 lg:col-span-2 md:flex-row flex-col' 
        : 'row-span-1 flex-col'
    }`}>
      {/* Project Image or Placeholder */}
      <div className={`bg-gray-200 flex items-center justify-center shrink-0 ${
        props.featured 
          ? 'md:w-1/2 w-full h-48 md:h-auto' 
          : 'h-32 w-full'
      }`}>
        {props.image ? (
          <img 
            src={props.image} 
            alt={`${props.title} preview`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-500 text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-gray-300 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm">Project Preview</span>
          </div>
        )}
      </div>
      
      {/* Project Content */}
      <div className={`flex flex-col flex-grow ${
        props.featured 
          ? 'md:w-1/2 w-full p-6 lg:p-8' 
          : 'p-6'
      }`}>
        <div className="flex items-center gap-3 mb-3">
          <h3 className="font-bold text-xl">
            {props.title}
          </h3>
          {props.badge && (
            <span className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full shrink-0">
              {props.badge}
            </span>
          )}
        </div>
        
        <p className="text-gray-700 mb-4 flex-grow text-base">
          {props.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {props.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-green-50 text-green-800 text-xs rounded-full border border-green-100"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="flex gap-3">
          {props.githubUrl && (
            <a 
              href={props.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </a>
          )}
          {props.liveUrl && (
            <a 
              href={props.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
