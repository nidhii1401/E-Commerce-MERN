import React from "react";
import { Link } from "react-router-dom";
import womensCollectionImg from "../../assets/womens-collection.webp";
import mensCollectionImg from "../../assets/mens-collection.webp";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 ">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Women's collection */}
        <div className="relative flex-1">
          <img
            src={womensCollectionImg}
            alt="Women's Collection Image"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute bg-white bottom-8 left-8 opacity-70 p-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* Men's Collection */}
        <div className="relative flex-1">
          <img
            src={mensCollectionImg}
            alt="Men's Collection Image"
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute bg-white bottom-8 left-8 opacity-70 p-3">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Men's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
