import ProjectPortfolio from "../components/ProjectPortfolio";
import ProjectV34 from "../components/ProjectV34";
import ProjectVault34 from "../components/ProjectVault34";

const ProjectsPage = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-5xl p-4 sm:p-8">
                <div className="mb-4 text-lg font-semibold">Projects</div>
                <div className="flex flex-col gap-8">
                    <ProjectVault34 />
                    <ProjectV34 />
                    <ProjectPortfolio />
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
