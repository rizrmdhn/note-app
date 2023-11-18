import { useAppDispatch } from "@/hooks/useRedux";
import {
  AboutUsPage,
  ContactUsPage,
  UserListPage,
  HomePage,
  NotFoundPage,
  NotePage,
  ProfilePage,
  FriendPage,
  FriendRequestPage,
  FriendRequestSentPage,
} from "@/page";
import { asyncGetNotes } from "@/states/notes/action";
import { asyncGetFriends } from "@/states/shared/action";
import { asyncGetUserList } from "@/states/userList/action";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

export default function LoggedInRoutes() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncGetNotes());
    dispatch(asyncGetUserList());
    dispatch(asyncGetFriends());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/note" element={<NotePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/contact-us" element={<ContactUsPage />} />
      <Route path="/friends" element={<FriendPage />} />
      <Route path="/friends/user-list" element={<UserListPage />} />
      <Route path="/friends/request" element={<FriendRequestPage />} />
      <Route path="/friends/request-sent" element={<FriendRequestSentPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
