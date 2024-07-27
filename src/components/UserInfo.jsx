// import React from "react";
// import styles from "./UserInfo.module.css";
// import useQueryParams from "../Hooks/useQueryParams";
// import useFetch from "../Hooks/useFetch";
// import Spinner from "./UI/Spinner";
// import ErrorMessage from "./UI/ErrorMessage";

// const UserInfo = () => {
//   const id = useQueryParams("id");

//   const {
//     data: userData,
//     isLoading,
//     error,
//   } = useFetch(`http://dummyjson.com/users/${id}`);

//   // Handle loading state
//   if (isLoading) return <Spinner color="#f3f3f3" />;

//   // Handle error state
//   if (error) return <ErrorMessage message={error.message} />;

//   if (!isLoading && (!userData || userData.length === 0)) {
//     return <h1>User not found or first add as friend</h1>;
//   }
//   const { username, email, age, gender, role } = userData;

//   return (
//     <div className={styles.additionalInfo}>
//       <div className={styles.userInfo}>
//         <div className={styles.userInfoItem}>
//           <span className={styles.label}>Username:</span>
//           <span className={styles.value}>{username}</span>
//         </div>
//         <div className={styles.userInfoItem}>
//           <span className={styles.label}>Email:</span>
//           <span className={styles.value}>{email}</span>
//         </div>
//         <div className={styles.userInfoItem}>
//           <span className={styles.label}>Age:</span>
//           <span className={styles.value}>{age}</span>
//         </div>
//         <div className={styles.userInfoItem}>
//           <span className={styles.label}>Gender:</span>
//           <span className={styles.value}>{gender}</span>
//         </div>
//         <div className={styles.userInfoItem}>
//           <span className={styles.label}>Role:</span>
//           <span className={styles.value}>{role}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserInfo;

import React, { useEffect, useState } from "react";
import styles from "./UserInfo.module.css";
import useQueryParams from "../hooks/useQueryParams";
import useFetch from "../hooks/useFetch";
import Spinner from "./UI/Spinner";
import ErrorMessage from "./UI/ErrorMessage";
// /user/profile//posts
const UserInfo = () => {
  const id = useQueryParams("id");

  const {
    data: userData,
    isLoading,
    error,
  } = useFetch(`http://dummyjson.com/users/${id}`);

  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setDataFetched(true);
    }
  }, [isLoading]);

  // Handle loading state
  if (isLoading) return <Spinner color="#f3f3f3" />;

  // Handle error state
  if (error) return <ErrorMessage message={error.message} />;

  // Handle case where user data is not found
  if (dataFetched && (!userData || userData.length === 0)) {
    return <h1>User not found or first add as friend</h1>;
  }

  // Ensure userData is defined before destructuring
  if (!userData) return null;

  const { username, email, age, gender, role } = userData;

  return (
    <div className={styles.additionalInfo}>
      <div className={styles.userInfo}>
        <div className={styles.userInfoItem}>
          <span className={styles.label}>Username:</span>
          <span className={styles.value}>{username}</span>
        </div>
        <div className={styles.userInfoItem}>
          <span className={styles.label}>Email:</span>
          <span className={styles.value}>{email}</span>
        </div>
        <div className={styles.userInfoItem}>
          <span className={styles.label}>Age:</span>
          <span className={styles.value}>{age}</span>
        </div>
        <div className={styles.userInfoItem}>
          <span className={styles.label}>Gender:</span>
          <span className={styles.value}>{gender}</span>
        </div>
        <div className={styles.userInfoItem}>
          <span className={styles.label}>Role:</span>
          <span className={styles.value}>{role}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
