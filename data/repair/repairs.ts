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
    },
    {
        id: 3,
        img: images.car_repair2,
        title: "Mercedes Benz S class repair",
        description: "Repaired a mercedes benz s class with a faulty engine and replaced the engine with a new one",
        ref: "cost of repair was $5000 and result was perfection"
    },
    {
        id: 4,
        img: images.car_repair1,
        title: "Lamborghini Aventador repair",
        description: "Repaired a lamborghini aventador with a faulty engine and replaced the engine with a new one",
        ref: "cost of repair was $7000 and result was perfection"
    },
    {
        id: 5,
        img: images.car_repair3,
        title: "Porsche 911 repair",
        description: "Repaired a porsche 911 with a faulty engine and replaced the engine with a new one",
        ref: "cost of repair was $4000 and result was perfection"
    },
    {
        id: 6,
        img: images.car_repair2,
        title: "Ferrari 488 repair",
        description: "Repaired a ferrari 488 with a faulty engine and replaced the engine with a new one",
        ref: "cost of repair was $6000 and result was perfection"
    },
    {
        id: 7,
        img: images.car_wash,
        title: "Audi R8 repair",
        description: "Repaired an audi r8 with a faulty engine and replaced the engine with a new one",
        ref: "cost of repair was $4500 and result was perfection"
    }
]