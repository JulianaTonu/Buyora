"use client";

import { HeartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const FavoriteButton = ({
  showProduct = false,
  product,
}: {
  showProduct?: boolean;
  product?: Product | null | undefined;
}) => {
  return (
    <>
      {!showProduct ? (
        <Link href={"/wishlist"} className="group relative">
          <HeartIcon className="w-5 h-5 hover:text-light_red hoverEffect" />
          <span className="absolute -top-2 -right-1 flex justify-center items-center h-3.5 rounded-full text-white w-3.5 p-2 font-semibold bg-dark_red">
            0
          </span>
        </Link>
      ) : (
        <button>
          <HeartIcon className="w-5 h-5 mt-0.5 hover:text-light_red hoverEffect" />
        </button>
      )}
    </>
  );
};

export default FavoriteButton;
