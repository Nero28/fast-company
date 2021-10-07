import React, { useState } from "react";

const Bookmark = () => {
    const [active, setActive] = useState();
    const getClasses = () => {
        let classes = "bi bi-bookmark";
        classes += active === true ? "-fill" : "";
        return classes;
    };

    return <i onClick={() => setActive(!active)} className={getClasses()}></i>;
};

export default Bookmark;
