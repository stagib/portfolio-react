import { SimpleIconsFastapi } from "../icons/SimpleIconsFastapi";
import { SimpleIconsFlask } from "../icons/SimpleIconsFlask";
import { SimpleIconsJavascript } from "../icons/SimpleIconsJavascript";
import { SimpleIconsPostgresql } from "../icons/SimpleIconsPostgresql";
import { SimpleIconsReact } from "../icons/SimpleIconsReact";
import { SimpleIconsSqlite } from "../icons/SimpleIconsSqlite";
import { SimpleIconsSvelte } from "../icons/SimpleIconsSvelte";
import { SimpleIconsTailwindcss } from "../icons/SimpleIconsTailwindcss";
import { SimpleIconsTypescript } from "../icons/SimpleIconsTypescript";
import Container from "./Container";
import Skill from "./Skill";

const SkillSection = () => {
    return (
        <Container>
            <div className="mb-4 flex items-end">
                <div className="text-lg font-semibold">Skills</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <Skill
                    name="Svelte"
                    description="Component-based front-end framework"
                    source="https://svelte.dev/"
                >
                    <SimpleIconsSvelte />
                </Skill>
                <Skill
                    name="FastAPI"
                    description="Web framework for building APIs in Python"
                    source="https://fastapi.tiangolo.com/"
                >
                    <SimpleIconsFastapi />
                </Skill>
                <Skill
                    name="PostgreSQL"
                    description="Relational database management system"
                    source="https://www.postgresql.org/"
                >
                    <SimpleIconsPostgresql />
                </Skill>
                <Skill
                    name="React"
                    description="Front-end JavaScript library"
                    source="https://react.dev/"
                >
                    <SimpleIconsReact />
                </Skill>
                <Skill
                    name="Tailwind CSS"
                    description="Open-source CSS framework"
                    source="https://tailwindcss.com/"
                >
                    <SimpleIconsTailwindcss />
                </Skill>
                <Skill
                    name="Flask"
                    description="Micro web framework written in Python"
                    source="https://flask.palletsprojects.com/en/stable/"
                >
                    <SimpleIconsFlask />
                </Skill>
                <Skill
                    name="TypeScript"
                    description="Superset of JavaScript"
                    source="https://www.typescriptlang.org/"
                >
                    <SimpleIconsTypescript />
                </Skill>
                <Skill
                    name="JavaScript"
                    description="Core technology of the World Wide Web"
                    source="https://www.javascript.com/"
                >
                    <SimpleIconsJavascript />
                </Skill>
                <Skill
                    name="SQLite"
                    description="Open-source relational database engine"
                    source="https://www.sqlite.org/index.html"
                >
                    <SimpleIconsSqlite />
                </Skill>
            </div>
        </Container>
    );
};

export default SkillSection;
