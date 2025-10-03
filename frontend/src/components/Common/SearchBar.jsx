import React, { useState } from "react";
import {
  HiMagnifyingGlass,
  HiMiniArrowDownLeft,
  HiMiniXMark,
} from "react-icons/hi2";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search Term :", searchTerm);
    setIsOpen(false);
  };

  return (
    <div
      className={`flex justify-center items-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="relative flex items-center justify-center w-full"
          >
            <div className="w-1/2 relative">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                }}
                className="bg-gray-100 px-4 py-2 p-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700 "
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              >
                <HiMagnifyingGlass className="size-6 text-gray-700" />
              </button>
            </div>
            {/* Close button */}
            <button
              type="button"
              onClick={handleSearchToggle}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800 p-2"
            >
              <HiMiniXMark className="size-6 text-gray-700" />
            </button>
          </form>
        </>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="size-6 text-gray-700" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
