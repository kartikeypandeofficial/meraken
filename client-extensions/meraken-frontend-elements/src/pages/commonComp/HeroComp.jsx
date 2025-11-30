import React, { useMemo } from "react";

const HeroComp = ({ content }) => {
    const data = useMemo(() => {
        if (!content) return null;

        const fields = content.contentFields;

        const get = (name) =>
            fields.find((f) => f.name === name)?.contentFieldValue?.data || "";

        const getImage = (name) =>
            fields.find((f) => f.name === name)?.contentFieldValue?.image?.contentUrl;

        return {
            backgroundImage: getImage("backgroundImage"),
            headingPrimary: get("primaryText"),
            headingHighlight: get("highlightedText"),
            description: get("description"),
            buttonText: get("buttonText"),
            buttonLink:
                fields.find((f) => f.name === "buttonLink")?.contentFieldValue?.data ||
                "#",
        };
    }, [content]);

    if (!data) return null;

    return (
        <section className="relative isolate overflow-hidden pt-40 pb-16 min-h-[70vh]">

            {/* Background Image */}
            <img
                src={data.backgroundImage}
                alt="Generative AI"
                className="absolute inset-0 size-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/80"></div>

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="max-w-[70vw] text-left min-h-[calc(70vh-160px)] flex flex-col justify-center">

                    <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-white">
                        {data.headingPrimary}{" "}
                        <span className="text-[#FF9345]">{data.headingHighlight}</span>
                    </h1>

                    <p
                        className="mt-6 text-lg/8 text-gray-200"
                        dangerouslySetInnerHTML={{ __html: data.description }}
                    />

                    <div className="mt-10 flex items-center gap-x-6">
                        <a
                            href={data.buttonLink}
                            className="bg-[#FF9345] px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF9345] no-underline hover:no-underline"
                        >
                            {data.buttonText}
                        </a>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default HeroComp;
