import React from "react";

interface Props {
    children: React.ReactNode;
}

const Bar: React.FC<Props> = ({ children }) => {
    return (
        <div className="grid grid-cols-3 justify-between mb-4 bg-stone-700 rounded-md">
            {children}
        </div>
    );
};

export default Bar;
