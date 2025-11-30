import React, { useMemo } from "react";

const RealWorldUseCases = ({ content }) => {
    const data = useMemo(() => {
        if (!content) return null;

        const fields = content.contentFields;

        const get = (name) =>
            fields.find((f) => f.name === name)?.contentFieldValue?.data || "";

        const getImage = (name) =>
            fields.find((f) => f.name === name)?.contentFieldValue?.image?.contentUrl;

        const items = fields
            .filter((f) => f.name === "items")
            .map((item) => {
                const nested = item.nestedContentFields;

                return {
                    title:
                        nested.find((f) => f.name === "title")?.contentFieldValue?.data ||
                        "",
                    desc:
                        nested.find((f) => f.name === "itemDescription")
                            ?.contentFieldValue?.data || "",
                };
            });

        return {
            headingPrimary: get("headingPrimary"),
            headingHighlight: get("headingHighlight"),
            description: get("description"),
            compImg: getImage("compImg"),
            items,
        };
    }, [content]);

    if (!data) return null;

    return (
        <section className="py-16 bg-[#0F0F0F]">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <img
                            src={data.compImg}
                            alt={data.headingPrimary + " " + data.headingHighlight}
                            className="w-full h-auto"
                        />
                    </div>

                    <div>
                        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                            {data.headingPrimary}{" "}
                            <span className="text-[#FF9345]">{data.headingHighlight}</span>
                        </h3>

                        <p className="mt-4 text-lg text-gray-300"
                           dangerouslySetInnerHTML={{ __html: data.description }}
                        />

                        <div className="space-y-6 mt-8">
                            {data.items.map((item, index) => (
                                <div key={index}>
                                    <h4 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                                        <svg
                                            className="w-4 h-4 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                        {item.title}
                                    </h4>

                                    <p
                                        className="text-gray-300"
                                        dangerouslySetInnerHTML={{ __html: item.desc }}
                                    ></p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default RealWorldUseCases;
