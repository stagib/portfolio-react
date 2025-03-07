import vault34Image from "../assets/vault34/home-medium-1.jpg";
import GitHubSource from "./GitHubSource";
import LearnMoreButton from "./LearnMoreButton";
import Project from "./Project";
import Tag from "./Tag";

const ProjectVault34 = () => {
    return (
        <Project
            name={"Vault34"}
            source={"https://github.com/stagib/vault34-frontend"}
            src={vault34Image}
            morePage={"/projects/vault34"}
        >
            <div className="flex flex-col h-full">
                <div className="text-sm text-stone-300 mb-2">
                    Vault34 is a dynamic content-sharing platform, allowing
                    users to upload, organize, and discover images and videos.
                </div>

                <ul className="list-disc text-sm text-stone-300 px-4 mb-4">
                    <li>Pinterest clone</li>
                    <li>Responsive layout</li>
                </ul>

                <div className="mt-auto flex flex-wrap gap-4 justify-between">
                    <div className="flex gap-2">
                        <Tag name="SvelteKit" href="https://svelte.dev/" />
                        <Tag
                            name="JaveScript"
                            href="https://www.javascript.com/"
                        />
                        <Tag
                            name="Tailwind CSS"
                            href="https://tailwindcss.com/"
                        />
                    </div>
                    <div className="flex gap-2">
                        <LearnMoreButton href={"/projects/vault34"} />
                        <GitHubSource
                            href={"https://github.com/stagib/vault34-frontend"}
                        />
                    </div>
                </div>
            </div>
        </Project>
    );
};

export default ProjectVault34;
