// SideMenu.tsx
import React, { FC } from "react";
import Logo from "./Logo";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useOutSideClick } from "@/hooks";
import SocialMedia from "./SocialMedia";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const SideMenu: FC<SidebarProps> = ({ isOpen, onClose }) => {
    const pathName = usePathname();

    // ✅ Attach outside click ref to sidebar itself
    const sidebarRef = useOutSideClick<HTMLDivElement>(onClose);

    return (
        <>
            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 opacity-100"
                    onClick={onClose}
                />
            )}

            {/* Sidebar */}
            <div
                ref={sidebarRef}
                className={`fixed top-0 left-0 z-50 h-screen w-72 bg-black border-r border-r-light_purple text-white/70 shadow-xl transform transition-transform duration-300
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex items-center justify-between p-4">
                    <Logo className="text-white" />
                    <button
                        onClick={onClose}
                        className="hover:text-light_purple hoverEffect"
                    >
                        X
                    </button>
                </div>

                {/* Sidebar content */}
                <div className="p-4 flex flex-col items-center space-y-3.5">
                    {headerData?.map((item) => (
                        <Link
                            key={item?.title}
                            href={item?.href}
                            className={`hoverEffect hover:text-light_purple ${
                                pathName === item?.href && "text-white font-bold"
                            }`}
                        >
                            {item?.title}
                        </Link>
                    ))}
                    <SocialMedia />
                </div>
            </div>
        </>
    );
};

export default SideMenu;