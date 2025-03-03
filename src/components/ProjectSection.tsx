import Project from "./Project";

const ProjectSection = () => {
    return (
        <div className="w-full max-w-5xl p-4 sm:p-8">
            <div className="mb-4 text-lg font-semibold">Projects</div>
            <div className="flex flex-col gap-4">
                <Project name={"Project Name"} source={"/"} morePage={"/"}>
                    <div className="text-sm text-stone-300 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolor quis non natus quas soluta aliquam
                        praesentium tenetur placeat hic quae, aperiam aut
                        repellat voluptate? Voluptas vel quos nam tempore quia!
                    </div>

                    <ul className="list-disc text-sm text-stone-300 px-4">
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </Project>

                <Project name={"Project Name"} source={"/"} morePage={"/"}>
                    <div className="text-sm text-stone-300 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolor quis non natus quas soluta aliquam
                        praesentium tenetur placeat hic quae, aperiam aut
                        repellat voluptate? Voluptas vel quos nam tempore quia!
                    </div>

                    <ul className="list-disc text-sm text-stone-300 px-4">
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </Project>

                <Project name={"Project Name"} source={"/"} morePage={"/"}>
                    <div className="text-sm text-stone-300 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dolor quis non natus quas soluta aliquam
                        praesentium tenetur placeat hic quae, aperiam aut
                        repellat voluptate? Voluptas vel quos nam tempore quia!
                    </div>

                    <ul className="list-disc text-sm text-stone-300 px-4">
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </Project>
            </div>
        </div>
    );
};

export default ProjectSection;
