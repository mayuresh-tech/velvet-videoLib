import React from "react";

import "./Heading.css";

const Heading = ({heading}) => {
    return (
        <>
            <p className="heading">{heading.title}</p>
        </>
    );
}

export default Heading;