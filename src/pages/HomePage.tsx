import ExperienceSection from "../components/ExperienceSection";
import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";

function HomePage() {
    return (
        <div className="flex flex-col items-center overflow-auto w-full">
            <Header />
            <ProjectSection />
            <SkillSection />
            <ExperienceSection />
        </div>
    );
}

export default HomePage;
