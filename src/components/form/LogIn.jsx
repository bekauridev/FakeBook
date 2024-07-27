import React, { useEffect, useState } from "react";
import styles from "./LogIn.module.css";

import { useAuth } from "../../contexts/authContext";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../UI/ErrorMessage";
import Spinner from "../UI/Spinner";
import { convertLowerCase } from "../../utils/hepers/helpers";

function Login() {
  const navigate = useNavigate();
  const { user, login, isAuthenticated, isLoading, error } = useAuth();

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // TEMP
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      login(convertLowerCase(username), convertLowerCase(password));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(`/user/profile?id=${user.id}`, { replace: true });
    }
  }, [navigate, isAuthenticated, user?.id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className={styles.loginContainer}>
        <h2>Login Form</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Link to="/">Go Back </Link>
          <button type="submit" className={styles.btn}>
            Login
          </button>
        </form>
      </div>

      {error && <ErrorMessage message={error} />}
    </>
  );
}

export default Login;
