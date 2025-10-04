import React from "react";
import heroImg from "../../assets/rabbit-hero.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Rabbit Image"
        className="w-full h-[400px] md:h-[600px] lg:h-[650px] object-cover "
      />
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // Black (0,0,0) with 80% opacity (0.8)
      >
        {" "}
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl uppercase font-bold tracking-tighter mb-4">
            Vacation <br /> Ready
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Explore our vacation-ready outfits with fast worldwide shipping.
          </p>
          <Link
            to="#"
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
