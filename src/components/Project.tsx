import React from "react";
import { Link } from "react-router-dom";
import { SimpleIconsGithub } from "../icons/SimpleIconsGithub";

interface ProjectProps {
    name: string;
    source: string;
    morePage: string;
    main: React.ReactNode;
    tags: React.ReactNode;
}

const Project: React.FC<ProjectProps> = ({
    name,
    source,
    morePage,
    main,
    tags,
}) => {
    return (
        <div className="flex w-full overflow-hidden rounded-lg bg-stone-900">
            <a className="h-64 w-64 bg-stone-400 shrink-0" href={morePage}></a>
            <div className="p-4 flex flex-col w-full">
                <div className="flex flex-col justify-between">
                    <div className="font-semibold mb-1">{name}</div>

                    {main}
                </div>

                <div className="mt-auto flex justify-between">
                    {tags}
                    <div className="flex gap-2">
                        <Link
                            className="bg-stone-800 flex gap-2 py-1 px-2 items-center hover:bg-stone-700 rounded-md"
                            to={morePage}
                        >
                            <div className="text-sm">Learn more</div>
                        </Link>
                        <a
                            className="bg-stone-700 flex gap-2 py-1 px-2 items-center hover:bg-stone-600 rounded-md"
                            target="_blank"
                            href={source}
                        >
                            <SimpleIconsGithub />
                            <div className="text-sm">Source</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
