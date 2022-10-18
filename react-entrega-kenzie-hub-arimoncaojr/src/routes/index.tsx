import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
export const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};
