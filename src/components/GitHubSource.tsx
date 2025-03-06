import React from "react";
import { SimpleIconsGithub } from "../icons/SimpleIconsGithub";

interface Props {
    href: string;
}

const GitHubSource: React.FC<Props> = ({ href }) => {
    return (
        <a
            className="bg-stone-700 flex gap-2 py-1 px-2 items-center hover:bg-stone-600 rounded-md transition-colors"
            target="_blank"
            href={href}
        >
            <SimpleIconsGithub />
            <div className="text-sm">Source</div>
        </a>
    );
};

export default GitHubSource;
