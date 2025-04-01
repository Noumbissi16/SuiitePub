import Image from "next/image";
import React from "react";

interface UniqueFeaturesApiPagesProps {
  title: string;
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

const UniqueFeaturesApiPages = ({
  title,
  features,
}: UniqueFeaturesApiPagesProps) => {
  return (
    <section className="mb-16 bg-white p-16 lg:p-24">
      <span className="block uppercase font-medium text-amber-600 lg:text-center lg:mb-4">
        the unique features
      </span>
      <h1 className="text-4xl font-bold lg:text-6xl/16 xl:max-w-[48%] lg:text-center mx-auto mb-8 lg:mb-12">
        {title}
      </h1>
      <div className="grid grid-cols-1 max-lg:gap-10 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-x-12 lg:gap-y-4 xl:gap-x-24 xl:gap-y-8 lg:w-[85%] xl:w-[80%] mx-auto ">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col gap-1 ">
            <div className="w-11 h-11 lg:w-18 lg:h-18 bg-blue-100 rounded-full flex items-center justify-center ">
              {feature.icon}
            </div>
            <div>
              <h3 className="font-bold text-xl lg:text-3xl lg:mt-4 w-full">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-3">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UniqueFeaturesApiPages;
