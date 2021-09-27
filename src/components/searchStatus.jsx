import React from "react";

const SearchStatus = ({ users, renderPhrase }) => {
  return (
    <span className="badge m-2 bg-primary">{renderPhrase(users.length)}</span>
  );
};

export default SearchStatus;
