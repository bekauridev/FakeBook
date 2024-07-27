import { createContext, useContext, useReducer } from "react";
import { BASE_URL } from "../config/API";

const AuthContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isAuthenticated: !!localStorage.getItem("user"),
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "login_start":
      return { ...state, loading: true, error: null };
    case "login_success":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        loading: false,
      };
    case "login_failure":
      return { ...state, loading: false, error: action.payload.error };
    case "logout":
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null,
      };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  async function login(username, password) {
    dispatch({ type: "login_start" });
    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          expiresInMins: 30, // optional
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        dispatch({
          type: "login_failure",
          payload: { error: "Invalid email or password" },
        });
        return;
      }

      const { token } = data;
      console.log(data);
      await getUser(token);
    } catch (error) {
      dispatch({ type: "login_failure", payload: { error: "Login failed" } });
      console.error("Login failed", error);
    }
  }

  async function getUser(token) {
    try {
      const response = await fetch(`${BASE_URL}/auth/me`, {
        method: "GET",
        headers: {
          Authorization: token,
        },
      });
      const user = await response.json();
      if (!response.ok) throw new Error("Problem getting user");
      console.log(user);
      dispatch({ type: "login_success", payload: { user } });
    } catch (error) {
      dispatch({ type: "login_failure", payload: { error: "Failed to get user" } });
    }
  }

  async function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loading, error, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthContext was used outside AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
