"use client";

import Hero from "./hero/Hero";
import ServicePreview from "./service-preview/ServicePreview";
import RepairsPreview from "./repairs-preview/RepairsPreview";

const LandingPage = () => {
    return (
        <section>
            <Hero />
            <ServicePreview />
            <RepairsPreview />
        </section>
    );
}

export default LandingPage;