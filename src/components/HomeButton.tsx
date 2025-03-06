import { Link } from "react-router-dom";
import { MaterialSymbolsHome } from "../icons/MaterialSymbolsHome";

const HomeButton = () => {
    return (
        <div className="flex items-center">
            <Link
                className="bg-stone-700 hover:bg-stone-600 px-2 py-1 rounded-md transition-colors"
                to={"/"}
            >
                <div className="flex items-center gap-2">
                    <MaterialSymbolsHome />
                    <div className="text-sm">Home</div>
                </div>
            </Link>
        </div>
    );
};

export default HomeButton;
