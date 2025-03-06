import { Link } from "react-router-dom";

const ExperienceSection = () => {
    return (
        <div className="w-full max-w-4xl p-4 sm:p-8 mb-12">
            <div className="mb-4  flex justify-between items-end">
                <div className="text-lg font-semibold">Experience</div>
                <Link
                    className="text-xs text-stone-300 hover:text-stone-50 transition-colors"
                    to={"/experiences"}
                >
                    View more
                </Link>
            </div>
            <div className="bg-stone-800 p-4 rounded-md flex flex-col border-l-8 border-stone-200">
                <div className="flex gap-2 items-center mb-1">
                    <div className="font-semibold text-lg">500</div>
                    <div>Failed to load experiences</div>
                </div>
                <div className="text-stone-300 text-sm">
                    Try refreshing the page
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
