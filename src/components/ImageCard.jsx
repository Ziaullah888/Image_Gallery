import React from "react";

export const ImageCard = ({ image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      
    
      <div className="relative group">
        <img
          src={image.urls.small}
          alt={image.alt_description || "Unsplash Image"}
          className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-sm px-2 text-center">
          {image.alt_description || "Beautiful Image from Unsplash"}
        </div>
      </div>

      
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={image.user.profile_image.medium}
            alt={image.user.name}
            className="w-10 h-10 rounded-full border"
          />
          <div>
            <h2 className="font-semibold text-gray-800 truncate w-32">
              {image.user.name}
            </h2>
            <p className="text-xs text-gray-500">@{image.user.username}</p>
          </div>
        </div>

        
        <div className="flex items-center gap-1 text-gray-600">
          ❤️ <span>{image.likes}</span>
        </div>
      </div>
    </div>
  );
};
