import Header from "../components/Header";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";

function HomePage() {
    return (
        <div className="flex flex-col items-center">
            <Header />
            <ProjectSection />
            <SkillSection />
        </div>
    );
}

export default HomePage;
