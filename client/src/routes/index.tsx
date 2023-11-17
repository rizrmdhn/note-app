import useSelectState from "@/hooks/useSelectState";
import LoggedInRoutes from "./LoggedInRoutes";
import LoggedOutRoutes from "./LoggedOutRoutes";

export default function Routes() {
  const authUser = useSelectState("authUser");

  if (authUser) {
    return <LoggedInRoutes />;
  } else {
    return <LoggedOutRoutes />;
  }
}
