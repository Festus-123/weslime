"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export type LINKS = {
    href: string;
    name: string;
}

const Navbar = () => {
    const pathname = usePathname();
    const [show, setShow] = useState<boolean>(false);

    const links: LINKS[] = [
        {href: "/", name: "home"},
        {href: "/services", name: "services"},
        {href: "/repairs", name: "repairs"},
        {href: "/contact", name: "contact"},
    ]
    return (
        <div className="w-full p-4 md:p-16 fixed z-50 top-0 flex justify-between items-center">
            
            {/* Logo */}
            <div className="italic text-xl tracking-wider text-white/40">
                Weslime
            </div>

            {/* Links for mobile */}
            { show && (
                <div className="md:hidden absolute left-0 top-full bg-[#141414] w-full h-screen flex flex-col justify-evenly items-end bg-blaxk/40 p-8 text-3xl transition-all duration-700 ease-in-out">
                    {links.map((item, index) => (
                        <Link
                            onClick={() => {
                                setTimeout(() => {
                                    setShow(false)
                                }, 1000)
                            }}
                            key={index}
                            href={item.href}
                            className={`${pathname === item.href ? "text-blue-600" : "text-white"}`}>
                                {item.name}
                        </Link>
                    ))}
                </div>
            )}

            {/* links for tabs and dektop */}
            <div className="hidden md:flex items-center gap-6 text-sm text-white">
                {links.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                            className={`${pathname === item.href ? "text-blue-600" : "text-white"}`}>
                        {item.name}
                    </Link>
                ))}
            </div>

            {/* Control mobile nav */}
            <div className="md:hidden">
                <button 
                    onClick={() => setShow(!show)}
                    className=" text-white/90 text-3xl transition-all duration-200">
                    { !show ? <HiMenuAlt3 /> : <HiX />}
                </button>
            </div>
        </div>
    );
}

export default Navbar;