// import React, { createContext, useContext } from "react";
// import useFetch from "../Hooks/useFetch";

// const FriendsContext = createContext();

// const FriendsContextProvider = ({ children }) => {
//   // Fetch users from Local Host server
//   const {
//     data: friendsData,
//     isLoading: friendsLoading,
//     error: friendsError,
//   } = useFetch("http://localhost:3000/users");

//   // Calculate friendsIds after friendsData is loaded
//   const friendsIds = friendsData ? friendsData.map((friend) => friend.userId) : [];

//   return (
//     <FriendsContext.Provider value={{ friendsLoading, friendsError, friendsIds }}>
//       {children}
//     </FriendsContext.Provider>
//   );
// };

// function useFriendsContext() {
//   const context = useContext(FriendsContext);
//   if (context === undefined) {
//     throw new Error("useFriendsContext must be used within a FriendsContextProvider");
//   }
//   return context;
// }

// export { FriendsContextProvider, useFriendsContext };
