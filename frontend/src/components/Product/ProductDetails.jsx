import React, { useState } from "react";
import { toast } from "sonner";

const selectedProuduct = {
  name: "Stylish Jacket",
  price: 120,
  originalPrice: 150,
  description: "This is a stylish jacket suitable for all functions",
  brand: "Fashion",
  material: "leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500?random=7",
      altText: "Stylish Jacket 1",
    },
    {
      url: "https://picsum.photos/500?random=9",
      altText: "Stylish Jacket 1",
    },
  ],
};

const ProductDetails = () => {
  const [mainImage, setMainImage] = useState(selectedProuduct.images[0]?.url);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color before adding to cart", {
        duration: 1000,
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      toast.success("Product added to cart", { duration: 1000 });
      setLoading(false);
    }, 500);
  };

  return (
    <div className="pb-16">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side - Images */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage || selectedProuduct.images[0]?.url}
                alt="Main Product"
                className="w-full h-auto max-h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="flex space-x-4 overflow-x-auto py-2">
              {selectedProuduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={image.altText || `Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(image.url)}
                  className={`w-16 h-16 flex-shrink-0 object-cover rounded-lg cursor-pointer border-2 ${
                    mainImage === image.url
                      ? "border-indigo-500"
                      : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right side - Product Info */}
          <div className="md:w-1/2">
            <div className="sticky top-4">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedProuduct.name}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    ${selectedProuduct.price}
                  </span>
                  {selectedProuduct.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      ${selectedProuduct.originalPrice}
                    </span>
                  )}
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    {Math.round(
                      (1 -
                        selectedProuduct.price /
                          selectedProuduct.originalPrice) *
                        100
                    )}
                    % OFF
                  </span>
                </div>

                <div className="flex items-center mb-6">
                  <div className="flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-gray-600 text-sm ml-2">
                      (24 reviews)
                    </span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {selectedProuduct.description}
                </p>
              </div>

              <div className="space-y-6">
                {/* Sizes */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Size
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProuduct.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-md text-sm font-medium ${
                          selectedSize === size
                            ? "bg-black text-white border-black"
                            : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Color
                  </h3>
                  <div className="flex gap-2">
                    {selectedProuduct.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-full border-2 ${
                          selectedColor === color
                            ? "ring-2 ring-offset-2 ring-indigo-500"
                            : ""
                        }`}
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-2">
                    Quantity
                  </p>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 rounded-md border border-gray-300 hover:bg-gray-50"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    </button>
                    <span className="w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 rounded-md border border-gray-300 hover:bg-gray-50"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    onClick={handleAddToCart}
                    disabled={loading}
                    className={`flex-1 py-3 px-6 rounded-md font-medium transition-all duration-300 ${
                      loading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-black text-white hover:bg-gray-800"
                    } flex items-center justify-center space-x-2`}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Adding...
                      </>
                    ) : (
                      "Add to Cart"
                    )}
                  </button>

                  <button className="flex-1 bg-white text-gray-700 py-3 px-6 rounded-md border border-gray-300 hover:bg-gray-50 transition-colors font-medium">
                    Add to Wishlist
                  </button>
                </div>

                {/* Product Details */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-900 mb-4">
                    Product Details
                  </h3>
                  <dl className="space-y-4">
                    <div className="flex">
                      <dt className="w-1/3 text-sm text-gray-500">Brand</dt>
                      <dd className="text-sm text-gray-900">
                        {selectedProuduct.brand}
                      </dd>
                    </div>
                    <div className="flex">
                      <dt className="w-1/3 text-sm text-gray-500">Material</dt>
                      <dd className="text-sm text-gray-900 capitalize">
                        {selectedProuduct.material}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* You may also like*/}

        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You May Also Like
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
