"use client";
import { usePathname } from "next/navigation";

import Link from "next/link";

const Footer = () => {
    const pathname = usePathname();
    
    const links = [
        { name: "Home", href: "/"},
        { name: "Services", href: "/services"},
        { name: "Repairs", href: "/repairs"},
        { name: "Contact", href: "/contact"},
    ]

    return (
        <footer
            className="bg-[#141414] text-white/40  border-t border-white/10"
        >
            <div className="flex flex-col gap-10 p-4 md:p-16">
                <h1 className=" font-medium text-white/40 text-lg md:text-3xl tracking-wide">
                    <span className="italic"> Weslime </span>
                    <span className="font-medium text-white">Auto Repairs</span>
                </h1>

                <div className="w-full flex flex-wrap gap- p-2 md:p-8">
                    <aside className="flex flex-col gap-3 grow">
                        <h2 className="text-lg">Services an About</h2>
                        <p className="w-full max-w-xl text-justify">We provide a wide range of car services to meet all your automotive
                            needs, including professional car repair, thorough car washing and
                            detailing, and high-quality car parts sales, ensuring that your vehicle
                            receives the best care and maintenance for optimal performance and
                            longevity, all delivered with exceptional customer service and expertise
                            to keep your car running smoothly and looking its best.</p>
                    </aside>

                    <aside
                     className="flex flex-col gap-3 grow">
                        <h2 className="text-lg">Contact Info</h2>
                        <p>Email: info@weslimeautorepairs.com</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Address: 123 Auto Repair St, Car City, CC 12345</p>
                        <p>instagram: @weslimeautorepairs</p>
                        <p>linkedin: linkedin.com/in/weslimeautorepairs</p>
                    </aside>

                    <aside className="flex flex-col gap-3 grow">
                        <h2 className="text-lg">Quick Links</h2>
                        <ul className={`flex flex-col gap-2`}>
                            { links.map((item, index) => (
                                <li key={index}>
                                    <Link 
                                        href={item.href}
                                        className={`${pathname === item.href && "text-blue-500"}`}>
                                            {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>

            </div>
            <div className="w-full h-full flex items-center justify-center p-4 md:p-16 border-t border-white/20">
                <p className="text-sm md:text-base tracking-wide">
                    &copy; {new Date().getFullYear()} Mechanic Services. All rights reserved.
                </p>
            </div>

        </footer>
    );
}

export default Footer;