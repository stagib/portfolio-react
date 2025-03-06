import React from "react";

interface Props {
    children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
    return <div className="w-full max-w-3xl  p-4 sm:p-8 mb-12">{children}</div>;
};

export default Container;
