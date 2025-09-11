"use client"
import React, { useState } from 'react';

const ImageView = ({images}) => {
     const product = {
        name: "Nike Pegasus 41 shoes",
        category: "Sports",
        price: 189,
        offerPrice: 159,
        rating: 4,
        images: [
            "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png",
            "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png",
            "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png",
            "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage4.png"
        ],
        description: [
            "High-quality material",
            "Comfortable for everyday use",
            "Available in different sizes"
        ]
    };

    const [thumbnail, setThumbnail] =useState(product.images[0]);
    return (
             <div className="max-w-6xl w-full px-6">
           

            <div className="flex flex-col md:flex-row gap-16 mt-4">
                <div className="flex gap-3">
                    <div className="flex flex-col gap-3">
                        {product.images.map((image, index) => (
                            <div key={index} onClick={() => setThumbnail(image)} className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer" >
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>
              

                    <div className="border border-gray-500/30 max-w-100 rounded overflow-hidden">
                        <img src={images[0]} alt="Selected product" className="w-full h-full object-cover" />
                    </div>
                </div>

               
            </div>
        </div>
    );
};

export default ImageView;