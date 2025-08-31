import { title } from "process";
import React from "react";
import ProductCard from "./ProductCard";

export interface Product {
  title: string;
  price: number;
  tags: string[];
  place: string;
  rating: number;
}
const Products = () => {
  const products: Product[] = [
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
    {
      title: "Villa Arrecife Beach House",
      price: 2.45,
      tags: ["Top Villa", "Self CheckIn", "Free Reschedule"],
      place: "Sidemen, Bali, Indonesia",
      rating: 4.76,
    },
  ];
  return (
    <section className="py-5">
      {/* filter : */}
      <div className="flex justify-between">
        <div className="gap-x-3 flex">
          <button className="px-4 py-2 cursor-pointer rounded-full border border-primary font-medium text-primary">
            All
          </button>
          <button className="px-4 py-2 cursor-pointer rounded-full border border-border font-medium text-gray-500">
            Top Villa
          </button>
          <button className="px-4 py-2 cursor-pointer rounded-full border border-border font-medium text-gray-500">
            Free Reschedule
          </button>
          <button className="px-4 py-2 cursor-pointer rounded-full border border-border font-medium text-gray-500">
            Book Now, Pay later
          </button>
          <button className="px-4 py-2 cursor-pointer rounded-full border border-border font-medium text-gray-500">
            Self CheckIn
          </button>
          <button className="px-4 py-2 cursor-pointer rounded-full border border-border font-medium text-gray-500">
            Instant Book{" "}
          </button>
        </div>
        <div className="flex gap-x-3">
          <button className="flex gap-x-2 border border-border rounded-full py-2 px-4 cursor-pointer">
            <span className="font-bold">Filter </span>
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 3.5H5C3.58579 3.5 2.87868 3.5 2.43934 3.9122C2 4.3244 2 4.98782 2 6.31466V7.00448C2 8.04232 2 8.56124 2.2596 8.99142C2.5192 9.4216 2.99347 9.68858 3.94202 10.2225L6.85504 11.8624C7.49146 12.2206 7.80967 12.3998 8.03751 12.5976C8.51199 13.0095 8.80408 13.4935 8.93644 14.0872C9 14.3722 9 14.7058 9 15.3729L9 18.0424C9 18.952 9 19.4067 9.25192 19.7613C9.50385 20.1158 9.95128 20.2907 10.8462 20.6406C12.7248 21.375 13.6641 21.7422 14.3321 21.3244C15 20.9066 15 19.9519 15 18.0424V15.3729C15 14.7058 15 14.3722 15.0636 14.0872C15.1959 13.4935 15.488 13.0095 15.9625 12.5976C16.1903 12.3998 16.5085 12.2206 17.145 11.8624L20.058 10.2225C21.0065 9.68858 21.4808 9.4216 21.7404 8.99142C22 8.56124 22 8.04232 22 7.00448V6.31466C22 4.98782 22 4.3244 21.5607 3.9122C21.1213 3.5 20.4142 3.5 19 3.5Z"
                stroke="#5F5F5F"
                strokeWidth="1.5"
              />
              <line
                x1="4.5699"
                y1="10.3856"
                x2="14.5699"
                y2="3.38558"
                stroke="#5F5F5F"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <button className="flex gap-x-2 border border-border rounded-full py-2 px-4 cursor-pointer">
            <p className="font-bold">
              <span className="text-gray-400 font-medium">Sort by: </span>
              Highest Price
            </p>
          </button>
        </div>
      </div>
      {/* products : */}
      <div className=" grid  grid-cols-4 gap-x-10 gap-y-5 justify-center items-center py-5">
        {products.map((product, i) => (
          <ProductCard product={product} key={i} />
        ))}
      </div>
      {/* pagination */}

      <div className="flex flex-col justify-center items-center gap-y-4 py-5 font-medium">
        <button className="mx-auto bg-foreground text-background py-2 px-4 rounded-full cursor-pointer hover:bg-primary transition duration-300" >Show More</button>
        <p>Click to see more listings</p>
      </div>
    </section>
  );
};

export default Products;
