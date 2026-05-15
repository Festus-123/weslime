"use client";

import { StaticImageData } from "next/image";
import Image from "next/image";
import { images } from "@/assets/image";

export type SERVICES = {
  img: StaticImageData;
  title: string;
  description: string;
  rating: number;
  reverse?: boolean;
};

const Service = () => {
  const services: SERVICES[] = [
    {
      img: images.car_repair2,
      title: "Car Repair",
      description:
        "Professional car repair services for all makes and models, ensuring your vehicle is back on the road in no time with expert care and precision workmanship to address any issue, big or small.",
      rating: 4.5,
      reverse: false,
    },
    {
      img: images.car_wash,
      title: "Car Wash",
      description:
        "Professional car washing and detailing services to keep your vehicle looking its best, inside and out with meticulous attention to detail and high-quality products that leave your car spotless and shining like new.",
      rating: 4.8,
      reverse: true,
    },
    {
      img: images.car_part,
      title: "Car Parts Sales",
      description:
        "High-quality car parts for all your vehicle needs, sourced from trusted manufacturers to ensure reliability and performance with a wide selection of parts available to keep your car running smoothly and efficiently at competitive prices.",
      rating: 4.6,
      reverse: false,
    },
    {
      img: images.car_swap,
      title: "Car Swap",
      description:
        "Convenient car swapping services that allow you to exchange your vehicle for a different one, providing flexibility and variety in your driving experience with a seamless process that connects you with other car owners looking to swap, making it easy to find the perfect match for your needs and preferences.",
      rating: 4.7,
      reverse: true,
    },
  ];

  return (
    <div className="bg-[#141414] w-full h-full p-4 md:p-16 flex flex-col gap-20">
      <p className="flex items-center gap-2 mt-20 text-xl">
        <span className="w-16 h-0.5 bg-white/40 "></span>
        <span className="italic text-white/40">Our Services</span>
      </p>

      {/* service container */}
      <div className="w-full flex flex-col gap-10 md:gap-15 items-center justify-center">
        {services.map((service, index) => (
          <div
            key={index}
            className={`w-full flex flex-col md:flex-row items-center gap-10 ${service.reverse ? "md:flex-row-reverse" : ""}`}
          >
            <Image
              src={service.img}
              alt={service.title}
              className="w-full h-full object-cover object-center rounded-xl brightness-80"
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-xl md:text-3xl font-bold text-white">
                {service.title}
              </h3>
              <p className="text-white/70 text-lg md:text-xl tracking-wide w-full max-w-7xl">
                {service.description}
              </p>
              <div className="flex items-center gap-2">
                <span className="w-16 h-0.5 bg-white/40"></span>
                <span className="text-yellow-400">★</span>
                <span className="text-white">{service.rating}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="w-full flex items-center justify-center text-white/40 italic text-x md:text-sm">
          <p>We are available 24 / 7 and just a click away</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
