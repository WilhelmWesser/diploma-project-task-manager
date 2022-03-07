import React, { useState, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { validatorChooser } from "../utils/validators/validatorChooser";
import { useHistory } from "react-router-dom";
import { useTasks } from "../hooks/useTasks";

const LoginForm = () => {
    const history = useHistory();
    const { getTasks } = useTasks();
    const { signIn } = useAuth();
    const [userLogInData, setUserLogInData] = useState({
        email: "",
        password: "",
        regEmailError: "",
        regPasswordError: ""
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setErrors((prevState) => ({
                ...prevState,
                regEmailError: "",
                regPasswordError: ""
            }));
            await signIn(userLogInData);
            await getTasks();
            history.push(
                history.location.state
                    ? history.location.state.from.pathname
                    : "/"
            );
        } catch (error) {
            setErrors((prevState) => ({
                ...prevState,
                regEmailError: error.email,
                regPasswordError: error.password
            }));
        }
    };

    return (
        <div className="d-flex flex-column justify-content-center bg-dark">
            <div className="d-flex flex-row justify-content-center">
                <form
                    className="d-flex flex-column text-warning"
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-center text-info">Get into system</h1>
                    <div className="form-group mt-3">
                        <div>
                            <label className="text-dark bg-info rounded">
                                {errors.regEmailError}
                            </label>
                        </div>
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
                        <div>
                            <label className="text-dark bg-info rounded">
                                {errors.regPasswordError}
                            </label>
                        </div>
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
                    >
                        Sign in
                    </button>
                    <h5 className="text-center text-light mb-5">
                        Do not have an account?{" "}
                        <a
                            href="/login/signUp"
                            className="text-success"
                            style={{ textDecoration: "none" }}
                        >
                            Sign Up
                        </a>
                    </h5>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
