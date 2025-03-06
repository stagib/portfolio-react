import React from "react";

interface Props {
    href: string;
    name: string;
}

const Tag: React.FC<Props> = ({ href, name }) => {
    return (
        <a
            className="text-xs bg-stone-700 hover:bg-stone-600 px-2 py-1 rounded-full transition-colors"
            target="_blank"
            href={href}
        >
            {name}
        </a>
    );
};

export default Tag;
