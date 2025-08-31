import React from "react";

const SearchBar = () => {
  return (
    <div className="flex rounded-full border min-w-6/12 gap-x-4 border-border py-2 px-3 items-center ">
      <div className="flex gap-x-5 items-center grow">
        <div className="flex flex-col grow ml-4">
          <label htmlFor="location">Location</label>
          <input
            className="border-none w-full outline-none text-gray-400"
            id="location"
            type="text"
            placeholder="Search for destination"
          />
        </div>
        <div className="border-l border-gray-200 h-8 "></div>
        <div className="flex flex-col">
          <label htmlFor="check-in">Check in</label>
          <input
            className="border-none outline-none w-20 text-gray-400"
            id="check-in"
            type="text"
            placeholder="Add date"
          />
        </div>
        <div className="border-l border-gray-200 h-8 "></div>

        <div className="flex flex-col">
          <label htmlFor="check-out">Check out</label>
          <input
            className="border-none w-20 outline-none text-gray-400"
            id="check-out"
            type="text"
            placeholder="Add date"
          />
        </div>
        <div className="border-l border-gray-200 h-8 "></div>

        <div className="flex flex-col">
          <label htmlFor="People">People</label>
          <input
            className="border-none outline-none w-20 text-gray-400"
            id="People"
            type="text"
            placeholder="Add guest"
          />
        </div>
      </div>

      <div className="rounded-full bg-accent flex justify-center items-center size-11 ">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="9.58329"
            cy="9.58329"
            r="7.91667"
            stroke="white"
            strokeWidth="1.25"
          />
          <path
            d="M15.4166 15.4167L18.3333 18.3334"
            stroke="white"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
