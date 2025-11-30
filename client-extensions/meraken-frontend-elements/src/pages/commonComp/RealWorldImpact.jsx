import React, { useMemo } from "react";

const RealWorldImpact = ({ content }) => {
    const data = useMemo(() => {
        if (!content) return null;

        const fields = content.contentFields;

        const get = (name) =>
            fields.find((f) => f.name === name)?.contentFieldValue?.data || "";

        const getImage = (name) =>
            fields.find((f) => f.name === name)?.contentFieldValue?.image?.contentUrl;

        const contentParas = fields
            .filter((f) => f.name === "content")
            .map((f) => f.contentFieldValue?.data || "");

        const bullets = fields
            .filter((f) => f.name === "bullets")
            .map((f) => f.contentFieldValue?.data || "");

        return {
            headingPrimary: get("headingPrimary"),
            headingHighlight: get("headingHighlight"),
            content: contentParas,
            bullets,
            finalParagraph: get("finalParagraph"),
            image: getImage("Image77321070"),
        };
    }, [content]);

    if (!data) return null;

    return (
        <section className="py-16 bg-[#25292C]">
            <div className="mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div>
                        <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
                            {data.headingPrimary}{" "}
                            <span className="text-[#FF9345]">{data.headingHighlight}</span>
                        </h3>

                        <div className="mt-4 space-y-6 text-gray-300">

                            {data.content.map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}

                            <ul className="list-disc pl-6 space-y-2">
                                {data.bullets.map((bullet, i) => (
                                    <li key={i}>{bullet}</li>
                                ))}
                            </ul>

                            <p
                                className="text-gray-300"
                                dangerouslySetInnerHTML={{ __html: data.finalParagraph }}
                            ></p>
                        </div>
                    </div>

                    <div>
                        <img
                            src={data.image}
                            alt="Real-World Impact"
                            className="w-full h-auto"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RealWorldImpact;
