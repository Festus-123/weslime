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
        img: images.car_parked,
        title: "Car parked in the wrong place",
        description: "We towed a car that was parked in the wrong place and caused inconvenience to other customers",
        ref: "cost of towing was $200 and result was a happy customer"
    },
    {
        id: 5,
        img: images.car_sales,
        title: "Car sales",
        description: "We sold a car that was repaired and cleaned to a customer who was looking for a good deal",
        ref: "cost of car was $15000 and result was a happy customer"
    },
    {
        id: 6,
        img: images.car_wash2,
        title: "Car wash and detailing",
        description: "We did a car wash and detailing for a customer who wanted to keep his car clean and shiny",
        ref: "cost of wash was $100 and result was a happy customer"
    },
    {
        id: 7,
        img: images.car_swap,
        title: "Car swap",
        description: "We swapped a car that was repaired and cleaned with a customer who wanted to exchange his old car for a new one",
        ref: "cost of swap was $5000 and result was a happy customer"
    },
    {
        id: 8,
        img: images.compound_car,
        title: "Compound car repair",
        description: "We repaired a compound car that was damaged in an accident and restored it to its original condition",
        ref: "cost of repair was $8000 and result was perfection"
    },
    {
        id: 9,
        img: images.cybertruck,
        title: "Cybertruck repair",
        description: "We repaired a cybertruck that was damaged in a crash and fixed its body and engine",
        ref: "cost of repair was $10000 and result was perfection"
    },
    {
        id: 10,
        img: images.car_repair1,
        title: "Car repair and maintenance",
        description: "We did a car repair and maintenance for a customer who wanted to keep his car in good condition",
        ref: "cost of repair was $500 and result was a happy customer"
    }
]