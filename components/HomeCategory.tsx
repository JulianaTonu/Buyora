import { Category } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomeCategory = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="bg-white border-[1.5px] my-10 md:my-20 p-5 lg:p-7 rounded-md ">
      <h3 className="border-b pb-3 text-lg font-semibold">
        Popular Categories
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 ">
        {categories?.map((category) => (
          <Link
            key={category._id}
                   href={{ pathname: "/shop", query: { brand: category?.slug?.current } }}
            className="flex items-center gap-4 border border-gray-100 shadow-sm p-4 rounded-md hover:shadow-md transition"
          >
            {/* Image Box */}
            {category?.image && (
              <div className="flex-shrink-0 border border-orange-200 p-2 rounded ">
                <Image
                  src={urlFor(category.image).url()}
                  alt={category?.title || "Category"}
                  width={70}
                  height={70}
                  className="object-contain w-16 h-16"
                />
              </div>
            )}

            {/* Text Content */}
            <div className="">
              <h4 className="font-semibold text-dark_red">
                {category.title}
              </h4>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-600">
                  ({category?.productCount})
                </span>{" "}
                items Available
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;
