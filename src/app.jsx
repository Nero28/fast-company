import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDalete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const renderPhrase = (number) => {
    const phrase =
      number >= 5 || number === 1 ? "человек тусанет" : "человека тусанет";
    return `${number} ${phrase} с
        тобой сегодня`;
  };

  return (
    <Users
      users={users}
      onHandleDelete={handleDalete}
      onRenderPhrase={renderPhrase}
    />
  );
}

export default App;
