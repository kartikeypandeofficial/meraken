import React, { useMemo } from "react";

const WhyItMatters = ({ content }) => {
    const data = useMemo(() => {
        if (!content) return null;

        const fieldSet = content.contentFields?.find(
            (f) => f.name === "whyItMattersFieldSet"
        );

        if (!fieldSet) return null;

        const nested = fieldSet.nestedContentFields || [];

        const sectionHeading = nested.find((f) => f.name === "sectionHeading");
        const headingFields = sectionHeading?.nestedContentFields || [];

        const getHeading = (name) =>
            headingFields.find((f) => f.name === name)?.contentFieldValue?.data || "";

        const cards = nested
            .filter((f) => f.name === "cards")
            .map((card) => {
                const cardNested = card.nestedContentFields || [];

                return {
                    title:
                        cardNested.find((f) => f.name === "cardTitle")
                            ?.contentFieldValue?.data || "",
                    description:
                        cardNested.find((f) => f.name === "cardDescription")
                            ?.contentFieldValue?.data || "",
                };
            });

        return {
            primaryText: getHeading("primaryText"),
            highlightedText: getHeading("highlightedText"),
            endText: getHeading("endText"),
            headerDescription:
                nested.find((f) => f.name === "headerDescription")?.contentFieldValue
                    ?.data || "",
            cards,
        };
    }, [content]);

    if (!data) return null;

    return (
        <section className="py-16 bg-[#25292C]">
            <div className="mx-auto max-w-7xl px-4">

                <div className="max-w-3xl">
                    <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                        {data.primaryText}{" "}
                        <span className="text-[#FF9345]">{data.highlightedText}</span>{" "}
                        {data.endText}
                    </h3>

                    <div
                        className="mt-4 text-lg/8 text-gray-300"
                        dangerouslySetInnerHTML={{ __html: data.headerDescription }}
                    />
                </div>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.cards.map((card, idx) => (
                        <div key={idx} className="p-8 bg-black/30 backdrop-blur-md">
                            <h4 className="text-white text-xl font-semibold">
                                {card.title}
                            </h4>

                            <div
                                className="mt-3 text-gray-300 text-base leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: card.description }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyItMatters;
