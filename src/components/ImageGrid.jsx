import React from "react";
import { ImageCard } from "./ImageCard";

export const ImageGrid = ({ images }) => {
  if (!images.length) {
    return (
      <p className="text-center text-gray-500 mt-6">
        No images found. Try searching something else.
      </p>
    );
  }

  return (
    <div className="grid gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {images.map((img) => (
        <ImageCard key={img.id} image={img} />
      ))}
    </div>
  );
};
