import React from "react";
import myToast from "@/components/MyToast";
import { asyncSetAuthUser } from "@/states/authUser/action";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from "@reduxjs/toolkit";

type FormEventHandlers = [
  string,
  React.ChangeEventHandler<HTMLInputElement>,
  string,
  React.ChangeEventHandler<HTMLInputElement>,
  React.FormEventHandler<HTMLFormElement>,
];

function useLogin(defaultValue = ""): FormEventHandlers {
  const disptach = useDispatch();

  const [email, setEmail] = useState(defaultValue);
  const [password, setPassword] = useState(defaultValue);

  const onChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ): void => {
    setEmail(event.target.value);
  };

  const onChangePassword: React.ChangeEventHandler<HTMLInputElement> = (
    event,
  ): void => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (
    event,
  ): void => {
    event.preventDefault();

    if (!email || !password) {
      myToast.fire({
        icon: "error",
        title: "Silahkan isi username dan password!",
      });
      return;
    }

    disptach(asyncSetAuthUser({ email, password }) as AnyAction);
  };

  return [email, onChangeEmail, password, onChangePassword, onSubmitHandler];
}

export default useLogin;
