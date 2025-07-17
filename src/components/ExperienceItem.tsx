interface IProps {
  position: string;
  place: string;
  contract?: string;
  location: string;
  image: string;
  dateRange: string;
  isAlternate?: boolean;
}

export function ExperienceItem(props: IProps) {
  return (
    <div className={`group relative bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-primary/20 hover:-translate-y-1 ${props.isAlternate ? 'sm:text-right' : ''}`}>
      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-2xl rounded-tr-xl"></div>
      
      {/* Main content */}
      <div className={`flex ${props.isAlternate ? 'sm:flex-row-reverse' : 'flex-row'} gap-4 items-start relative z-10`}>
        {/* Company logo */}
        <div className="shrink-0">
          <img 
            src={props.image} 
            alt={`${props.place} logo`}
            className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-white shadow-md rounded-xl object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Content */}
        <div className={`flex-1 min-w-0 ${props.isAlternate ? 'sm:text-right' : ''}`}>
          <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-primary transition-colors duration-300">
            {props.position}
          </h3>
          <div className="space-y-1">
            <p className="font-semibold text-primary text-base">
              {props.place}
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <span className="inline-flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {props.location}
              </span>
              {props.contract && (
                <>
                  <span className="text-gray-400">•</span>
                  <span className="inline-flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                    {props.contract}
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
      
      {/* Date badge */}
      <div className={`mt-4 ${props.isAlternate ? 'sm:text-right' : ''}`}>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {props.dateRange}
        </span>
      </div>
      
      {/* Hover effect gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
    </div>
  );
}