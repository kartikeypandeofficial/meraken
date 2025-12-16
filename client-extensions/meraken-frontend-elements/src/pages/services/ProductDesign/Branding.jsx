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
    whatIsTech: "brandingwhatistech",
    whyItMatters: "brandingwhyitmatters",
    realWorldUseCase: "brandingrealworldusecase",
    howItWorks: "brandinghowitworks",
    whoIsItFor: "brandingwhoisitfor",
    realWorldImpact: "brandingrealworldimpact",
    howItHelps: "brandinghowithelps",
    faqs: "brandingfaqs",
    contact: "brandingcontact",
    hero: "brandinghero"
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

const Branding = () => (
    <CommonServicePage
        folderName="Branding"
        urlPathMap={urlPathMap}
        componentMap={componentMap}
    />
);

export default Branding;

