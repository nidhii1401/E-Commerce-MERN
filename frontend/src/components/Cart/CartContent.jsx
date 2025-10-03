import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

const CartContent = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "Tshirt",
      color: "Black",
      size: "M",
      quantity: 1,
      price: 15,
      image: " https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      color: "Blue",
      size: "L",
      quantity: 1,
      price: 20,
      image: " https://picsum.photos/200?random=5",
    },
    {
      productId: 3,
      name: "Shirt",
      color: "Pink",
      size: "S",
      quantity: 1,
      price: 15,
      image: " https://picsum.photos/200?random=4",
    },
    {
      productId: 4,
      name: "Belt",
      color: "Gray",
      size: "M",
      quantity: 1,
      price: 15,
      image: " https://picsum.photos/200?random=2",
    },
    {
      productId: 5,
      name: "Tank Top",
      color: "Black",
      size: "M",
      quantity: 1,
      price: 15,
      image: " https://picsum.photos/200?random=3",
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500 ">
                Size: {product.size} | Color:{product.color}{" "}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
          </div>
          {/* Product Prize */}
        <div>
            <p>${product.price.toLocaleString()}</p>
            <button>
                <RiDeleteBin3Line className="size-6 mt-2 text-red-600"/>
            </button>
        </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
