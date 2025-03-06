import { Outlet } from "react-router-dom";
/* import SideBar from "./SideBar"; */

const Layout = () => {
    return (
        <div className="flex justify-center max-h-screen">
            {/*  <SideBar /> */}
            <div className="flex flex-col items-center overflow-auto w-full">
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
