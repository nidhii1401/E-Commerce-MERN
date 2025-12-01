import React, { use, useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: 1,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/200?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 2,
      name: "Stylish Jeans",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/200?random=2",
          altText: "Stylish Jeans",
        },
      ],
    },
    {
      _id: 3,
      name: "Converse shoes",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/200?random=3",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 4,
      name: "Stylish Shirt",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/200?random=4",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 5,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/200?random=5",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 6,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/200?random=6",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 7,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/200?random=7",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: 8,
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/200?random=8",
          altText: "Stylish Jacket",
        },
      ],
    },
  ];

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const visibleRightEdge = leftScroll + container.clientWidth;
      const atEnd =
        Math.ceil(visibleRightEdge) >= Math.floor(container.scrollWidth);

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(!atEnd);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      const onResize = () => updateScrollButtons();
      window.addEventListener("resize", onResize);

      return () => {
        container.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", onResize);
      };
    }
  }, []);

  return (
    <section className="relative py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover the latest styles straight off the runway, freshly added to
            keep your wardrobe on the cutting edge of fashion.
          </p>
        </div>

        {/* Scroll buttons */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 z-10">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded-full bg-white shadow-md ${
              canScrollLeft
                ? "text-black hover:bg-gray-100"
                : "text-gray-300 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded-full bg-white shadow-md ${
              canScrollRight
                ? "text-black hover:bg-gray-100"
                : "text-gray-300 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>

        {/* Scrollable content */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide"
          style={{ scrollbarWidth: "none" }} // For Firefox
        >
          {newArrivals.map((product) => (
            <div
              key={product._id}
              className="flex-none w-4/5 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2"
            >
              <div className="group relative overflow-hidden rounded-lg bg-gray-50">
                <img
                  src={product.images[0]?.url}
                  alt={product.images[0]?.altText || product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-700">${product.price}</p>
                  <Link
                    to={`/product/${product._id}`}
                    className="mt-2 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    View details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
