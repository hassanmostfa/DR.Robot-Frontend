import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupImg from "../images/signup-image.png";
const Signup = () => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();
    async function handleSubmit(e) {
        e.preventDefault();
        // check that all fields is filled
        let patient = { fName, lName, email, password, phone };
        if (
        fName === "" ||
        lName === "" ||
        email === "" ||
        password === "" ||
        phone === ""
        ) {
        alert("Please fill all the fields");
        } else {
        let result = await fetch("http://127.0.0.1:8000/api/register", {
            method: "post",
            body: JSON.stringify(patient),
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
        });
        result = await result.json();
        localStorage.setItem("patient-info", JSON.stringify(result));
        navigate("/profile-data");
        }
    }

    return (
        <div className="signup-container">
        <div className="img-container">
            <div className="welcome-txt">Signup Now</div>
            <div>
            <img src={SignupImg} alt="" />
            </div>
            <div className="signup-footer">
            Join Us Now , And Enjoy 24/7 <br /> Medical Assistant to take care of
            your Wellness
            </div>
        </div>
        <div className="form col-sm-5">
            <form onSubmit={handleSubmit} method="post">
            <div className="d-flex col-sm-12 my-3 name-inputs">
                <input
                type="text"
                className="col-sm-6"
                name="fName"
                placeholder="First Name"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
                />
                <input
                type="text"
                className="col-sm-6"
                name="lName"
                placeholder="Last Name"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
                />
            </div>
            <div className="col-sm-12 mt-3 rest-inputs">
                <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                />{" "}
                <br /> <br />
                <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />{" "}
                <br /> <br />
                <input
                type="phone"
                name="phone"
                placeholder="Enter your phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />{" "}
                <br /> <br />
            </div>
            <button type="submit" className="signup-btn mb-3">
                Signup
            </button>
            </form>
            <span className="my-2">
            You already have Account ? <Link to={"/"}>Login</Link>{" "}
            </span>
        </div>
        </div>
    );
};

export default Signup;
