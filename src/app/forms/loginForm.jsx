import React, { useState, useEffect } from "react";
import { validatorChooser } from "../utils/validators/validatorChooser";

const LoginForm = () => {
    const [userLogInData, setUserLogInData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        email: validatorChooser("email", userLogInData.email),
        password: validatorChooser("password", userLogInData.password)
    });
    const [disabled, setDisabled] = useState(
        errors.name !== "" ||
            errors.email !== "" ||
            errors.password !== "" ||
            errors.privacyPolicy !== ""
    );

    useEffect(() => {
        setDisabled(errors.email !== "" || errors.password !== "");
    }, [userLogInData]);

    const handleChange = (event) => {
        setErrors((prevState) => ({
            ...prevState,
            [event.target.name]: validatorChooser(
                event.target.name,
                event.target.value
            )
        }));

        setUserLogInData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userLogInData);
    };

    return (
        <div className="d-flex flex-column justify-content-center bg-dark">
            <div className="d-flex flex-row justify-content-center">
                <form className="d-flex flex-column text-warning">
                    <h1 className="text-center text-info">Get into system</h1>
                    <div className="form-group mt-3">
                        <label className="text-info">{errors.email}</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
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
                    <button
                        type="submit"
                        className={`btn ${
                            disabled ? "bg-secondary" : "btn-outline-warning"
                        } mt-5 mb-5`}
                        disabled={disabled}
                        onSubmit={handleSubmit}
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
