import myToast from "@/components/MyToast";
import { asyncUpdateUser } from "@/states/users/action";
import { AnyAction } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { z } from "zod";

const schema = z.object({
  nama: z.string({ invalid_type_error: "Nama harus berupa string!" }),
  email: z.string({ invalid_type_error: "Email harus berupa string!" }).email({
    message: "Email tidak valid!",
  }),
  password: z
    .string({
      invalid_type_error: "Password harus berupa string!",
    })
    .min(8, { message: "Password minimal 8 karakter!" }),
});

type TUseUpdateUserData = [
  string,
  React.ChangeEventHandler<HTMLInputElement>,
  string,
  React.ChangeEventHandler<HTMLInputElement>,
  string,
  React.ChangeEventHandler<HTMLInputElement>,
  React.FormEventHandler<HTMLFormElement>,
];

function useUpdateUserData(defaultValue = ""): TUseUpdateUserData {
  const dispatch = useDispatch();

  const [nama, setNama] = useState(defaultValue);
  const [email, setEmail] = useState(defaultValue);
  const [password, setPassword] = useState(defaultValue);

  const onChangeNama: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setNama(e.target.value);
  };

  const onChangeEmail: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    try {
      schema.parse({
        nama,
        email,
        password,
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.map((error) => {
          myToast.fire({
            icon: "error",
            title: error.message,
          });
        });
      }
      return;
    }

    dispatch(asyncUpdateUser(nama, email, password) as AnyAction);
  };

  return [
    nama,
    onChangeNama,
    email,
    onChangeEmail,
    password,
    onChangePassword,
    onSubmitHandler,
  ];
}

export default useUpdateUserData;
