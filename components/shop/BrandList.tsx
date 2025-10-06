import React from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { BRANDS_QUERYResult } from "@/sanity.types";

interface Props {
  brands: BRANDS_QUERYResult;
  selectedBrand?: string | null;
  setSelectedBrand: React.Dispatch<React.SetStateAction<string | null>>;
}

const BrandList = ({ brands, selectedBrand, setSelectedBrand }: Props) => {
  return (
    <div className="w-full bg-white p-5">
      <p className="text-base font-black">Brands</p>

      <RadioGroup
        value={selectedBrand || ""}
        className="mt-2 space-y-1"
      >
        {brands?.map((brand) => {
          const slug = brand?.slug?.current as string;
          return (
            <div
              key={brand?._id}
              onClick={() => setSelectedBrand(slug)}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <RadioGroupItem
                value={brand?.slug?.current as string}
                id={brand?.slug?.current}
                className="rounded-sm"
              />
              <Label
                htmlFor={slug}
                className={`${
                  selectedBrand === slug
                    ? "font-semibold text-shop_dark_green"
                    : "font-normal"
                }`}
              >
                {brand?.title}
              </Label>
            </div>
          );
        })}

        {selectedBrand && (
          <button
            type="button"
            onClick={() => setSelectedBrand(null)}
            className="text-sm font-medium mt-2 underline underline-offset-2 decoration-[1px] hover:text-shop_dark_green hoverEffect text-left"
          >
            Reset selection
          </button>
        )}
      </RadioGroup>
    </div>
  );
};

export default BrandList;
