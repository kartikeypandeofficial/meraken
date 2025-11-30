import React, { useMemo } from "react";

const WhatIsTech = ({ content }) => {
    const data = useMemo(() => {
        if (!content) return null;

        const fieldSet =
            content.contentFields?.find((f) => f.name === "whatIsTechFieldSet");

        if (!fieldSet) return null;

        const sectionHeading = fieldSet.nestedContentFields?.find(
            (f) => f.name === "sectionHeading"
        );

        const headingFields = sectionHeading?.nestedContentFields || [];

        const get = (name) =>
            headingFields.find((f) => f.name === name)?.contentFieldValue?.data || "";

        return {
            primaryText: get("primaryText"),
            highlightedText: get("highlightedText"),
            endText: get("endText"),
            description: get("headerDescription"),
        };
    }, [content]);

    if (!data) return null;

    return (
        <section className="py-16">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-start">

                    <div className="max-w-xl">
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                            {data.primaryText}{" "}
                            <span className="text-[#FF9345]">{data.highlightedText}</span>{" "}
                            {data.endText}
                        </h2>
                    </div>

                    <div
                        className="space-y-6 text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: data.description }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default WhatIsTech;
