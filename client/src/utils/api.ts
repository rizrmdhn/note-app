import {
  TCreateNote,
  TCreateNoteResponse,
  TDeleteNoteResponse,
  TGetMeResponse,
  TGetNoteByIdResponse,
  TGetNoteResponse,
  TGetUserListResponse,
  TLoginResponse,
  TNote,
  TRegisterResponse,
  TRestoreDeletedNoteResponse,
  TUpdateAvatarResponse,
  TUpdateNoteResponse,
  TUpdateUserResponse,
  TUser,
} from "@/types";
import axios from "axios";

const baseUrl = "http://127.0.0.1:3333";

const localStorageKey = "__notes_app_token__";

const localStorageFunc = (() => {
  function setToken(token: string): void {
    return localStorage.setItem(localStorageKey, token);
  }

  function getToken(): string | null {
    return localStorage.getItem(localStorageKey);
  }

  function removeToken() {
    return localStorage.removeItem(localStorageKey);
  }

  return {
    setToken,
    getToken,
    removeToken,
  };
})();

const auth = (() => {
  async function login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<void> {
    const response = await axios.post(`${baseUrl}/login`, {
      email,
      password,
    });

    const { meta } = response.data as TLoginResponse;

    if (meta.message !== "Success") {
      throw new Error(meta.message);
    }

    const {
      data: { token },
    } = response.data as TLoginResponse;

    localStorageFunc.setToken(token);
  }

  async function register({
    name,
    email,
    username,
    password,
  }: {
    name: string;
    email: string;
    username: string;
    password: string;
  }): Promise<TUser> {
    const response = await axios.post(`${baseUrl}/register`, {
      name,
      email,
      username,
      password,
    });

    const { meta } = response.data as TRegisterResponse;

    if (meta.message !== "Success") {
      throw new Error(meta.message);
    }

    const { data } = response.data as TRegisterResponse;

    return data;
  }

  async function logout(): Promise<void> {
    localStorageFunc.removeToken();
  }

  return {
    login,
    register,
    logout,
  };
})();

