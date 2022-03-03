import React from "react";
import { Link } from "react-router-dom";

const HeaderMenu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="container d-flex justify-content-between navbar-nav">
                    <li className="nav-item m-2 active">
                        <Link
                            className="nav-link navbar-brand"
                            aria-current="page"
                            to="/"
                        >
                            Quotes(main) page
                        </Link>
                    </li>
                    <li className="nav-item m-2">
                        <Link className="nav-link navbar-brand" to="/myTasks">
                            My Tasks
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">
                            <button className="btn btn-outline-warning">
                                Sign In | Sign up
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default HeaderMenu;
