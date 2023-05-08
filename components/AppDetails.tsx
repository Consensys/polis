import React from "react";

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
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold mb-2">Category</h2>
            <div className="flex pt-8 space-x-2">
              {category.map((cat, index) => (
                <span
                  key={index}
                  className="bg-blue-500 text-white rounded-lg px-2 py-1 text-sm"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
          {/* Description */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold mb-2">Description</h2>
            <p className="text-gray-600">{description}</p>
          </div>
          {/* External Links */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-bold mb-2">External Links</h2>
            <div className="flex space-x-4">
              {externalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-blue-500 hover:underline"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="bg-white rounded-lg shadow-md flex flex-col justify-between p-6">
          {/* Preview Title */}
          <h2 className="text-lg font-bold mb-2 pt-8">Preview</h2>
          {/* Preview Images */}
          <div className="flex flex-col space-y-12">
            <img
              src={images[0].url}
              alt={images[0].alt}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="flex space-x-8">
              <img
                src={images[1].url}
                alt={images[1].alt}
                className="w-1/2 h-40 object-cover rounded-lg shadow-md"
              />
              <img
                src={images[2].url}
                alt={images[2].alt}
                className="w-1/2 h-40 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
