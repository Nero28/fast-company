import React from "react";

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

export default Qualitie;
