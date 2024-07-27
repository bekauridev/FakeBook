// import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import styles from "./Profile.module.css";

// import ProfileHeader from "../components/ProfileHeader";
// import ProfileNavigation from "../components/ProfileNavigation";
// import PrivatePage from "./PrivatePage";
// import useQueryParams from "../Hooks/useQueryParams";
// import useFetch from "../Hooks/useFetch";
// import Spinner from "../components/UI/Spinner";
// import ErrorMessage from "../components/UI/ErrorMessage";

// function Profile() {
//   console.log("Profile component rendered");

//   const id = useQueryParams("id");

//   const {
//     data: friendData,
//     isLoading: friendIsLoading,
//     error: friendError,
//   } = useFetch(`http://localhost:3000/users?userId=${id}`);

//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     if (friendData && friendData.length > 0) {
//       setUserId(friendData[0].userId);
//     }
//   }, [friendData]);

//   const {
//     data: userData,
//     isLoading: userIsLoading,
//     error: userError,
//   } = useFetch(userId ? `http://dummyjson.com/users/${userId}` : null);

//   if (friendIsLoading || userIsLoading) return <Spinner color="#fff" />;
//   if (friendError) return <ErrorMessage message={friendError.message} />;
//   if (userError) return <ErrorMessage message={userError.message} />;

//   return (
//     <div>
//       {!userId && friendData && friendData.length === 0 && <PrivatePage />}
//       {userData && (
//         <div className={styles.profileContainer}>
//           <ProfileHeader userData={userData} />
//           <ProfileNavigation />
//           <Outlet />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Profile;

// !!!!!!!!!!!!!!!!!
// import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import styles from "./Profile.module.css";

// import ProfileHeader from "../components/ProfileHeader";
// import ProfileNavigation from "../components/ProfileNavigation";
// import useQueryParams from "../Hooks/useQueryParams";
// import useFetch from "../Hooks/useFetch";
// import Spinner from "../components/UI/Spinner";
// import ErrorMessage from "../components/UI/ErrorMessage";
// import { useAuth } from "../contexts/authContext";

// function Profile() {
//   // აქ პრობლემაა კი მუშაობს რა ორივე პროფილზე ადმინზეც და ისეც მაგრამ დისფლეისას ის უნდა გადაამოწმო
//   // ადმინი ავტორიზებული არის თუ არა ანუ (დალოგინებული) და ისე მომხმარებელი არის თუ არა იუზერი
//   const [BASE_URL, setBASE_URL] = useState("");
//   const { isAuthenticated } = useAuth();
//   console.log(isAuthenticated);
//   const id = useQueryParams("id");

//   useEffect(() => {
//     if (isAdmin) {
//       setBASE_URL("http://localhost:3000/users");
//     } else {
//       setBASE_URL("http://dummyjson.com/users");
//     }
//   }, [isAdmin]);

//   const { data, isLoading, error } = useFetch(BASE_URL ? `${BASE_URL}/${id}` : null);

//   if (isLoading) return <Spinner color="#fff" />;
//   if (error) return <ErrorMessage message={error} />;
//   if (!data) return null;

//   return (
//     <div>
//       {data && (
//         <div className={styles.profileContainer}>
//           <ProfileHeader userData={data} />
//           <ProfileNavigation />
//           <Outlet />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Profile;

// !!!!!!!!!!!!!
// import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import styles from "./Profile.module.css";

// import ProfileHeader from "../components/ProfileHeader";
// import ProfileNavigation from "../components/ProfileNavigation";
// import useQueryParams from "../Hooks/useQueryParams";
// import useFetch from "../Hooks/useFetch";
// import Spinner from "../components/UI/Spinner";
// import ErrorMessage from "../components/UI/ErrorMessage";
// import { useAuth } from "../contexts/authContext";

// function Profile() {
//   // აქ პრობლემაა კი მუშაობს რა ორივე პროფილზე ადმინზეც და ისეც მაგრამ დისფლეისას ის უნდა გადაამოწმო
//   // ადმინი ავტორიზებული არის თუ არა ანუ (დალოგინებული) და ისე მომხმარებელი არის თუ არა იუზერი
//   const { user } = useAuth();
//   const [BASE_URL, setBASE_URL] = useState("http://dummyjson.com/users");
//   const id = useQueryParams("id");
//   const isAdmin = user?.isAdmin;

