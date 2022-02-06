import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
//  import User from "./user";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import UserTable from "./usersTable";
import api from "../api";
import _ from "lodash";

const Users = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({
        iter: "name",
        order: "asc"
    });
    //  const [id] = useState(<i className="bi bi-caret-down-fill"></i>);

    const pageSize = 8;

    const [users, setUsers] = useState(api.users.fetchAll());

    useEffect(() => {
        users.then((data) => {
            setUsers(data);
        });
    }, []);

    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId));
    };
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark };
                }
                return user;
            })
        );
        console.log(id);
    };

    //  console.log("allUsers", typeof allUsers);

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handleProfessionSelect = (item) => {
        // console.log({ item });
        setSelectedProf(item);
    };

    // console.log(professions);
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
        //  console.log("page: ", pageIndex);
    };

    const handleSort = (item) => {
        setSortBy(item);
    };

    if (users) {
        const filteredUsers = selectedProf
            ? users.filter((user) => user.profession.name === selectedProf.name)
            : users;
        const count = filteredUsers.length;
        // console.log({ filteredUsers });

        const sortedUsers = _.orderBy(
            filteredUsers,
            [sortBy.path],
            [sortBy.order]
        );

        const usersCrop = paginate(sortedUsers, currentPage, pageSize);
        // console.log({ usersCrop });
        const clearFilter = (params) => {
            setSelectedProf();
        };
        return (
            <div className="d-flex">
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-0">
                        <GroupList
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                            valueProperty="_id"
                            contentProperty="name"
                        />
                        <button
                            className="btn btn-secondary m-2"
                            onClick={clearFilter}
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />

                    {count > 0 && (
                        <UserTable
                            users={usersCrop}
                            onSort={handleSort}
                            selectedSort={sortBy}
                            onDelete={handleDelete}
                            onToggleBookMark={handleToggleBookMark}
                        />
                    )}

                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
    return "loading...";
};
Users.propTypes = {
    users: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};
export default Users;
