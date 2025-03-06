import Bar from "../components/Bar";
import Container from "../components/Container";
import HomeButton from "../components/HomeButton";
import ProjectPortfolio from "../components/ProjectPortfolio";
import ProjectV34 from "../components/ProjectV34";
import ProjectVault34 from "../components/ProjectVault34";

const ProjectsPage = () => {
    return (
        <div className="flex flex-col items-center">
            <Container>
                <Bar>
                    <HomeButton />
                    <div className="flex items-center justify-center text-sm">
                        Projects
                    </div>
                </Bar>
                <div className="flex flex-col gap-8">
                    <ProjectVault34 />
                    <ProjectV34 />
                    <ProjectPortfolio />
                </div>
            </Container>
        </div>
    );
};

export default ProjectsPage;
