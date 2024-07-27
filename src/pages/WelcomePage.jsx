import React from "react";
import styles from "./WelcomePage.module.css";
import { Link } from "react-router-dom";
function WelcomePage() {
  return (
    <div className={styles.welcomePageContainer}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src="/src/assets/next.png" alt="logo" />
        </div>
        <nav>
          <Link to="login">Login</Link>
          <Link to="register">Sign Up</Link>
        </nav>
      </header>

      <section className={styles.hero}>
        <div>
          <h1>Welcome to Our Platform</h1>
          <p>Connect, share, and explore with others.</p>
        </div>
      </section>

      <section id="features" className={styles.features}>
        <div className={styles.feature}>
          <h2 className={styles.featureHeading}> 1</h2>
          <p className={styles.featureDescribe}>Register, ( No real data need )</p>
        </div>
        <div className={styles.feature}>
          <h2 className={styles.featureHeading}> 2</h2>
          <p className={styles.featureDescribe}>Log In</p>
        </div>
        <div className={styles.feature}>
          <h2 className={styles.featureHeading}> 3</h2>
          <p className={styles.featureDescribe}>
            View Profiles Add fake users and enjoy ^^
          </p>
        </div>
      </section>
      <div className={styles.message}>
        <h5>Let's Go</h5>
        <img
          src="/src/assets/undraw_fun-arrow.svg"
          className={styles.arrowIcon}
          alt="arrow"
        />
      </div>
    </div>
  );
}

export default WelcomePage;
