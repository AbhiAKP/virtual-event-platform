import React, { useState } from "react";
import styles from "./login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    const { value } = event.target;
    setUsername(value);
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Input validation
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]{0,49}$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+<>?:"{},.\/;'[\]\\=-]{8,20}$/;
    if (!username.match(usernameRegex)) {
      setError(
        "Username must start with an alphabet, can only contain alphabets, integers, and underscore, and must not exceed 50 characters."
      );
      return;
    }
    if (!password.match(passwordRegex)) {
      setError(
        "Password must contain at least 8 characters and at most 20 characters and can include alphabets, special characters and numbers."
      );
      return;
    }

    setError(null);

    console.log("hello")
    window.alert("hello")

    // Submit login form
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Wrong username or password");
        }
        return response.json();
      })
      .then((data) => {
        // Set the access token in localStorage
        localStorage.setItem("accessToken", data.accessToken);

        // Redirect to home page
        window.location.href = `/home`;
      })
      .catch((error) => {
        console.error(error);
        // Display error message
        setError("Wrong Username or Password");
        return;
      });
  };

  return (
    <div className={styles.login}>
      <div className={styles.card_login}>
        <div className={styles.left_login}>
          <h1 className={styles.title}>StreamLearnr VirtualCampus</h1>
          <p className={styles.desc}>
            StreamLearnr provides you a platform to host virtual bootcamps and
            workshops with the support of live streaming, chat features and
            interactive elements such as polls and quizzes. Join us today.
          </p>
          <span className={styles.span}>Don't have an account?</span>
          <Link to="/register">
            <button className={styles.button_register}>Register</button>
          </Link>
        </div>
        <div className={styles.right_login}>
          <h1 className={styles.h1_login}>Login</h1>
          <form className={styles.login_form} onSubmit={handleSubmit}>
            <input
              className={styles.login_input}
              type="text"
              placeholder="Username OR Email"
              value={username}
              onChange={handleUsernameChange}
              required
            />
            <input
              className={styles.login_input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {error && <p className={styles.error}>{error}</p>}
            <button className={styles.button_login} type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
