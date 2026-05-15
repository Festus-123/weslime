"use client";

import { images } from "@/assets/image";
import Image, { StaticImageData } from "next/image";

const ChooseUs = () => {
  const grdImages: StaticImageData[] = [
    images.car_repair2,
    images.car_repair3,
    images.car_wash,
    images.car_repair1,
  ];

  return (
    <section className="bg-[#141414] text-white/40 p-4 md:p-16 flex flex-col gap-10">
      <p className="flex items-center gap-2 mt-20">
        <span className="w-16 h-0.5 bg-white/40"></span>
        <span className="italic">Why choose us</span>
      </p>

      {/* Bento grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center mt-10">
        {grdImages.map((item, index) => (
          <Image
            key={index}
            src={item}
            alt={`bento grid image ${index}`}
            className={` ${index === 0 || index === 3 ? "md:col-span-2" : "md:col-span-1"} w-full h-100 rounded-xl brightness-90 object-cover object-center`}
          />
        ))}
      </div>

      <div className="w-full p-4 md:p-16 flex items-center justify-center">
        <blockquote className="text-xl md:text-3xl tracking-wider italic text-white/80 text-center font-bold max-w-4xl leading-relaxed">
          &quot;We offer a variety of services, delivering top notch work to our
          customers. our aim is to build a
          systematic strenght for automobile by providing quality sevices and
          beng avilable 24 - 7 in a global range&quot;
        </blockquote>
      </div>
    </section>
  );
};

export default ChooseUs;
