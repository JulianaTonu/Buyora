"use client";
import React from "react";
import { Category } from "@/sanity.types";

interface Props {
  categories: Category[];
  selectedCategory?: string | null;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string | null>>;
}

const CategoryList = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  return (
    <div className="w-full bg-white p-5">
      <p className="text-base font-black mb-2">Product Categories</p>

      <div className="space-y-2">
        {categories?.map((category) => {
          const slug = category?.slug?.current as string;
          return (
            <label
              key={category?._id}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                value={slug}
                checked={selectedCategory === slug}
                onChange={() => setSelectedCategory(slug)}
                className="h-4 w-4 text-shop_dark_green border-gray-300 rounded-full"
              />
              <span
                className={`${
                  selectedCategory === slug
                    ? "font-semibold text-shop_dark_green"
                    : "font-normal"
                }`}
              >
                {category?.title}
              </span>
            </label>
          );
        })}
      </div>

      {selectedCategory && (
        <button
          onClick={() => setSelectedCategory(null)}
          className="text-sm font-medium mt-3 underline underline-offset-2 decoration-[1px] hover:text-shop_dark_green hoverEffect text-left"
        >
          Reset selection
        </button>
      )}
    </div>
  );
};

export default CategoryList;
