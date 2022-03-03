import React from "react";
import LoginForm from "../forms/loginForm";
import RegisterForm from "../forms/registerForm";

const SignInSignUp = () => {
    const marker = false;
    if (marker) {
        return <LoginForm />;
    } else {
        return <RegisterForm />;
    }
};

export default SignInSignUp;
