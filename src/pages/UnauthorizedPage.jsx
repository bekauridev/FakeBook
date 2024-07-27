import React from "react";
import { Link } from "react-router-dom";
import styles from "./UnauthorizedPage.module.css";
const UnauthorizedPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className={styles.notFoundContainer}>
      <h1>You Can't Access !!!</h1>

      <p>Order to get access you should Log in _^_^_ </p>
      <Link to={`/user/profile?id=${user?.id}`}>Back to Account</Link>
    </div>
  );
};

export default UnauthorizedPage;
