import { user } from "@/utils/api";
import { AppDispatch } from "..";
import { updateAuthUserActionCreator } from "../authUser/action";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import myToast from "@/components/MyToast";
import { AxiosError } from "axios";
import { TErrorResponse } from "@/types";

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

function asyncUpdateUser(
  name: string,
  email: string,
  password: string,
): unknown {
  return async (dispatch: AppDispatch) => {
    dispatch(showLoading());
    try {
      const userData = await user.updateUser({ name, email, password });
      dispatch(updateAuthUserActionCreator(userData));

      myToast.fire({
        icon: "success",
        title: "User updated",
      });
    } catch (error) {
      const errorAxios = error as AxiosError<TErrorResponse>;
      const customMessage = errorAxios.response?.data.errors;
      const customMessageData = errorAxios.response?.data.data;

      if (Array.isArray(customMessage)) {
        customMessage.map((message) => {
          myToast.fire({
            icon: "error",
            title: message.message,
          });
        });

        return;
      }

      if (customMessageData) {
        myToast.fire({
          icon: "error",
          title: customMessageData.message,
        });

        return;
      }

      myToast.fire({
        icon: "error",
        title: "Error updating user",
      });
    }
    dispatch(hideLoading());
  };
}

export { asyncUpdateUserAvatar, asyncUpdateUser };
