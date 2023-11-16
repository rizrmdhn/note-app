import { AboutUsPage, HomePage, NotFoundPage, ProfilePage } from "@/page";
import { Routes, Route } from "react-router-dom";

export default function LoggedInRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
