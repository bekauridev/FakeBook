import React from "react";
import styles from "./ProfileHeader.module.css";
import { useAuth } from "../contexts/authContext";
import ButtonReuse from "./UI/ButtonReuse";
import useFriendManagement from "../hooks/useFriendManagement";
const ProfileHeader = ({ userData, isLoggedIn }) => {
  const { user: loggedInUser, logout } = useAuth();
  if (!userData) throw new Error("In ProfileHeader userData is not defined");

  const { isFriend, isLoading, handleAddFriend, handleDeleteFriend } =
    useFriendManagement(userData.id, loggedInUser.id);

  const { image, name, lastName } = userData;
  return (
    <div className={styles.header}>
      <div className={styles.coverPhoto}></div>
      <div className={`${styles.profileInfo} ${styles.row}`}>
        <img className={styles.profilePicture} src={image} alt="Profile" />
        <div className={styles.userInfo}>
          <h1 className={styles.lastName}>{name}</h1>
          <p className={styles.nickname}>@{lastName}</p>
        </div>
        <div className={styles.row}>
          {isLoggedIn && (
            <>
              <ButtonReuse className={`${styles.addPostBtn} ${styles.profileBtn}`}>
                Add Post
              </ButtonReuse>
              <ButtonReuse
                onClick={logout}
                className={`${styles.profileBtn} ${styles.profileBtn}`}
              >
                Log Out
              </ButtonReuse>
            </>
          )}
          {!isLoggedIn && (
            <>
              {!isFriend && (
                <ButtonReuse
                  className={`${styles.btn} ${styles.seeMoreBtn}`}
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
                  className={`${styles.btn} ${styles.seeMoreBtn}`}
                  disabled={isLoading}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteFriend();
                  }}
                >
                  {isLoading ? "Deleting..." : "Delete friend"}
                </ButtonReuse>
              )}
              <ButtonReuse
                onClick={logout}
                className={`${styles.profileBtn} ${styles.profileBtn}`}
              >
                Message
              </ButtonReuse>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

// import React from "react";
// import styles from "./ProfileHeader.module.css";

// const ProfileHeader = ({ userData }) => {
//   if (!userData) return null;

//   const { image, firstName, username } = userData;

//   return (
//     <div className={styles.header}>
//       <div className={styles.coverPhoto}></div>
//       <div className={styles.profileInfo}>
//         <img className={styles.profilePicture} src={image} alt="Profile" />
//         <div className={styles.userInfo}>
//           <h1 className={styles.userName}>{firstName}</h1>
//           <p className={styles.nickname}>@{username}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileHeader;

// <>
//   <Button className={`${styles.profileBtn} ${styles.profileBtn}`}>
//     Add as friend
//   </Button>
//   <Button className={`${styles.profileBtn} ${styles.profileBtn}`}>
//     Message
//   </Button>
// </>
