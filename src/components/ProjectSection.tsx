import { Link } from "react-router-dom";
import PortfolioImage from "../assets/portfolio/portfolio-blur-1.jpg";
import V34Image from "../assets/v34-api/v34.webp";
import vault34Image from "../assets/vault34/home-medium-1.jpg";
import Project from "./Project";

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
                <Project
                    name={"Vault34"}
                    source={"https://github.com/stagib/vault34-frontend"}
                    src={vault34Image}
                    morePage={"/projects/vault34"}
                    main={
                        <div>
                            <div className="text-sm text-stone-300 mb-4">
                                Vault34 is a dynamic content-sharing platform,
                                allowing users to upload, organize, and discover
                                images and videos. Users can create posts,
                                engage with content through reactions, and
                                explore a curated feed of visually rich media.
                            </div>

                            <ul className="list-disc text-sm text-stone-300 px-4 mb-4">
                                <li>Pinterest clone</li>
                                <li>Responsive layout</li>
                                <li>Infinite scroll</li>
                            </ul>
                        </div>
                    }
                    tags={
                        <div className="flex gap-2">
                            <a
                                className="text-xs bg-stone-700 hover:bg-stone-600 px-2 py-1 rounded-full"
                                target="_blank"
                                href="https://svelte.dev/"
                            >
                                SvelteKit
                            </a>
                            <a
                                className="text-xs bg-stone-700 hover:bg-stone-600 px-2 py-1 rounded-full"
                                target="_blank"
                                href="https://www.javascript.com/"
                            >
                                JaveScript
                            </a>
                            <a
                                className="text-xs bg-stone-700 hover:bg-stone-600 px-2 py-1 rounded-full"
                                target="_blank"
                                href="https://tailwindcss.com/"
                            >
                                Tailwind
                            </a>
                        </div>
                    }
                ></Project>

                <Project
                    name={"V34 API"}
                    source={"https://github.com/stagib/vault34-api"}
                    morePage={"https://github.com/stagib/vault34-api"}
                    src={V34Image}
                    main={
                        <div>
                            <div className="text-sm text-stone-300 mb-4">
                                V34 API is a high-performance and scalable API
                                for handling user authentication, post
                                management, and media uploads. it ensures
                                efficient data handling, fast responses, and
                                seamless integration with Vault34 frontend.
                            </div>

                            <ul className="list-disc text-sm text-stone-300 px-4">
                                <li>Pagination & infinite scrolling</li>
                                <li>File handling</li>
                            </ul>
                        </div>
                    }
                    tags={
                        <div className="flex gap-2">
                            <a
                                className="text-xs bg-stone-700 hover:bg-stone-600 px-2 py-1 rounded-full"
                                target="_blank"
                                href="https://fastapi.tiangolo.com/"
                            >
                                FastAPI
                            </a>
                            <a
                                className="text-xs bg-stone-700 hover:bg-stone-600 px-2 py-1 rounded-full"
                                target="_blank"
                                href="https://www.python.org/"
                            >
                                Python
                            </a>
                            <a
                                className="text-xs bg-stone-700 hover:bg-stone-600 px-2 py-1 rounded-full"
                                target="_blank"
                                href="https://www.postgresql.org/"
                            >
                                PostgreSQL
                            </a>
                        </div>
                    }
                ></Project>

                <Project
                    name={"Portfolio"}
                    source={"/"}
                    morePage={"/"}
                    src={PortfolioImage}
                    main={
                        <div>
                            <div className="text-sm text-stone-300 mb-4">
                                A simple and modern portfolio designed to
                                highlight the important aspect of your career.
                                Features a fully responsive design with
                                user-friendly and interactive UI.
                            </div>

                            <ul className="list-disc text-sm text-stone-300 px-4">
                                <li>Responsive Design</li>
                                <li>Scalable</li>
                            </ul>
                        </div>
                    }
                    tags={
                        <div className="flex gap-2">
                            <a
                                className="text-xs bg-stone-700 hover:bg-stone-600 px-2 py-1 rounded-full"
                                target="_blank"
                                href="https://react.dev/"
                            >
                                React
                            </a>
                            <a
                                className="text-xs bg-stone-700 hover:bg-stone-600 px-2 py-1 rounded-full"
                                target="_blank"
                                href="https://www.typescriptlang.org/"
                            >
                                TypeScript
                            </a>
                            <a
                                className="text-xs bg-stone-700 hover:bg-stone-600 px-2 py-1 rounded-full"
                                target="_blank"
                                href="https://tailwindcss.com/"
                            >
                                Tailwind
                            </a>
                        </div>
                    }
                ></Project>
            </div>
        </div>
    );
};

export default ProjectSection;
