import { useSelector } from "react-redux";
import myToast from "@/components/MyToast";
import { RootState } from "@/states";
import { TAuthUserState } from "@/states/authUser/reducer";
import { TIsLoadingState } from "@/states/isLoading/reducer";

function useSelectState(state: string) {
  const authUser = useSelector<RootState, TAuthUserState>(
    (state) => state.authUser,
  );
  const isLoading = useSelector<RootState, TIsLoadingState>(
    (state) => state.isLoading,
  );

  switch (state) {
    case "authUser":
      return authUser;
    case "isLoading":
      return isLoading;
    default:
      myToast.fire({
        icon: "error",
        title: "Invalid state name",
      });
      return null;
  }
}

export default useSelectState;
