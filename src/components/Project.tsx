import React from "react";
import { Link } from "react-router-dom";

interface ProjectProps {
    name: string;
    source: string;
    morePage?: string | null;
    src: string;
    children: React.ReactNode;
}

const Project: React.FC<ProjectProps> = ({
    name,
    morePage,
    src,
    source,
    children,
}) => {
    return (
        <div className="flex w-full overflow-hidden rounded-lg h-fit sm:h-64 bg-stone-900 border border-stone-800 flex-col sm:flex-row">
            {morePage ? (
                <Link
                    className="w-full sm:w-64 bg-stone-400 shrink-0"
                    to={morePage}
                >
                    <img src={src} alt="" />
                </Link>
            ) : (
                <a
                    className="w-full sm:w-64 bg-stone-400 shrink-0"
                    target="_blank"
                    href={source}
                >
                    <img src={src} alt="" />
                </a>
            )}

            <div className="p-4 flex flex-col w-full">
                <div className="flex justify-between">
                    {morePage ? (
                        <Link className="font-semibold mb-1" to={morePage}>
                            {name}
                        </Link>
                    ) : (
                        <a
                            className="font-semibold mb-1"
                            target="_blank"
                            href={source}
                        >
                            {name}
                        </a>
                    )}
                </div>
                {children}
            </div>
        </div>
    );
};

export default Project;
