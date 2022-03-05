import React from "react";
import LoginForm from "../forms/loginForm";
import RegisterForm from "../forms/registerForm";

const SignInSignUp = () => {
    const marker = true;
    if (marker) {
        return <LoginForm />;
    } else {
        return <RegisterForm />;
    }
};

export default SignInSignUp;
