import { LoginPage, RegisterPage } from "@/page";
import { Routes, Route } from "react-router-dom";

export default function LoggedOutRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
