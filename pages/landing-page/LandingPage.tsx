"use client";

import Hero from "./hero/Hero";
import ServicePreview from "./service-preview/ServicePreview";
import RepairsPreview from "./repairs-preview/RepairsPreview";
import ChooseUs from "./choose-us/ChooseUs";

const LandingPage = () => {
    return (
        <section>
            <Hero />
            <ServicePreview />
            <RepairsPreview />
            <ChooseUs />
        </section>
    );
}

export default LandingPage;