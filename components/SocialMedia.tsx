
"use client"
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { Facebook, Github, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const socialLink = [
  {
    title: "Facebook",
    href: "https://www.facebook.com/",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Youtube",
    href: "https://www.youtube.com/",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://www.github.com/",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/",
    icon: <Linkedin className="w-5 h-5" />,
  },
];

const SocialMedia = () => {
  return (
    <TooltipProvider>
      <div className="flex gap-3">
        {socialLink.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                target="_blank"
                className="p-2 rounded-full bg-white-800 border-2 hover:bg-gray-300 transition"
              >
                {item.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent className={cn(
                "bg-white text-darkColor font-semibold px-3 py-1 rounded-md ",
            )}>
              <p>{item.title}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
