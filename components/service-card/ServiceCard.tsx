import Image, { StaticImageData } from "next/image";

export type SERVICECARD = {
    img: StaticImageData;
    title: string;
    description: string;
    rating: number;
}


const ServiceCard = ({ img, title, description, rating }: SERVICECARD) => {
    return (
        <div
            className="p-2 border border-white/40 rounded-xl">
            
            {/* Card image */}
            <Image 
                src={img}
                alt="services image card"
                width={300}
                height={300}
                className="object-cover object-center w-full max-h-75"/>
            
            {/* Details */}
            <div className="flex flex-col gap-2 p-2">
                <h1 className="text-xl text-white/90">{title}</h1>
                <p className="text-sm text-white/60 min-h-15">
                    {description}
                </p>
                <p className="flex items-center justify-center text-sm text-white/40 gap-3">
                    <span className="grow w-16 h-0.5 bg-white/40"></span>
                    <span>{rating}⭐</span>
                    <span className="grow w-16 h-0.5 bg-white/40"></span>
                </p>
            </div>
        </div>
    );
}

export default ServiceCard;