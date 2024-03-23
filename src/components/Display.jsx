import React, { useMemo } from "react";

const Display = ({ text, displayvalue }) => {
    console.log("Display Component Rendered ", { displayvalue });
    return useMemo(() => (
        <p>
            This person's {text} is {displayvalue}
        </p>
    ), [displayvalue]);
};

export default Display;
