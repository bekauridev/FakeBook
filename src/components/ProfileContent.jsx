import React from "react";
import styles from "./ProfileContent.module.css";
import ProfilePost from "./ProfilePost";

const ProfileContent = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

export default ProfileContent;
