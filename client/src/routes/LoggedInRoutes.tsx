import {
  AboutUsPage,
  ContactUsPage,
  FriendPage,
  HomePage,
  NotFoundPage,
  NotePage,
  ProfilePage,
} from "@/page";
import { Routes, Route } from "react-router-dom";

export default function LoggedInRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/note" element={<NotePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/friends" element={<FriendPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
