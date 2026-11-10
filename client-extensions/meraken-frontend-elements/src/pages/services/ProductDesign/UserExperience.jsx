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
    whatIsTech: "userexperiencewhatistech",
    whyItMatters: "userexperiencewhyitmatters",
    realWorldUseCase: "userexperiencerealworldusecase",
    howItWorks: "userexperiencehowitworks",
    whoIsItFor: "userexperiencewhoisitfor",
    realWorldImpact: "userexperiencerealworldimpact",
    howItHelps: "userexperiencehowithelps",
    faqs: "userexperiencefaqs",
    contact: "userexperiencecontact",
    hero: "userexperiencehero"
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

const UserExperience = () => (
    <CommonServicePage
        folderName="User_Experience"
        urlPathMap={urlPathMap}
        componentMap={componentMap}
    />
);

export default UserExperience;

