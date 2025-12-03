import React from "react";
import { Link } from "react-router-dom";
import featured from "../../assets/featured.webp";

const FeaturedCollection = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row items-stretch bg-green-50 rounded-3xl overflow-hidden shadow-md">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
          <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
            <span className="inline-block text-sm sm:text-base font-semibold text-gray-700 mb-2 sm:mb-3">
              Comfort and Style
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
              Apparel made for everyday life.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Discover high-quality, comfortable clothing that effortlessly blends
              fashion and function. Designed to make you look and feel great every
              day.
            </p>
            <Link
              to="/collections/all"
              className="inline-block bg-black text-white px-6 py-3 rounded-lg text-sm sm:text-base hover:bg-gray-800 transition-colors duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right Content - Image */}
        <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto overflow-hidden">
          <img 
            src={featured} 
            alt="Featured Collection"
            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
