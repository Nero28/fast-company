import React from "react";
import User from "./user";
import SearchStatus from "./searchStatus";

const Users = ({ users, onHandleDelete, onRenderPhrase }) => {
  return (
    <>
      {users.length !== 0 ? (
        <>
          <SearchStatus users={users} renderPhrase={onRenderPhrase} />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился,раз</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избранное</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <User users={users} handleDelete={onHandleDelete} />
          </table>
        </>
      ) : (
        <span className="badge m-2 bg-danger">Никто с тобой не тусанет</span>
      )}
    </>
  );
};

export default Users;
