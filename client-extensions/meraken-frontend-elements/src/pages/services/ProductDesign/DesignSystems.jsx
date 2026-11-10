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
    whatIsTech: "designsystemswhatistech",
    whyItMatters: "designsystemswhyitmatters",
    realWorldUseCase: "designsystemsrealworldusecase",
    howItWorks: "designsystemshowitworks",
    whoIsItFor: "designsystemswhoisitfor",
    realWorldImpact: "designsystemsrealworldimpact",
    howItHelps: "designsystemshowithelps",
    faqs: "designsystemsfaqs",
    contact: "designsystemscontact",
    hero: "designsystemshero"
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

const DesignSystems = () => (
    <CommonServicePage
        folderName="Design_Systems"
        urlPathMap={urlPathMap}
        componentMap={componentMap}
    />
);

export default DesignSystems;

