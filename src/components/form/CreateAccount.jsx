// import React, { useState } from "react";
// import styles from "./CreateAccount.module.css";
// import ErrorMessage from "../UI/ErrorMessage";
// import { Link, useNavigate } from "react-router-dom";
// // import Button from "../UI/Button";
// // import Button from "@mui/material/Button";
// import Button from "../UI/Button";
// function CreateAccount() {
//   const navigate = useNavigate();
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [formData, setFormData] = useState({
//     name: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetchData();
//   };

//   const fetchData = async () => {
//     setIsLoading(true);
//     setError("");
//     try {
//       const res = await fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           id: crypto.randomUUID(),
//           image: "/src/assets/profile-pic.webp",
//           ...formData,
//         }),
//       });

//       if (!res.ok) {
//         throw new Error("Network response was not ok");
//       }

//       // Navigate to suggestions if registration is successful
//       navigate("/login", { replace: true });

//       console.log("User registered successfully");
//     } catch (error) {
//       setError(error.message);
//       console.error("Error fetching data:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (error) return <ErrorMessage message={error} />;

//   return (
//     <form
//       style={{ opacity: isLoading ? "0.5" : "1" }}
//       className={styles.registrationForm}
//       onSubmit={handleSubmit}
//     >
//       <div className={styles.formGroup}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label htmlFor="lastName">Last Name:</label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label htmlFor="phoneNumber">Phone Number:</label>
//         <input
//           type="tel"
//           id="phoneNumber"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label htmlFor="password">password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className={styles.row}>
//         <Link className={styles.goBackBtn} to="/">
//           Go Back
//         </Link>
//         <Button disabled={isLoading} type="submit" className={styles.submitButton}>
//           {isLoading ? "Loading..." : "Register"}
//         </Button>
//       </div>
//     </form>
//   );
// }

// export default CreateAccount;

// !@11111111111111111111111111111
// import React, { useState, useEffect } from "react";
// import styles from "./CreateAccount.module.css";
// import ErrorMessage from "../UI/ErrorMessage";
// import { Link, useNavigate } from "react-router-dom";
// import useFetch from "../../Hooks/useFetch";
// import Spinner from "../UI/Spinner";

// function CreateAccount() {
//   const navigate = useNavigate();
//   const [postIsLoading, setPostIsLoading] = useState(false);
//   const [postError, setPostError] = useState("");

//   const [existingUser, setExistingUser] = useState(null); // Track existing user

//   const [formData, setFormData] = useState({
//     name: "",
//     lastName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (existingUser) {
//       setPostError("User with the same details already exists.");
//       return;
//     }

//     PostData();
//   };

//   const {
//     data,
//     isLoading: fetchisLoading,
//     error: fetchError,
//   } = useFetch("http://localhost:3000/login");

//   const checkExistingUser = () => {
//     try {
//       if (data && data.length > 0) {
//         const foundUser = data.find(
//           (user) =>
//             user.name === formData.name &&
//             user.lastName === formData.lastName &&
//             user.email === formData.email &&
//             user.phoneNumber === formData.phoneNumber
//         );

//         if (foundUser) {
//           setExistingUser(foundUser);
//         } else {
//           setExistingUser(null);
//         }
//       }

//       if (postError) {
//         throw new Error(postError.message);
//       }
//     } catch (error) {
//       setPostError(error.message);
//       console.error("Error fetching existing user data:", error);
//     }
//   };
//   const PostData = async () => {
//     setPostIsLoading(true);
//     setPostError("");

//     try {
//       const res = await fetch("http://localhost:3000/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           id: crypto.randomUUID(),
//           image: "/src/assets/profile-pic.webp",
//           ...formData,
//         }),
//       });

//       if (!res.ok) {
//         throw new Error("Network response was not ok");
//       }

//       navigate("/login", { replace: true }); // Navigate to login if registration is successful
//     } catch (error) {
//       setPostError(error.message);
//       console.error("Error posting data:", error);
//     } finally {
//       setPostIsLoading(false);
//     }
//   };

//   // if (error) return <ErrorMessage message={error} />;
//   if (postIsLoading || fetchisLoading) return <Spinner color="#fff" />;
//   if (fetchError) return <ErrorMessage message={fetchError} />;
//   if (postError) return <ErrorMessage message={postError} />;

//   return (
//     <form
//       style={{ opacity: postIsLoading ? "0.5" : "1" }}
//       className={styles.registrationForm}
//       onSubmit={handleSubmit}
//     >
//       <div className={styles.formGroup}>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label htmlFor="lastName">Last Name:</label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label htmlFor="phoneNumber">Phone Number:</label>
//         <input
//           type="tel"
//           id="phoneNumber"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className={styles.formGroup}>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <button disabled={postIsLoading} type="submit" className={styles.submitButton}>
//         {postIsLoading ? "Loading..." : "Register"}
//       </button>
//       <Link className={styles.submitButton} to="/">
//         Go Back
//       </Link>
//     </form>
//   );
// }

// export default CreateAccount;
