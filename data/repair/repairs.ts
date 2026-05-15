import { StaticImageData } from "next/image"
import { images } from "@/assets/image";

export type REPAIRS = {
    id: number
    date?: string;
    img: StaticImageData;
    title: string;
    description: string;
    ref?: string
}

export const repairs: REPAIRS[] = [
    {
        id: 1,
        img: images.car_repair3,
        title: "Bughatti lounge mart repair",
        description: "Did a full repair and clean sweep of a bughatti sv16 lounge mart",
        ref: "cost of repair was $1300 and result was perfection"
    },
    {
        id: 2,
        img: images.car_wash,
        title: "Tuesday in 50 wash",
        description: "Tuesday revenue shows over 50 car wash completed with a positive review ",
        
    }
]