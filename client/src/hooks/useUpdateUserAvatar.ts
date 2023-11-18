import myToast from "@/components/MyToast";
import { asyncUpdateUserAvatar } from "@/states/users/action";
import { useAppDispatch } from "./useRedux";

type TUseUpdateUserAvatar = [(e: React.ChangeEvent<HTMLInputElement>) => void];

function useUpdateUserAvatar(): TUseUpdateUserAvatar {
  const dispatch = useAppDispatch();

  function handleAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) {
      myToast.fire({
        icon: "error",
        title: "Please select an image",
      });
      return;
    }

    if (file.size > 2048 * 1024) {
      myToast.fire({
        icon: "error",
        title: "Image size must be less than 2MB",
      });
      return;
    }

    if (!file.type.includes("image")) {
      myToast.fire({
        icon: "error",
        title: "Please select an image",
      });
      return;
    }

    dispatch(asyncUpdateUserAvatar(file));
  }

  return [handleAvatarChange];
}

export default useUpdateUserAvatar;
