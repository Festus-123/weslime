"use client";

import RepairsCard from "@/components/repairs-card/RepairsCard";
import { repairs } from "@/data/repair/repairs";


const RepairsPreview = () => {
    return (
        <section className="h-screen flex flex-col gap-10 bg-[#141414] text-white/40">

            <p className="text-lg flex items-center gap-2 mt-20 p-4 md:p-16">
                <span className="w-16 h-0.5 bg-white/40"></span>
                <span className="italic">Repairs and services delivered</span>
            </p>
        
            <div className="flex flex-col ">
            { repairs.map((item, index) => (
                <RepairsCard 
                    key={index}
                    id={item.id}
                    img={item.img}
                    title={item.title}
                    description={item.description}
                    ref={item.ref}/>
            ))}
            </div>
            
        </section>
    );
}

export default RepairsPreview;