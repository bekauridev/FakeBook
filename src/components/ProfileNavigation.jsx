import React from "react";
import styles from "./ProfileNavigation.module.css";
import { Link } from "react-router-dom";
import useQueryParams from "/src/hooks/useQueryParams.jsx";
const ProfileNavigation = ({ isLoggedIn }) => {
  const id = useQueryParams("id");

  return (
    <div className={styles.navigation}>
      <ul>
        <Link to={`about?id=${id}`}>
          <li className={styles.navItem}>About</li>
        </Link>
        <Link to={`posts?id=${id}`}>
          <li className={styles.navItem}>Posts</li>
        </Link>

        {isLoggedIn && (
          <>
            <Link to="friends">
              <li className={styles.navItem}>Friends</li>
            </Link>
            <Link to={`suggestions?id=${id}`}>
              <li className={styles.navItem}>Find Friends</li>
            </Link>
          </>
        )}
      </ul>
    </div>
  );
};

export default ProfileNavigation;
