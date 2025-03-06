import React from "react";

interface SkillProps {
    name: string;
    description: string;
    source: string;
    children: React.ReactNode;
}

const Skill: React.FC<SkillProps> = ({
    name,
    description,
    source,
    children,
}) => {
    return (
        <a
            className="bg-stone-700 p-4 rounded-md hover:bg-stone-600 transition-colors"
            target="_blank"
            href={source}
        >
            <div className="flex gap-2 items-center mb-1">
                <div className="text-lg">{children}</div>
                <div className="font-semibold">{name}</div>
            </div>
            <div className="text-stone-300 text-sm">{description}</div>
        </a>
    );
};

export default Skill;
