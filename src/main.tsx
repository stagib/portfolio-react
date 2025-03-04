import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import Vault34Page from "./pages/Vault34Page.tsx";

const router = createBrowserRouter([
    { path: "/", element: <HomePage />, errorElement: <NotFoundPage /> },
    { path: "/projects", element: <ProjectsPage /> },
    { path: "/projects/vault34", element: <Vault34Page /> },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
