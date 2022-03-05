import React, { useState, useEffect } from "react";
import { validatorChooser } from "../utils/validators/validatorChooser";
import { nanoid } from "nanoid";
import { privacyPolicyValidator } from "../utils/validators/privacyPolicyValidator";

const RegisterForm = () => {
    // const [disabled, setDisabled] = useState(true);
    const [userData, setUserData] = useState({
        _id: nanoid(),
        name: "",
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        name: validatorChooser("name", userData.name),
        email: validatorChooser("email", userData.email),
        password: validatorChooser("password", userData.password),
        privacyPolicy: privacyPolicyValidator("")
    });
    const [disabled, setDisabled] = useState(
        errors.name !== "" ||
            errors.email !== "" ||
            errors.password !== "" ||
            errors.privacyPolicy !== ""
    );

    useEffect(() => {
        setDisabled(
            errors.name !== "" ||
                errors.email !== "" ||
                errors.password !== "" ||
                errors.privacyPolicy !== ""
        );
    }, [userData]);

    const handleChange = (event) => {
        setErrors((prevState) => ({
            ...prevState,
            [event.target.name]: validatorChooser(
                event.target.name,
                event.target.name === "privacyPolicy"
                    ? event.target.checked
                    : event.target.value
            )
        }));

        setUserData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        delete userData.privacyPolicy;
        console.log(userData);
    };

    return (
        <div className="d-flex flex-column justify-content-center bg-dark">
            <div className="d-flex justify-content-center">
                <form className="d-flex flex-column justify-content-center text-warning mt-5">
                    <h1 className="mb-5 mt-3">Registration form</h1>
                    <div className="form-group mt-2">
                        <label className="text-info">{errors.name}</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            aria-describedby="textHelp"
                            placeholder="User name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label className="text-info">{errors.email}</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label className="text-info">{errors.password}</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-check mt-3">
                        <label className="text-info">
                            {errors.privacyPolicy}
                        </label>
                        <div>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                                name="privacyPolicy"
                                onChange={handleChange}
                            />
                            <label>
                                Accept{" "}
                                <a
                                    href="/"
                                    className="text-info"
                                    style={{ textDecoration: "none" }}
                                >
                                    licence terms
                                </a>
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className={`btn ${
                            disabled ? "bg-secondary" : "btn-outline-warning"
                        } mt-5 mb-5`}
                        disabled={disabled}
                        onSubmit={handleSubmit}
                    >
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
