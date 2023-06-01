import React from "react";
import Image from "next/image";

type AppDetailsProps = {
  category: string[];
  description: string;
  externalLinks: string[];
  images: string[];
};

const AppDetails: React.FC<AppDetailsProps> = ({
  category,
  description,
  externalLinks,
  images,
}) => {
  return (
    <div className="container px-4 py-10 mx-auto lg:px-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* First Column */}
        <div className="grid grid-rows-3 gap-6">
          {/* Category */}
          <div className="p-6 border border-white rounded-md shadow-lg bg-gradient-to-b from-white to-transparent backdrop-blur">
            <h2 className="mb-2 text-2xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary">
              Category
            </h2>
            <div className="flex pt-8 space-x-2">
              {category.map((cat, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-lg text-gray-500 border border-gray-500 rounded-lg hover:bg-slate-200 hover:text-gray-800"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
          {/* Description */}
          <div className="p-6 border border-white rounded-md shadow-lg bg-gradient-to-b from-white to-transparent backdrop-blur">
            <h2 className="mb-2 text-2xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary">
              Description
            </h2>
            <p className="text-gray-600">{description}</p>
          </div>
          {/* External Links */}
          <div className="p-6 border border-white rounded-md shadow-lg bg-gradient-to-b from-white to-transparent backdrop-blur">
            <h2 className="mb-2 text-2xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary">
              External Links
            </h2>
            <div className="flex pt-8 space-x-4">
              {externalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  className="text-gray-950 hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="flex flex-col justify-between p-6 border border-white rounded-md shadow-lg bg-gradient-to-b from-white to-transparent backdrop-blur">
          {/* Preview Title */}
          <h2 className="pt-8 pb-4 mb-2 text-2xl font-bold text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary">
            Preview
          </h2>
          {/* Preview Images */}
          <div className="flex flex-col space-y-12">
            <Image
              src={images[0]}
              alt=""
              width={400}
              height={300}
              layout="responsive"
              className="rounded-lg shadow-md"
            />
            <div className="flex space-x-8">
              <Image
                src={images[1]}
                alt={"image-1"}
                width={200}
                height={150}
                layout="responsive"
                className="rounded-lg shadow-md"
              />
              <Image
                src={images[2]}
                alt={"image-2"}
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
