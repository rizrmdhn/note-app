import useSelectState from "./hooks/useSelectState";
import Routes from "./routes";
import { useEffect } from "react";
import { asyncSetIsPreload } from "./states/isPreload/action";
import { useAppDispatch } from "./hooks/useRedux";

function App() {
  const isPreload = useSelectState("isPreload") as boolean;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncSetIsPreload());
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