const notes = (() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function _fetchWithAuth(url: string, options: any) {
    return axios(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${localStorageFunc.getToken()}`,
      },
    });
  }

  async function getNotes(): Promise<TNote[]> {
    const response = await _fetchWithAuth(`${baseUrl}/notes/all`, {
      method: "GET",
    });

    const { meta } = response.data as TGetNoteResponse;

    if (meta.message !== "Success") {
      throw new Error(meta.message);
    }

    const { data } = response.data as TGetNoteResponse;

    return data;
  }

  async function getDeletedNotes(): Promise<TNote[]> {
    const response = await _fetchWithAuth(`${baseUrl}/notes/deleted`, {
      method: "GET",
    });

    const { meta } = response.data as TGetNoteResponse;

    if (meta.message !== "Success") {
      throw new Error(meta.message);
    }

    const { data } = response.data as TGetNoteResponse;

    return data;
  }

  async function createNote({
    title,
    content,
    tags,
  }: {
    title: string;
    content: string;
    tags: string[];
  }): Promise<TCreateNote> {
    const response = await _fetchWithAuth(`${baseUrl}/notes`, {
      method: "POST",
      data: {
        title,
        content,
        tags,
      },
    });

    const { meta } = response.data as TCreateNoteResponse;

    if (meta.message !== "Success") {
      throw new Error(meta.message);
    }

    const { data } = response.data as TCreateNoteResponse;

    return data;
  }

  async function updateNote({
    id,
    title,
    content,
    tags,
    isPublic,
    isPrivate,
    isFriendOnly,
  }: {
    id: number;
    title: string;
    content: string;
    tags: string[];
    isPublic: boolean;
    isPrivate: boolean;
    isFriendOnly: boolean;
  }): Promise<TNote> {
    const response = await _fetchWithAuth(`${baseUrl}/notes/${id}`, {
      method: "PUT",
      data: {
        title,
        content,
        tags,
        is_public: isPublic,
        is_private: isPrivate,
        is_friend_only: isFriendOnly,
      },
    });

    const { meta } = response.data as TUpdateNoteResponse;

    if (meta.message !== "Success") {
      throw new Error(meta.message);
    }

    const { data } = response.data as TUpdateNoteResponse;

    return data;
  }

  async function deleteNote(id: number): Promise<TDeleteNoteResponse> {
    const response = await _fetchWithAuth(`${baseUrl}/notes/${id}`, {
      method: "DELETE",
    });

    const { meta } = response.data as TDeleteNoteResponse;

    if (meta.message !== "Success") {
      throw new Error(meta.message);
    }

    return response.data as TDeleteNoteResponse;
  }

  async function restoreDeletedNote(
    id: number,
  ): Promise<TRestoreDeletedNoteResponse> {
    const response = await _fetchWithAuth(`${baseUrl}/notes/${id}/restore`, {
      method: "PUT",
    });

    const { meta } = response.data as TRestoreDeletedNoteResponse;

    if (meta.message !== "Success") {
      throw new Error(meta.message);
    }

    return response.data as TRestoreDeletedNoteResponse;
  }

  async function getNoteById(id: number): Promise<TNote> {
    const response = await _fetchWithAuth(`${baseUrl}/notes?id=${id}`, {
      method: "GET",
    });

    const { meta } = response.data as TGetNoteByIdResponse;

    if (meta.message !== "Success") {
      throw new Error(meta.message);
    }

    const { data } = response.data as TGetNoteByIdResponse;

    return data;
  }

  async function getNoteBySlug(slug: string): Promise<TNote> {
    const response = await _fetchWithAuth(`${slug}`, {
      method: "GET",
    });

    const { meta } = response.data as TGetNoteByIdResponse;

    if (meta.message !== "Success") {
      throw new Error(meta.message);
    }

    const { data } = response.data as TGetNoteByIdResponse;

    return data;
  }

  return {
    getNotes,
    getDeletedNotes,
    createNote,
    updateNote,
    deleteNote,
    restoreDeletedNote,
    getNoteById,
    getNoteBySlug,
  };
})();

const user = (() => {
  async function getMe(): Promise<TUser> {
    const response = await axios.get(`${baseUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${localStorageFunc.getToken()}`,
      },
    });

    const { meta } = response.data as TGetMeResponse;

    if (meta.message !== "Success") {
      throw new Error(meta.message);
    }

    const { data } = response.data as TGetMeResponse;

    return data;
  }

  async function getUserList(): Promise<TUser[]> {
    const response = await axios.get(`${baseUrl}/users`, {
      headers: {
        Authorization: `Bearer ${localStorageFunc.getToken()}`,
      },
    });

    const { meta } = response.data as TGetUserListResponse;

    if (meta.message !== "Success") {
      throw new Error(meta.message);
    }

    const { data } = response.data as TGetUserListResponse;

    return data;
  }

  async function updateUser({
    name,
    email,

    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<TUser> {
    const response = await axios.put(
      `${baseUrl}/users/me`,
      {
        name,
        email,
        password,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorageFunc.getToken()}`,
        },
      },
    );

    const { meta } = response.data as TUpdateUserResponse;

    if (meta.message !== "Success") {
      throw new Error(meta.message);
    }

    const { data } = response.data as TUpdateUserResponse;

    return data;
  }

  async function updateAvatar(avatar: File): Promise<TUser> {
    const formData = new FormData();
    formData.append("avatar", avatar);

    const response = await axios.post(`${baseUrl}/users/me/avatar`, formData, {
      headers: {
        Authorization: `Bearer ${localStorageFunc.getToken()}`,
      },
    });

    const { meta } = response.data as TUpdateAvatarResponse;

    if (meta.message !== "Created" || meta.status !== 201) {
      throw new Error(meta.message);
    }

    const { data } = response.data as TUpdateAvatarResponse;

    return data;
  }

  return {
    getMe,
    getUserList,
    updateUser,
    updateAvatar,
  };
})();

export { auth, notes, user };
