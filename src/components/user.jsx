import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";
import PropTypes from "prop-types";

const User = ({ users, handleDelete }) => {
    return (
        <tbody>
            {users.map((user) => (
                <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>
                        <Qualitie user={user} />
                    </td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate}</td>
                    <td>
                        <Bookmark />
                    </td>
                    <td>
                        <button
                            onClick={() => handleDelete(user._id)}
                            className="btn btn-danger"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

User.propTypes = {
    users: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired
};
export default User;
