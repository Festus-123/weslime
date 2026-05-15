"use client";

import Image from "next/image";
import Link from "next/link";

import { REPAIRS } from "@/data/repair/repairs";

const RepairCard = ({
    id, 
    img,
    title,
    description,
}: REPAIRS) => {
    return (
        <div
            className="w-full p-4 md:p-6 flex flex-col md:flex-row justify-between  gap-10 text-white/40 border-y border-white/10 overflow-hidden">
            
            <div className="text-2xl md:text-4xl ">
                {id}
            </div>

            <Image 
                src={img}
                alt="repairs image"
                width={300}
                height={300}
                className="object-cover object-center rounded-lg w-full max-h-75 max-w-75"/>

            <div className="flex flex-col gap-3 ">
                <h2 className="text-xl md:text-2xl text-white italic">{title}</h2>
                <p className="md:text-lg tracking-wide">
                    {description}
                </p>
            </div>

        </div>
    );
}

export default RepairCard;