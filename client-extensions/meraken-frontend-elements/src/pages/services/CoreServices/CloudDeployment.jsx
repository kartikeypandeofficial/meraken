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
    whatIsTech: "clouddeploymentwhatistech",
    whyItMatters: "clouddeploymentwhyitmatters",
    realWorldUseCase: "clouddeploymentrealworldusecase",
    howItWorks: "clouddeploymenthowitworks",
    whoIsItFor: "clouddeploymentwhoisitfor",
    realWorldImpact: "clouddeploymentrealworldimpact",
    howItHelps: "clouddeploymenthowithelps",
    faqs: "clouddeploymentfaqs",
    contact: "clouddeploymentcontact",
    hero: "clouddeploymenthero"
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

const CloudDeployment = () => (
    <CommonServicePage
        folderName="Cloud_Deployment"
        urlPathMap={urlPathMap}
        componentMap={componentMap}
    />
);

export default CloudDeployment;

