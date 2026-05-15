"use client";
import ServiceCard from "@/components/service-card/ServiceCard";
import { images } from "@/assets/image";

const ServicePreview = () => {
  return (
    <div className="bg-[#141414] w-full h-full flex flex-col justify-center gap-10 text-white/80 p-4 md:p-16">
      <p className="flex items-center gap-1 mt-10">
        <span className="w-20 h-0.5 bg-white/40"></span>
        <span className="italic text-white/40">We Offer</span>
      </p>
      <h1 className="text-white/60 text-xl md:text-3xl tracking-wide leading-normal text-justify">
        We provide a wide range of car services to meet all your automotive
        needs, including professional car repair, thorough car washing and
        detailing, and high-quality car parts sales, ensuring that your vehicle
        receives the best care and maintenance for optimal performance and
        longevity, all delivered with exceptional customer service and expertise
        to keep your car running smoothly and looking its best.
      </h1>

      <div className="w-full grid grid-cols-3 gap-10 p-4 md:p-16">
        <ServiceCard
          img={images.car_repair2}
          title="Car Repair"
          description="Professional car repair services for all makes and models."
          rating={4.5}
        />
        <ServiceCard
          img={images.car_wash}
          title="Car Wash"
          description="Professional car washing and detailing services."
          rating={4.7}
        />
        <ServiceCard
          img={images.car_part}
          title="Car Parts Sales"
          description="High-quality car parts for all your vehicle needs."
          rating={4.6}
        />
      </div>

      <div className="w-full flex items-center justify-center text-white/40 italic text-x md:text-sm">
        <p>We are available 24 / 7 and just a click away</p>
      </div>
    </div>
  );
};

export default ServicePreview;
