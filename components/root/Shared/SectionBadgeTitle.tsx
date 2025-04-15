import React from 'react'

const SectionBadgeTitle = ({title}: {title: string}) => {
  return (
    <span className="block uppercase text-amber-600 mb-4 text-center font-bold">
      {title}
    </span>
  );
}

export default SectionBadgeTitle

export const SectionTitle = ({title, className = ""}: {title: string; className?: string}) => {
  return (
    <h2 className={`text-5xl max-md:text-4xl max-sm:text-3xl font-bold text-center mb-8 md:max-w-3xl mx-auto ${className}`}>
      {title}
    </h2>
  );
}
