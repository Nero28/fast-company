import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ users, renderPhrase }) => {
    return (
        <span className="badge m-2 bg-primary">
            {renderPhrase(users.length)}
        </span>
    );
};
SearchStatus.propTypes = {
    users: PropTypes.array.isRequired,
    renderPhrase: PropTypes.func.isRequired
};

export default SearchStatus;
