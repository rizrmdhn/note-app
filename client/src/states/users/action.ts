import { user } from "@/utils/api";
import { AppDispatch } from "..";
import { updateAuthUserActionCreator } from "../authUser/action";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import myToast from "@/components/MyToast";

function asyncUpdateUserAvatar(foto: File): unknown {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading());
    try {
      const userData = await user.updateAvatar(foto);
      dispatch(updateAuthUserActionCreator(userData));

      myToast.fire({
        icon: "success",
        title: "User avatar updated",
      });
    } catch (error) {
      myToast.fire({
        icon: "error",
        title: "Error updating user avatar",
      });
    }
    dispatch(hideLoading());
  };
}

export { asyncUpdateUserAvatar };