//   useEffect(() => {
//     // if (isAdmin) setBASE_URL("http://dummyjson.com/users");
//     // if (isAdmin === true) setBASE_URL("http://localhost:3000/users");
//     // if (isAdmin === false) setBASE_URL("http://dummyjson.com/users");
//   }, [isAdmin]);

//   console.log(user?.isAdmin);
//   console.log(BASE_URL);
//   const { data, isLoading, error } = useFetch(BASE_URL ? `${BASE_URL}/${id}` : null);

//   if (isLoading) return <Spinner color="#fff" />;
//   if (error) return <ErrorMessage message={error} />;
//   if (!data) return null;

//   return (
//     <div>
//       {data && (
//         <div className={styles.profileContainer}>
//           <ProfileHeader userData={data} />
//           <ProfileNavigation />
//           <Outlet />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Profile;
// !!!!!!!!!
// import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import styles from "./Profile.module.css";

// import ProfileHeader from "../components/ProfileHeader";
// import ProfileNavigation from "../components/ProfileNavigation";
// import useQueryParams from "../Hooks/useQueryParams";
// import useFetch from "../Hooks/useFetch";
// import Spinner from "../components/UI/Spinner";
// import ErrorMessage from "../components/UI/ErrorMessage";
// import { useAuth } from "../contexts/authContext";

// function Profile() {
//   const { user, isLoading: isAuthLoading } = useAuth();
//   const id = useQueryParams("id");
//   const [BASE_URL, setBASE_URL] = useState("");
//   console.log(user);
//   useEffect(() => {
//     // Only fetch data if user is available
//     if (user) {
//       setBASE_URL(
//         user.isAdmin ? "http://localhost:3000/users" : "http://dummyjson.com/users"
//       );
//     }
//   }, [user]);

//   const { data, isLoading, error } = useFetch(BASE_URL ? `${BASE_URL}/${id}` : null);

//   // Show a spinner while the authentication status is loading
//   if (isAuthLoading) return <Spinner color="#fff" />;

//   // Handle case where user data is not yet available
//   if (!user) return <ErrorMessage message="User not authenticated" />;

//   if (isLoading) return <Spinner color="#fff" />;
//   if (error) return <ErrorMessage message={error} />;
//   if (!data) return null;

//   return (
//     <div className={styles.profileContainer}>
//       <ProfileHeader userData={data} />
//       <ProfileNavigation />
//       <Outlet />
//     </div>
//   );
// }

// export default Profile;

import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./Profile.module.css";

import ProfileHeader from "../components/ProfileHeader";
import ProfileNavigation from "../components/ProfileNavigation";
import useQueryParams from "../hooks/useQueryParams";
import useFetch from "../hooks/useFetch";
import Spinner from "../components/UI/Spinner";
import ErrorMessage from "../components/UI/ErrorMessage";
import { useAuth } from "../contexts/authContext";
import UsersList from "../components/UsersList";
import ProfileContent from "../components/ProfileContent";
import { BASE_URL } from "../config/API";

function Profile() {
  const { user, loading: authLoading, error: authError } = useAuth();
  // const navigate = useNavigate();
  const id = useQueryParams("id");

  // Check if the user ID from context matches the ID from the query parameter
  const isLoggedIn = user && user.id === Number(id);
  // Fetch user data from the server if the user ID does not match
  const {
    data,
    loading: fetchLoading,
    error: fetchError,
  } = useFetch(isLoggedIn ? null : `${BASE_URL}/users/${id}`);

  // Determine the user data to display
  const displayUser = isLoggedIn ? user : data;

  if (authLoading || fetchLoading) return <Spinner color="#fff" />;
  if (authError || fetchError) return <ErrorMessage message={authError || fetchError} />;
  if (!displayUser) return null;

  return (
    <div className={styles.profileContainer}>
      <ProfileHeader userData={displayUser} isLoggedIn={isLoggedIn} />
      <ProfileNavigation isLoggedIn={isLoggedIn} />
      <ProfileContent>
        <Outlet />
      </ProfileContent>
    </div>
  );
}

export default Profile;
