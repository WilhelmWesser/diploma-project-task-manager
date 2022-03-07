import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
const HeaderProfile = () => {
    const { currentUser } = useAuth();
    const [isOpen, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <div className="dropdown bg-warning rounded" onClick={toggleMenu}>
            <div className="btn dropdown-toggle d-flex align-items-center">
                <div className="me-2">{currentUser.name}</div>
            </div>
            <div className={"w-100 dropdown-menu" + (isOpen ? " show" : "")}>
                <Link className="dropdown-item" to="/myProfile">
                    Profile
                </Link>
                <Link to="logout" className="dropdown-item">
                    Log out
                </Link>
            </div>
        </div>
    );
};

export default HeaderProfile;
