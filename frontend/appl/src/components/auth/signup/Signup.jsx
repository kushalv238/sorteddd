import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useUserAuth } from "../../../context/UserAuthContext";

import removeFirebasePrefix from './../../../utility/removeFirebasePrefix'

// import axios from "axios"
import GoogleButton from "react-google-button";

function Signup() {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: "",
        email: "",
        pass: "",
        confPass: ""
    });

    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const { signUp, googleSignIn } = useUserAuth()

    const handleGoogleSignIn = async (e) => {
        e.preventDefault()

        try {
            await googleSignIn()
            navigate("/")
        } catch (err) {
            setErrorMsg(removeFirebasePrefix(err.message))
            setSubmitButtonDisabled(false)
        }
    }

    const handleSubmission = async (e) => {
        e.preventDefault();

        if (!values.name || !values.email || !values.pass) {
            setErrorMsg("Fill all fields");
            return;
        }
        if (values.pass !== values.confPass) {
            setErrorMsg("Confirm password is not matching with password.");
            return;
        }

        setErrorMsg("");
        setSubmitButtonDisabled(true);

        try {
            await signUp(values.name, values.email, values.pass)
            navigate("/")
        } catch (err) {
            setErrorMsg(removeFirebasePrefix(err.message))
            setSubmitButtonDisabled(false);
        }
    };

    return (
        <div className="flex flex-wrap gap-2 w-96">
            <div className="auth-wrapper">
                <p className="heading">Signup</p>

                <form onSubmit={handleSubmission} className="flex flex-col gap-3">
                    <input
                        label="Name"
                        placeholder="Enter your name"
                        value={values.name}
                        autoFocus
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, name: event.target.value }))
                        }
                    />
                    <input
                        label="Email"
                        value={values.email}
                        placeholder="Enter email address"
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, email: event.target.value }))
                        }
                    />
                    <input
                        label="Password"
                        type="password"
                        value={values.pass}
                        placeholder="Enter password"
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, pass: event.target.value }))
                        }
                    />

                    <input
                        label="Password"
                        type="password"
                        value={values.confPass}
                        placeholder="Confirm password"
                        onChange={(event) =>
                            setValues((prev) => ({ ...prev, confPass: event.target.value }))
                        }
                    />
                    <b className="error">{errorMsg}</b>
                    <button className="application-button auth-btn mt-1" onClick={e => handleSubmission(e)} disabled={submitButtonDisabled}>
                        Signup
                    </button>
                    <hr className="my-4" />
                    <GoogleButton className="m-auto mb-2" onClick={handleGoogleSignIn} />
                </form>
            </div>

            <div className="auth-wrapper">
                <p>
                    Already have an account?{" "}
                    <span>
                        <Link to="/auth/login">Login</Link>
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Signup;