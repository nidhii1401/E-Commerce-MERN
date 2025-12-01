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
    // console.log({
    //   scrollLeft: container.scrollLeft,
    //   clientWidth: container.clientWidth,
    //   containerScrollWidth: container.scrollWidth,
    // });
    if (container) {
      const leftScroll = container.scrollLeft;
      const visibleRightEdge = leftScroll + container.clientWidth;
      // Use a tolerant comparison to account for fractional pixels from smooth scrolling
      const atEnd =
        Math.ceil(visibleRightEdge) >= Math.floor(container.scrollWidth);

      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(!atEnd);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      // Add scroll listener and ensure we remove it on cleanup to avoid multiple listeners
      container.addEventListener("scroll", updateScrollButtons);
      // Recompute initially (and after renders)
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
    <section className="pl-4 pr-4">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        {/* Scroll buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2 p-4">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${
              canScrollLeft
                ? " bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border ${
              canScrollRight
                ? " bg-white text-black"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable content */}
      <div className="container mx-auto px-4">
        <div
          ref={scrollRef}
          className="flex space-x-4 md:space-x-6 overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide"
        >
          {newArrivals.map((product) => (
            <div
              key={product._id}
              className="flex-none w-4/5 sm:w-2/5 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2"
            >
              <div className="aspect-w-3 aspect-h-4 w-full overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.images[0]?.url}
                  alt={product.images[0]?.altText || product.name}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute bottom-0 right-0 left-0 bg-black bg-opacity-50 backdrop-blur-sm text-white p-3 md:p-4 rounded-b-lg">
                  <Link to={`/product/${product._id}`} className="block">
                    <h4 className="font-medium text-sm md:text-base">
                      {product.name}
                    </h4>
                    <p className="mt-0.5 text-sm md:text-base">
                      ${product.price}
                    </p>
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
