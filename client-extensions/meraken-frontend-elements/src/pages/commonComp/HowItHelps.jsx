import React, { useMemo } from "react";

const HowItHelps = ({ content }) => {
    const data = useMemo(() => {
        if (!content) return null;

        const fieldSet = content.contentFields.find(
            (f) => f.name === "whyItMattersFieldSet"
        );

        if (!fieldSet) return null;

        const nested = fieldSet.nestedContentFields;

        const heading = nested.find((f) => f.name === "sectionHeading");
        const headingFields = heading?.nestedContentFields || [];

        const cards = nested
            .filter((f) => f.name === "cards")
            .map((card) => {
                const cardNested = card.nestedContentFields;

                return {
                    value:
                        cardNested.find((f) => f.name === "cardTitle")
                            ?.contentFieldValue?.data || "",
                    desc:
                        cardNested.find((f) => f.name === "cardDescription")
                            ?.contentFieldValue?.data || "",
                };
            });

        return {
            headingPrimary:
                headingFields.find((f) => f.name === "primaryText")?.contentFieldValue
                    ?.data || "",
            headingHighlight:
                headingFields.find((f) => f.name === "highlightedText")
                    ?.contentFieldValue?.data || "",
            headingEnd:
                headingFields.find((f) => f.name === "endText")?.contentFieldValue
                    ?.data || "",

            description:
                nested.find((f) => f.name === "headerDescription")
                    ?.contentFieldValue?.data || "",

            stats: cards,
        };
    }, [content]);

    if (!data) return null;

    return (
        <section className="mx-auto max-w-none bg-[#0D0E0F] py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-4">

                <div className="mt-10 grid gap-10 lg:grid-cols-2">

                    <div className="max-w-3xl text-left">
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                            {data.headingPrimary}{" "}
                            <span className="text-[#FF9345]">{data.headingHighlight}</span>{" "}
                            {data.headingEnd}
                        </h2>

                        <p
                            className="mt-6 text-lg/8 text-gray-300"
                            dangerouslySetInnerHTML={{ __html: data.description }}
                        ></p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {data.stats.map((stat, index) => (
                            <div key={index} className="p-6 bg-white/5 backdrop-blur-md">
                                <div className="text-4xl font-semibold text-white">
                                    {stat.value}
                                </div>

                                <p
                                    className="mt-3 text-gray-300"
                                    dangerouslySetInnerHTML={{ __html: stat.desc }}
                                ></p>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default HowItHelps;