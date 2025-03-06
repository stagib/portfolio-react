import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="p-4 pr-0 sm:p-8 sm:pr-0 w-72 overflow-auto">
            <div className="mb-4">
                <Link className="font-semibold text-stone-50" to={"/"}>
                    Portfolio
                </Link>
            </div>
            <div
                className={`pl-4 border-l border-stone-400 hover:border-stone-300 hover:text-stone-300`}
            >
                Projects
            </div>
            <div
                className={`pl-4 border-l border-stone-400 hover:border-stone-300 hover:text-stone-300 `}
            >
                Skills
            </div>
            <div
                className={`pl-4 border-l border-stone-400 hover:border-stone-300 hover:text-stone-300 `}
            >
                Experience
            </div>
        </div>
    );
};

export default SideBar;
