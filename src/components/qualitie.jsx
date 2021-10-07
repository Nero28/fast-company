import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ user }) => {
    return (
        <td>
            {user.qualities.map((qual) => {
                let classes = "badge rounded-pill bg-";
                classes += qual.color;
                return (
                    <td key={qual._id} className={classes}>
                        {qual.name}
                    </td>
                );
            })}
        </td>
    );
};

Qualitie.propTypes = {
    user: PropTypes.object.isRequired
};

export default Qualitie;
