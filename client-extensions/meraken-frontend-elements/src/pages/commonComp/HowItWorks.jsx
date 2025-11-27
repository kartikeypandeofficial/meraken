import React, { useMemo } from "react";

const HowItWorks = ({ content }) => {
    const data = useMemo(() => {
        if (!content) return null;

        const fields = content.contentFields;

        const get = (name) =>
            fields.find((f) => f.name === name)?.contentFieldValue?.data || "";

        const steps = fields
            .filter((f) => f.name === "steps")
            .map((step) => {
                const nested = step.nestedContentFields;

                return {
                    number:
                        nested.find((f) => f.name === "number")?.contentFieldValue?.data ||
                        "",
                    title:
                        nested.find((f) => f.name === "title")?.contentFieldValue?.data ||
                        "",
                    desc:
                        nested.find((f) => f.name === "desc")?.contentFieldValue?.data ||
                        "",
                };
            });

        return {
            headingPrimary: get("headingPrimary"),
            headingHighlight: get("headingHighlight"),
            description: get("description"),
            steps,
        };
    }, [content]);

    if (!data) return null;

    return (
        <section className="py-24 bg-[#25292C]">
            <div className="mx-auto max-w-7xl px-4">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-6">
                        {data.headingPrimary}{" "}
                        <span className="text-[#FF9345]">{data.headingHighlight}</span>
                    </h2>

                    <p
                        className="text-lg text-gray-300 max-w-3xl mx-auto"
                        dangerouslySetInnerHTML={{ __html: data.description }}
                    ></p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {data.steps.map((step, index) => (
                        <div key={index} className="text-center">

                            <div className="w-16 h-16 bg-[#FF9345] rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-2xl font-bold text-black">{step.number}</span>
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-4">
                                {step.title}
                            </h3>

                            <p
                                className="text-gray-300"
                                dangerouslySetInnerHTML={{ __html: step.desc }}
                            ></p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HowItWorks;
