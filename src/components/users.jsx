import React, { useState } from "react";
import api from "../api";

const Users = () => {
  // console.log(api.users.fetchAll());
  const [users, setUsers] = useState(api.users.fetchAll());

  const handleDalete = (userId) => {
    // console.log("userId", userId);
    setUsers(users.filter((user) => user._id !== userId));
  };

  const renderPhrase = (number) => {
    const phrase =
      number >= 5 || number === 1 ? "человек тусанет" : "человека тусанет";
    return `${number} ${phrase} с
        тобой сегодня`;
  };

  return (
    <>
      {users.length !== 0 ? (
        <>
          <span className="badge m-2 bg-primary">
            {renderPhrase(users.length)}
          </span>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился,раз</th>
                <th scope="col">Оценка</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td>{user.name}</td>
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
                  <td>{user.profession.name}</td>
                  <td>{user.completedMeetings}</td>
                  <td>{user.rate}</td>
                  <td>
                    <button
                      onClick={() => handleDalete(user._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <span className="badge m-2 bg-danger">Никто с тобой не тусанет</span>
      )}
    </>
  );
};

export default Users;
