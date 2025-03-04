import Project from "../components/Project";

const ProjectsPage = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-5xl p-4 sm:p-8">
                <div className="mb-4 text-lg font-semibold">Projects</div>
                <div className="flex flex-col gap-8">
                    <Project
                        name={"Vault34"}
                        source={"https://github.com/stagib/vault34-frontend"}
                        morePage={"/projects/vault34"}
                        main={
                            <div>
                                <div className="text-sm text-stone-300 mb-4">
                                    Vault34 is a dynamic content-sharing
                                    platform, allowing users to upload,
                                    organize, and discover images and videos.
                                    Users can create posts, engage with content
                                    through reactions, and explore a curated
                                    feed of visually rich media.
                                </div>

                                <ul className="list-disc text-sm text-stone-300 px-4 mb-4">
                                    <li>Responsive layout</li>
                                    <li>Infinite scroll</li>
                                </ul>
                            </div>
                        }
                        tags={
                            <div className="flex gap-2">
                                <div className="text-xs bg-stone-700 px-2 py-1 rounded-full">
                                    SvelteKit
                                </div>
                                <div className="text-xs bg-stone-700 px-2 py-1 rounded-full">
                                    JaveScript
                                </div>
                                <div className="text-xs bg-stone-700 px-2 py-1 rounded-full">
                                    Tailwind
                                </div>
                            </div>
                        }
                    ></Project>

                    <Project
                        name={"V34 API"}
                        source={"https://github.com/stagib/vault34-api"}
                        morePage={"/"}
                        main={
                            <div>
                                <div className="text-sm text-stone-300 mb-4">
                                    V34 API is a high-performance and scalable
                                    API for handling user authentication, post
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
                                <div className="text-xs bg-stone-700 px-2 py-1 rounded-full">
                                    FastAPI
                                </div>
                                <div className="text-xs bg-stone-700 px-2 py-1 rounded-full">
                                    Python
                                </div>
                                <div className="text-xs bg-stone-700 px-2 py-1 rounded-full">
                                    PostgreSQL
                                </div>
                            </div>
                        }
                    ></Project>

                    <Project
                        name={"Portfolio"}
                        source={"/"}
                        morePage={"/"}
                        main={
                            <div>
                                <div className="text-sm text-stone-300 mb-4">
                                    A simple and modern portfolio designed to
                                    highlight the important aspect of your
                                    career. Features a fully responsive design
                                    with user-friendly and interactive UI.
                                </div>

                                <ul className="list-disc text-sm text-stone-300 px-4">
                                    <li>Responsive Design</li>
                                    <li>Scalable</li>
                                </ul>
                            </div>
                        }
                        tags={
                            <div className="flex gap-2">
                                <div className="text-xs bg-stone-700 px-2 py-1 rounded-full">
                                    React
                                </div>
                                <div className="text-xs bg-stone-700 px-2 py-1 rounded-full">
                                    TypeScript
                                </div>
                                <div className="text-xs bg-stone-700 px-2 py-1 rounded-full">
                                    Tailwind
                                </div>
                            </div>
                        }
                    ></Project>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
