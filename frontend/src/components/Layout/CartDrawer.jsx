import React from "react";
import { IoMdClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";

const CartDrawer = ({ drawerOpen, handleDrawerToggle }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300  flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* close button */}
      <div className="flex justify-end p-4">
        <button onClick={handleDrawerToggle}>
          <IoMdClose className="size-6 text-gray-600" />
        </button>
      </div>

      {/* Card Content with scrollable area */}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {/* Components for card content */}
        <CartContent/> 
      </div>

      {/* Checkout button */}
      <div className="p-4 bg-white sticky bottom-0">
        <button className="bg-black w-full text-white rounded-lg py-3 font-semibold hover:bg-gray-800 transition">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes, and discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
