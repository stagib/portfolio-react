import V34Image from "../assets/v34-api/v34.webp";
import GitHubSource from "./GitHubSource";
import Project from "./Project";
import Tag from "./Tag";

const ProjectV34 = () => {
    return (
        <Project
            name={"V34 API"}
            source={"https://github.com/stagib/vault34-api"}
            src={V34Image}
        >
            <div className="flex flex-col h-full">
                <div className="text-sm text-stone-300 mb-2">
                    V34 API is a high-performance and scalable API for handling
                    user authentication, post management, and media uploads.
                </div>

                <ul className="list-disc text-sm text-stone-300 px-4">
                    <li>Pagination & infinite scrolling</li>
                    <li>File handling</li>
                </ul>

                <div className="mt-auto flex flex-wrap gap-4 justify-between">
                    <div className="flex gap-2">
                        <Tag
                            name="FastAPI"
                            href="https://fastapi.tiangolo.com/"
                        />
                        <Tag name="Python" href="https://www.python.org/" />
                        <Tag
                            name="PostgreSQL"
                            href="https://www.postgresql.org/"
                        />
                    </div>
                    <div className="flex gap-2">
                        <GitHubSource
                            href={"https://github.com/stagib/vault34-api"}
                        />
                    </div>
                </div>
            </div>
        </Project>
    );
};

export default ProjectV34;
