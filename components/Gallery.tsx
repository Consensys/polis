"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  screenshots?: string[];
  imgAlt: string;
  onClick?: (e: any) => void;
  width?: number;
  height?: number;
  className?: string;
};

export const Gallery: React.FC<Props> = ({
  screenshots = [],
  imgAlt,
  onClick,
  className = "",
  width = 500,
  height = 300,
}) => {
  const [currentImage, setCurrentImage] = useState(screenshots[0]);

  const [protocol, , host] = window.location.href.split("/");
  const baseUrl = `${protocol}//${host}`;

  const imgId = screenshots.length > 0 && currentImage.split("/")[4];

  const setActiveImage = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const target = e.target as HTMLImageElement;
    const relativeSrc = target.src.replace(baseUrl, "");

    if (relativeSrc && imgId && !currentImage.includes(imgId)) {
      setCurrentImage(relativeSrc);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <button onClick={onClick}>
        {screenshots.length > 0 && (
          <Image
            src={currentImage}
            alt={imgAlt}
            width={width}
            height={height}
            style={{objectFit: "contain"}}
            className={`${className} rounded-lg shadow-lg`}
          />
        )}
      </button>
      <div className="flex gap-4">
        {screenshots.length > 1 && screenshots.map((src) => (
          <Image
            src={src}
            onClick={setActiveImage}
            key={src}
            alt={imgAlt}
            width={170}
            height={30}
            className={`rounded-lg shadow-lg ${
              imgId && currentImage.includes(imgId) && "border border-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
