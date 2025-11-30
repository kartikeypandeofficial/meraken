import React, { useState,useMemo } from "react";

const FAQsComp = ({content}) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const parsedData = useMemo(() => {
        if (!content) return null;

        const root = content.contentFields;

        const headingFieldSet = root.find(f => f.name === "sectionHeading");

        const heading = headingFieldSet?.nestedContentFields?.find(
            f => f.name === "primaryText"
        )?.contentFieldValue?.data || "";

        const description = headingFieldSet?.nestedContentFields?.find(
            f => f.name === "headerDescription"
        )?.contentFieldValue?.data || "";

        const faqItems = root
            .filter(f => f.name === "items") // repeatable items
            .map(item => {
                const nested = item.nestedContentFields;

                return {
                    question:
                        nested.find(f => f.name === "question")?.contentFieldValue?.data ||
                        "",
                    answer:
                        nested.find(f => f.name === "answer")?.contentFieldValue?.data ||
                        "",
                };
            });

        return {
            heading,
            description,
            items: faqItems,
        };
    }, [content]);

    if (!parsedData) return null;

    return (
        <section className="py-16 border-b border-white/10">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    <div>
                        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                            {parsedData.heading}
                        </h3>

                        <p
                            className="mt-4 text-lg text-gray-300 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: parsedData.description }}
                        />
                    </div>

                    <div className="space-y-4">
                        {parsedData.items.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div key={index} className="bg-white/5 backdrop-blur-md">
                                    <button
                                        className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                                        onClick={() => toggle(index)}
                                    >
                    <span className="text-lg font-normal text-white">
                      {faq.question}
                    </span>

                                        <span className="text-white text-xl font-light">
                      {isOpen ? "×" : "+"}
                    </span>
                                    </button>

                                    {isOpen && (
                                        <div className="px-6 pb-4">
                                            <p
                                                className="text-gray-300 leading-relaxed"
                                                dangerouslySetInnerHTML={{ __html: faq.answer }}
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQsComp;
