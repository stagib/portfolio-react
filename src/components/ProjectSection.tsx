import { Link } from "react-router-dom";
import ProjectPortfolio from "./ProjectPortfolio";
import ProjectV34 from "./ProjectV34";
import ProjectVault34 from "./ProjectVault34";

const ProjectSection = () => {
    return (
        <div className="w-full max-w-5xl p-4 sm:p-8 mb-12">
            <div className="mb-4  flex justify-between items-end">
                <div className="text-lg font-semibold">Featured Projects</div>
                <Link className="text-xs text-stone-300" to={"/projects"}>
                    View more
                </Link>
            </div>
            <div className="flex flex-col gap-8">
                <ProjectVault34 />
                <ProjectV34 />
                <ProjectPortfolio />
            </div>
        </div>
    );
};

export default ProjectSection;
