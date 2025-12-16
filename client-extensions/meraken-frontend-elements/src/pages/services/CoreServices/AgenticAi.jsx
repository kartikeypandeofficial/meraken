import React from "react";
import CommonServicePage from "../../commonComp/CommonServicePage";
import WhatIsTech from "../../commonComp/WhatIsTech";
import WhyItMatters from "../../commonComp/WhyItMatters";
import RealWorldUseCase from "../../commonComp/RealWorldUseCase";
import HowItWorks from "../../commonComp/HowItWorks";
import WhoIsItFor from "../../commonComp/WhoIsItFor";
import RealWorldImpact from "../../commonComp/RealWorldImpact";
import HowItHelps from "../../commonComp/HowItHelps";
import FAQsComp from "../../commonComp/FAQsComp";
import ContactSection from "../../commonComp/ContactSection";
import HeroComp from "../../commonComp/HeroComp";

const urlPathMap = {
    whatIsTech: "agenticaiwhatistech",
    whyItMatters: "agenticaiwhyitmatters",
    realWorldUseCase: "agenticairealworldusecase",
    howItWorks: "agenticaihowitworks",
    whoIsItFor: "agenticaiwhoisitfor",
    realWorldImpact: "agenticairealworldimpact",
    howItHelps: "agenticaihowithelps",
    faqs: "agenticaifaqs",
    contact: "agenticaicontact",
    hero: "agenticaihero"
};

const componentMap = {
    hero: HeroComp,
    whatIsTech: WhatIsTech,
    whyItMatters: WhyItMatters,
    realWorldUseCase: RealWorldUseCase,
    howItWorks: HowItWorks,
    whoIsItFor: WhoIsItFor,
    realWorldImpact: RealWorldImpact,
    howItHelps: HowItHelps,
    faqs: FAQsComp,
    contact: ContactSection
};

const AgenticAi = () => (
    <CommonServicePage
        folderName="Agentic_Ai"
        urlPathMap={urlPathMap}
        componentMap={componentMap}
    />
);

export default AgenticAi;

