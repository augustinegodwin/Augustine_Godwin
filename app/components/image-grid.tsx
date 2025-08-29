"use client"
import React, { useState } from "react";
import Image from "next/image";
import ImageViewer from "./imageViewer";

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
    href?: string;
  }[];
  columns?: 2 | 3 | 4; // Accepts 2, 3, or 4 columns
}

export const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  columns = 3,
}) => {
  const gridClass = {
    2: "grid-cols-2 sm:grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  }[columns];
  const [enlargeImage, setEnlargeImage] = useState(false);  
  const [currentImageUrl, setCurrentImageUrl] = useState("");   
  return (
    <section>
      <div className={`grid ${gridClass} gap-4 my-8`}>
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            {image.href ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={image.href}
                className="block w-full h-full"
              >
                <Image
                  alt={image.alt}
                  src={image.src}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  priority
                  className="rounded-lg object-cover"
                />
              </a>
            ) : (
              <Image
                alt={image.alt}
                src={image.src}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                priority
                onClick={() => {
                  setCurrentImageUrl(image.src);
                  setEnlargeImage(true);
                }}
                className="rounded-lg object-cover cursor-pointer"
              />
            )}
          </div>
        ))}
      </div>
      <ImageViewer enlargeImage={enlargeImage} setEnlargeImage={setEnlargeImage} url={currentImageUrl}/>  
    </section>
  );
};
