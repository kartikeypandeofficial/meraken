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
    whatIsTech: "userinterfacewhatistech",
    whyItMatters: "userinterfacewhyitmatters",
    realWorldUseCase: "userinterfacerealworldusecase",
    howItWorks: "userinterfacehowitworks",
    whoIsItFor: "userinterfacewhoisitfor",
    realWorldImpact: "userinterfacerealworldimpact",
    howItHelps: "userinterfacehowithelps",
    faqs: "userinterfacefaqs",
    contact: "userinterfacecontact",
    hero: "userinterfacehero"
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

const UserInterface = () => (
    <CommonServicePage
        folderName="User_Interface"
        urlPathMap={urlPathMap}
        componentMap={componentMap}
    />
);

export default UserInterface;

