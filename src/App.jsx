// App.js
import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Profile from "./pages/Profile";
import UserInfo from "./components/UserInfo";
import NotFoundPage from "./pages/NotFoundPage";
import UnauthorizedPage from "./pages/UnauthorizedPage";
import ProfilePostList from "./components/ProfilePostList";
import RegistrationPage from "./pages/RegistrationPage";

import LogInPage from "./pages/LogInPage";
import WelcomePage from "./pages/WelcomePage";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import UsersList from "./components/UsersList";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route path="login" element={<LogInPage />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="user/profile" element={<Profile />}>
              <Route index element={<div>Hi, Welcome</div>} />
              <Route path="about" element={<UserInfo />} />
              <Route path="posts" element={<ProfilePostList />} />
              <Route path="suggestions" element={<UsersList />} />
            </Route>
          </Route>

          <Route path="private" element={<UnauthorizedPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
