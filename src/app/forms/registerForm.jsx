import React from "react";

const RegisterForm = () => {
    return (
        <div className="d-flex flex-column justify-content-center bg-dark">
            <div className="d-flex justify-content-center">
                <form className="d-flex flex-column justify-content-center text-warning mt-5">
                    <h1 className="mb-5 mt-3">Registration form</h1>
                    <div className="form-group mt-2">
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            aria-describedby="textHelp"
                            placeholder="User name"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="form-check mt-3">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
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
                    <button
                        type="submit"
                        className="btn btn-outline-warning mt-5 mb-5"
                    >
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
