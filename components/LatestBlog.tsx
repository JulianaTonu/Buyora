import { urlFor } from '@/sanity/lib/image';
import { getLatestBlogs } from '@/sanity/queries';
import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import dayjs from 'dayjs';

const LatestBlog = async () => {
  const blogs = await getLatestBlogs();

  return (
    <div className="mb-10 lg:mb-20">
      <p className="text-gray-700 text-start pb-4 text-xl font-semibold">Latest Blog</p>

      {/* Grid layout instead of flex-col-x */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
        {blogs?.map((blog) => (
          <div key={blog?._id} className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-lg transition">

            {blog?.mainImage && (
              <Link href={`/blog/${blog?.slug?.current}`}>
                <Image
                  src={urlFor(blog?.mainImage).url()}
                  alt={blog?.title || 'blogImage'}
                  width={500}
                  height={500}
                  className="w-full max-h-80 object-cover"
                />
              </Link>
            )}

            <div className=" flex items-center gap-4  px-4 py-2 my-2">
              {/* Blog Categories */}
              <div className="border-b-2 border-gray-400 flex flex-wrap gap-2 text-xs   cursor-pointer hover:border-gray-800 hoverEffect">
                {blog?.blogcategories?.map((item, index) => (
                  <Link href={`/blog/${blog?.slug?.current}`}
                    key={index}
                    className="p-2 rounded-md"
                  >
                    {item?.title}
                  </Link>
                ))}
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 border-b-2 border-gray-400 text-xs text-gray-400 cursor-pointer hover:border-gray-800 hoverEffect p-2">
                <Calendar size={14} />
                {dayjs(blog?.publishedAt).format('MMMM D, YYYY')}
              </div>
            </div>
            <Link href={`/blog/${blog?.slug?.current}`}
              className='text-base font-semibold tracking-wide mt-3 line-clamp-2 px-4 py-1
              text-gray-600 hover:text-gray-900'
            >
              {blog?.title}
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
