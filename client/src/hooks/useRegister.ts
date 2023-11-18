import { z } from "zod";
import { useAppDispatch } from "./useRedux";
import { useState } from "react";
import myToast from "@/components/MyToast";
import { asyncUserRegister } from "@/states/users/action";
import { useNavigate } from "react-router-dom";

const registerSchema = z.object({
  name: z.string().min(3, { message: "Nama minimal 3 karakter" }),
  email: z.string().email({ message: "Email tidak valid" }),
  username: z.string().min(3, { message: "Username minimal 3 karakter" }),
  password: z.string().min(8, { message: "Password minimal 8 karakter" }),
  confirmPassword: z
    .string()
    .min(8, { message: "Password minimal 8 karakter" }),
});

type TUseRegister = [
  string,
  React.ChangeEventHandler<HTMLInputElement>,
  string,
  React.ChangeEventHandler<HTMLInputElement>,
  string,
  React.ChangeEventHandler<HTMLInputElement>,
  string,
  React.ChangeEventHandler<HTMLInputElement>,
  string,
  React.ChangeEventHandler<HTMLInputElement>,
  React.FormEventHandler<HTMLFormElement>,
];

function useRegister(defaultValue = ""): TUseRegister {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(defaultValue);
  const [email, setEmail] = useState(defaultValue);
  const [username, setUsername] = useState(defaultValue);
  const [password, setPassword] = useState(defaultValue);
  const [confirmPassword, setConfirmPassword] = useState(defaultValue);

  const onChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.currentTarget.value);
  };

  const onChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onChangeUsername: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUsername(e.currentTarget.value);
  };

  const onChangePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onChangeConfirmPassword: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setConfirmPassword(e.currentTarget.value);
  };

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    try {
      registerSchema.parse({
        name,
        email,
        username,
        password,
        confirmPassword,
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        err.errors.map((error) => {
          myToast.fire({
            icon: "error",
            title: error.message,
          });
        });
      }
      return;
    }

    if (password !== confirmPassword) {
      myToast.fire({
        icon: "error",
        title: "Password tidak sama",
      });
      return;
    }

    dispatch(asyncUserRegister(name, email, username, password, navigate));
  };

  return [
    name,
    onChangeName,
    email,
    onChangeEmail,
    username,
    onChangeUsername,
    password,
    onChangePassword,
    confirmPassword,
    onChangeConfirmPassword,
    onSubmitHandler,
  ];
}

export default useRegister;
