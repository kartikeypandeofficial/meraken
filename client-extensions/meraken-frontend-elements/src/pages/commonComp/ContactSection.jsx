import React, { useMemo } from "react";

const ContactSection = ({ content }) => {
    const data = useMemo(() => {
        if (!content) return null;

        const fields = content.contentFields;

        const get = (name) =>
            fields.find((f) => f.name === name)?.contentFieldValue?.data || "";

        const getImage = (name) =>
            fields.find((f) => f.name === name)?.contentFieldValue?.image?.contentUrl;

        return {
            headingPrimary: get("primaryText"),
            headingHighlight: get("highlightedText"),
            description: get("description"),
            buttonText: get("buttonText"),
            buttonLink: get("buttonLink"),
            backgroundImage: getImage("backgroundImage"),
        };
    }, [content]);

    if (!data) return null;

    return (
        <section className="mx-auto max-w-none relative py-24 sm:py-32 border-b border-white/10">
            <img
                src={data.backgroundImage}
                alt="Background"
                className="absolute inset-0 size-full object-cover opacity-60"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative mx-auto max-w-7xl px-4">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                        {data.headingPrimary}{" "}
                        <span className="text-[#FF9345]">{data.headingHighlight}</span>?
                    </h2>

                    <p
                        className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
                        dangerouslySetInnerHTML={{ __html: data.description }}
                    ></p>

                    <div className="mt-8 flex items-center justify-center">
                        <a
                            href={data.buttonLink}
                            className="bg-[#FF9345] px-4 py-2.5 text-sm font-semibold text-black hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF9345] no-underline hover:no-underline"
                        >
                            {data.buttonText}
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ContactSection;
