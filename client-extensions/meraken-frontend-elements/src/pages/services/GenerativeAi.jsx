import React, { useCallback, useEffect, useState } from "react";
import WhatIsTech from "../commonComp/WhatIsTech";
import WhyItMatters from "../commonComp/WhyItMatters";
import liferayApi from "../../utils/request";
import RealWorldUseCase from "../commonComp/RealWorldUseCase";
import HowItWorks from "../commonComp/HowItWorks";
import WhoIsItFor from "../commonComp/WhoIsItFor";
import RealWorldImpact from "../commonComp/RealWorldImpact";
import HowItHelps from "../commonComp/HowItHelps";
import FAQsComp from "../commonComp/FAQsComp";
import ContactSection from "../commonComp/ContactSection";
import HeroComp from "../commonComp/HeroComp";

const GenerativeAi = () => {
    const [data, setData] = useState({
        whatIsTech: null,
        whyItMatters: null,
        realWorldUseCase: null,
        howItWorks: null,
        whoIsItFor: null,
        realWorldImpact: null,
        howItHelps: null,
        faqs: null,
        contact: null,
        hero: null
    });
    const [folderId, setFolderId] = useState(null);

    const getFolderId = useCallback(async (folderName) => {
        try {
            const siteId = window.Liferay?.ThemeDisplay?.getSiteGroupId();

            const response = await liferayApi.get(
                `/o/headless-delivery/v1.0/sites/${siteId}/structured-content-folders`
            );

            const folder = response.data.items.find(
                (item) => item.name === folderName
            );

            return folder ? folder.id : null;
        } catch (error) {
            console.error("Error fetching folder:", error);
            return null;
        }
    }, []);


    const fetchWebContent = useCallback(
        async (friendlyUrlPath) => {
            try {
                if (!folderId) return null;

                const response = await liferayApi.get(
                    `/o/headless-delivery/v1.0/structured-content-folders/${folderId}/structured-contents?filter=friendlyUrlPath eq '${friendlyUrlPath}'`
                );

                return response.data.items?.[0] || null;
            } catch (error) {
                console.error(
                    `Error fetching web content for ${friendlyUrlPath}:`,
                    error
                );
                return null;
            }
        },
        [folderId]
    );

    useEffect(() => {
        (async () => {
            const id = await getFolderId("Generative_AI"); // <-- folder name
            setFolderId(id);
        })();
    }, [getFolderId]);


    useEffect(() => {
        if (!folderId) return;

        (async () => {
            const [
                whatIsTech,
                whyItMatters,
                realWorldUseCase,
                howItWorks,
                whoIsItFor,
                realWorldImpact,
                howItHelps,
                faqs,
                contact,
                hero
            ] = await Promise.all([
                fetchWebContent("generativeaiwhatistech"),
                fetchWebContent("generativeaiwhyitmatters"),
                fetchWebContent("generativeairealworldusecase"),
                fetchWebContent("generativeaihowitworks"),
                fetchWebContent("generativeaiwhoisitfor"),
                fetchWebContent("generativeairealworldimpact"),
                fetchWebContent("generativeaihowithelps"),
                fetchWebContent("generativeaifaqs"),
                fetchWebContent("generativeaicontact"),
                fetchWebContent("generativeaihero")
            ]);

            setData({
                whatIsTech,
                whyItMatters,
                realWorldUseCase,
                howItWorks,
                whoIsItFor,
                realWorldImpact,
                howItHelps,
                faqs,
                contact,
                hero
            });
        })();

    }, [folderId, fetchWebContent]);


    return (
        <div className="min-h-dvh bg-[#0D0E0F] text-white overflow-x-hidden">
            <HeroComp content={data.hero} />
            <WhatIsTech content={data.whatIsTech} />
            <WhyItMatters content={data.whyItMatters} />
            <RealWorldUseCase content={data.realWorldUseCase} />
            <HowItWorks content={data.howItWorks} />
            <WhoIsItFor content={data.whoIsItFor} />
            <RealWorldImpact content={data.realWorldImpact} />
            <HowItHelps content={data.howItHelps} />
            <FAQsComp content={data.faqs} />
            <ContactSection content={data.contact} />
        </div>
    );
};

export default GenerativeAi;
