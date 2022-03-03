import React from "react";

const LoginForm = () => {
    return (
        <div className="d-flex flex-column justify-content-center bg-dark">
            <div className="d-flex flex-row justify-content-center">
                <form className="d-flex flex-column text-warning">
                    <h1 className="text-center text-info">Get into system</h1>
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
                    <button
                        type="submit"
                        className="btn btn-outline-warning mt-5 mb-5"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
