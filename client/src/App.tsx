import { useDispatch } from "react-redux";
import useSelectState from "./hooks/useSelectState";
import Routes from "./routes";
import { useEffect } from "react";
import { asyncSetIsPreload } from "./states/isPreload/action";
import { AnyAction } from "@reduxjs/toolkit";
import { asyncGetNotes } from "./states/notes/action";
import { asyncGetUserList } from "./states/userList/action";

function App() {
  const isPreload = useSelectState("isPreload");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncSetIsPreload() as AnyAction);
    dispatch(asyncGetNotes() as AnyAction);
    dispatch(asyncGetUserList() as AnyAction);
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  return (
    <>
      <Routes />
    </>
  );
}

export default App;
