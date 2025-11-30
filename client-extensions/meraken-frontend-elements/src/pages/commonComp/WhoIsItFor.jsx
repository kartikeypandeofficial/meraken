import React, { useMemo } from "react";

const WhoIsItFor = ({ content }) => {
    const data = useMemo(() => {
        if (!content) return null;

        const fields = content.contentFields;

        const get = (name) =>
            fields.find((f) => f.name === name)?.contentFieldValue?.data || "";

        // Extract repeatable "steps" (items)
        const items = fields
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
            items,
        };
    }, [content]);

    if (!data) return null;

    return (
        <section className="py-16 border-b border-white/10">
            <div className="mx-auto max-w-7xl px-4">

                {/* Heading Section */}
                <div className="max-w-3xl">
                    <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                        {data.headingPrimary}{" "}
                        <span className="text-[#FF9345]">{data.headingHighlight}</span>
                    </h3>

                    <p
                        className="mt-4 text-lg/8 text-gray-300"
                        dangerouslySetInnerHTML={{ __html: data.description }}
                    ></p>
                </div>

                {/* Cards */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.items.map((item, index) => (
                        <div key={index} className="p-8 bg-white/5 backdrop-blur-md">

                            {/* Number Circle */}
                            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-6">
                                <span className="text-xl font-bold text-white">{item.number}</span>
                            </div>

                            {/* Title */}
                            <h4 className="text-2xl font-bold text-white mb-2">
                                {item.title}
                            </h4>

                            {/* Description */}
                            <p
                                className="text-gray-300 text-base leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: item.desc }}
                            ></p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhoIsItFor;
