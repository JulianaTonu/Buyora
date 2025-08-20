"use client"
import React from "react";
import { Loader2, PackageX } from "lucide-react"; // you can swap with any icon

const NoProductAvailable = ({ message = "No Products Available" }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center py-16">
            <PackageX className="w-16 h-16 text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold text-gray-900">{message}</h2>
            <div className="flex items-center justify-center gap-2">
                <Loader2 className=" rounded-full animate-spin" />
                <p className="text-gray-800 mt-2">We are restocking shortly</p>

            </div>
            <p className="text-gray-400 mt-2">Please check back later or explore other categories.</p>
        </div>
    );
};

export default NoProductAvailable;
