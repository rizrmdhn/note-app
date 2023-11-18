import useSelectState from "./hooks/useSelectState";
import Routes from "./routes";
import { useEffect } from "react";
import { asyncSetIsPreload } from "./states/isPreload/action";
import { asyncGetNotes } from "./states/notes/action";
import { asyncGetUserList } from "./states/userList/action";
import { asyncGetFriends } from "./states/shared/action";
import { useAppDispatch } from "./hooks/useRedux";

function App() {
  const isPreload = useSelectState("isPreload");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncSetIsPreload());
    dispatch(asyncGetNotes());
    dispatch(asyncGetUserList());
    dispatch(asyncGetFriends());
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
