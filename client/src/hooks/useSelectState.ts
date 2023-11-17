import { useSelector } from "react-redux";
import myToast from "@/components/MyToast";
import { RootState } from "@/states";
import { TAuthUserState } from "@/states/authUser/reducer";
import { TIsLoadingState } from "@/states/isLoading/reducer";
import { TIsPreloadState } from "@/states/isPreload/reducer";

function useSelectState(state: string) {
  const authUser = useSelector<RootState, TAuthUserState>(
    (state) => state.authUser,
  );
  const isLoading = useSelector<RootState, TIsLoadingState>(
    (state) => state.isLoading,
  );
  const isPreload = useSelector<RootState, TIsPreloadState>(
    (state) => state.isPreload,
  );

  switch (state) {
    case "authUser":
      return authUser;
    case "isLoading":
      return isLoading;
    case "isPreload":
      return isPreload;
    default:
      myToast.fire({
        icon: "error",
        title: "Invalid state name",
      });
      return null;
  }
}

export default useSelectState;
