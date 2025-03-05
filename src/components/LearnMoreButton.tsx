import React from "react";
import { Link } from "react-router-dom";

interface Props {
    href: string;
}

const LearnMoreButton: React.FC<Props> = ({ href }) => {
    return (
        <Link
            className="bg-stone-800 flex gap-2 py-1 px-2 items-center hover:bg-stone-700 rounded-md"
            to={href}
        >
            <div className="text-sm">Learn more</div>
        </Link>
    );
};

export default LearnMoreButton;
