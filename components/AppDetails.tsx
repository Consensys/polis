import React from "react";
import Image from "next/image";

type AppDetailsProps = {
  category: string[];
  tags: string[];
  description: string;
  externalLinks: {
    name: string;
    url: string;
  }[];
  images: {
    url: string;
    alt: string;
  }[];
};

const AppDetails: React.FC<AppDetailsProps> = ({
  category,
  tags,
  description,
  externalLinks,
  images,
}) => {
  return (
    <div className="py-10 px-4 lg:px-16 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* First Column */}
        <div className="grid grid-rows-3 gap-6">
          {/* Category */}
          <div className="bg-gradient-to-b from-white to-transparent border border-white shadow-lg backdrop-blur rounded-md p-6">
            <h2 className="text-2xl text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary font-bold mb-2">
              Category
            </h2>
            <div className="flex pt-8 space-x-2">
              {category.map((cat, index) => (
                <span
                  key={index}
                  className="border border-gray-500 text-gray-500 rounded-lg px-2 py-1 text-lg  hover:bg-slate-200 hover:text-gray-800"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
          {/* Description */}
          <div className="bg-gradient-to-b from-white to-transparent border border-white shadow-lg backdrop-blur rounded-md p-6">
            <h2 className="text-2xl text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary font-bold mb-2">
              Description
            </h2>
            <p className="text-gray-600">{description}</p>
          </div>
          {/* External Links */}
          <div className="bg-gradient-to-b from-white to-transparent border border-white shadow-lg backdrop-blur rounded-md p-6">
            <h2 className="text-2xl text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary font-bold mb-2">
              External Links
            </h2>
            <div className="flex space-x-4 pt-8">
              {externalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-gray-950 hover:underline"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="bg-gradient-to-b from-white to-transparent border border-white shadow-lg backdrop-blur rounded-md flex flex-col justify-between p-6">
          {/* Preview Title */}
          <h2 className="text-2xl text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary font-bold mb-2 pt-8 pb-4">
            Preview
          </h2>
          {/* Preview Images */}
          <div className="flex flex-col space-y-12">
            <Image
              src={images[0].url}
              alt={images[0].alt}
              width={400}
              height={300}
              layout="responsive"
              className="rounded-lg shadow-md"
            />
            <div className="flex space-x-8">
              <Image
                src={images[1].url}
                alt={images[1].alt}
                width={200}
                height={150}
                layout="responsive"
                className="rounded-lg shadow-md"
              />
              <Image
                src={images[2].url}
                alt={images[2].alt}
                width={200}
                height={150}
                layout="responsive"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
