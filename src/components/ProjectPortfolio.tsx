import PortfolioImage from "../assets/portfolio/portfolio-blur-1.jpg";
import GitHubSource from "./GitHubSource";
import Project from "./Project";
import Tag from "./Tag";

const ProjectPortfolio = () => {
    return (
        <Project
            name={"Portfolio"}
            source={"https://github.com/stagib/portfolio-react"}
            src={PortfolioImage}
        >
            <div className="flex flex-col h-full">
                <div className="text-sm text-stone-300 mb-2">
                    A simple and modern portfolio designed to highlight the
                    important aspect of your career.
                </div>

                <ul className="list-disc text-sm text-stone-300 px-4">
                    <li>Responsive Design</li>
                    <li>Scalable</li>
                </ul>

                <div className="mt-auto flex flex-wrap gap-4 justify-between">
                    <div className="flex gap-2">
                        <Tag name="React" href="https://react.dev/" />
                        <Tag
                            name="TypeScript"
                            href="https://www.typescriptlang.org/"
                        />
                        <Tag
                            name="Tailwind CSS"
                            href="https://tailwindcss.com/"
                        />
                    </div>
                    <div className="flex gap-2">
                        <GitHubSource
                            href={"https://github.com/stagib/portfolio-react"}
                        />
                    </div>
                </div>
            </div>
        </Project>
    );
};

export default ProjectPortfolio;
