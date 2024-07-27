import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFriendManagement from "../hooks/useFriendManagement";
import { useAuth } from "../contexts/authContext";
import styles from "./User.module.css";
import ButtonReuse from "./UI/ButtonReuse";
import { theme } from "../styles/theme";

function User({ user }) {
  const { user: loggedInUser } = useAuth();
  const { isFriend, isLoading, handleAddFriend, handleDeleteFriend } =
    useFriendManagement(user.id, loggedInUser.id);
  const [isOpen, setIsOpen] = useState(false);

  const handleMoreOptionClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.card} onClick={handleMoreOptionClick}>
        <div className={styles.header}>
          <img className={styles.image} src={user.image} alt={user.name} />
          <div className={styles.userInfo}>
            <p className={styles.userName}>
              {user.firstName} {user.lastName}
            </p>
            <p className={styles.username}>@{user.username}</p>
            <p className={styles.phone}>{user.phone}</p>
            <p className={styles.email}>{user.email}</p>
          </div>
        </div>
        <div className={styles.details}>
          <div className={styles.detail}>
            <p className={styles.label}>Age:</p>
            <p className={styles.value}>{user.age}</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.label}>Gender:</p>
            <p className={styles.value}>{user.gender}</p>
          </div>

          <div className={styles.detail}>
            <p className={styles.label}>Status:</p>
            <p className={styles.value}>{isFriend ? "Friend" : "Unknown"}</p>
          </div>
        </div>
        {!isFriend && (
          <ButtonReuse
            // className={`${styles.btn} ${styles.seeMoreBtn}`}
            variant="Primary"
            disabled={isLoading}
            onClick={(e) => {
              e.stopPropagation();
              handleAddFriend();
            }}
          >
            {isLoading ? "Adding..." : "Add as friend"}
          </ButtonReuse>
        )}
        {isFriend && (
          <ButtonReuse
            variant="Primary"
            disabled={isLoading}
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteFriend();
            }}
          >
            {isLoading ? "Deleting..." : "Delete friend"}
          </ButtonReuse>
        )}
        <div className={styles.seeMore}>
          <img src="/src/assets/more.png" alt="arrow" />
        </div>
        <ButtonReuse variant="secondary">
          <Link
            // className={`${styles.btn} ${styles.viewProfileBtn}`}
            to={`/user/profile?id=${user.id}`}
          >
            View Profile
          </Link>
        </ButtonReuse>
      </div>
      {isOpen && (
        <ul className={styles.moreDetails}>
          <li>
            <ButtonReuse variant="danger">Delete suggestion</ButtonReuse>
          </li>
        </ul>
      )}
    </>
  );
}

export default User;
