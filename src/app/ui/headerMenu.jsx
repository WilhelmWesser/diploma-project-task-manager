import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import HeaderProfile from "./headerProfile";

const HeaderMenu = () => {
    const { currentUser } = useAuth();
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid d-flex justify-content-between">
                <ul className="d-flex justify-content-between navbar-nav">
                    <li className="nav-item m-2 active">
                        <Link
                            className="nav-link navbar-brand"
                            aria-current="page"
                            to="/"
                        >
                            Quotes(main) page
                        </Link>
                    </li>
                    {currentUser && (
                        <li className="nav-item m-2">
                            <Link
                                className="nav-link navbar-brand"
                                to="/myTasks"
                            >
                                My Tasks
                            </Link>
                        </li>
                    )}
                </ul>
                <div className="d-flex">
                    {currentUser ? (
                        <HeaderProfile />
                    ) : (
                        <Link className="nav-link" to="/login/signIn">
                            <button className="btn btn-outline-warning">
                                Sign In | Sign up
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default HeaderMenu;
