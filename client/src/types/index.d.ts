export type TError = {
  rule: string;
  field: string;
  message: string;
};

export type TErrorData = {
  message: string;
};

export type TErrorResponse = {
  meta: {
    status: number;
    message: string;
  };
  errors: TError[] | TErrorData | undefined;
};

export type TMeta = {
  status: number;
  message: string;
};

export type TNote = {
  id: number;
  title: string;
  content: string;
  slug: string;
  tags: string[];
  owner_id: number;
  folder_id: number;
  is_friend_only: boolean;
  is_public: boolean;
  is_private: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  is_deleted: boolean;
};

export type TToken = {
  type: string;
  token: string;
};

export type TLoginResponse = {
  meta: TMeta;
  data: TToken;
};

export type TRegisterResponse = {
  meta: TMeta;
  data: {
    id: number;
    name: string;
    email: string;
    username: string;
    avatar: string;
    created_at: string;
    updated_at: string;
  };
};

export type TGetNoteResponse = {
  meta: TMeta;
  data: TNote[];
};

export type TCreateNote = {
  id: number;
  title: string;
  content: string;
  slug: string;
  tags: string[];
  owner_id: number;
  folder_id: number;
  is_friend_only: boolean;
  is_public: boolean;
  is_private: boolean;
  created_at: string;
  updated_at: string;
};

export type TCreateNoteResponse = {
  meta: TMeta;
  data: {
    id: number;
    title: string;
    content: string;
    slug: string;
    tags: string[];
    owner_id: number;
    folder_id: number;
    is_friend_only: boolean;
    is_public: boolean;
    is_private: boolean;
    created_at: string;
    updated_at: string;
  };
};

export type TUpdateNoteResponse = {
  meta: TMeta;
  data: TNote;
};

export type TDeleteNoteResponse = {
  meta: TMeta;
};

export type TRestoreDeletedNoteResponse = {
  meta: TMeta;
};

export type TGetNoteByIdResponse = {
  meta: TMeta;
  data: TNote;
};

export type TGetNoteBySlugResponse = {
  meta: TMeta;
  data: TNote;
};

export type TCategories = {
  id: number;
  name: string;
  owner_id: number;
  is_public: boolean;
  is_private: boolean;
  is_friend_only: boolean;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string;
};

export type TGetCategoriesResponse = {
  meta: TMeta;
  data: TCategories[];
};

export type TCreateCategoriesResponse = {
  meta: TMeta;
  data: TCategories;
};

export type TGetCategoryByIdResponse = {
  meta: TMeta;
  data: TCategories;
};

export type TUpdateCategoriesResponse = {
  meta: TMeta;
  data: TCategories;
};

export type TDeleteCategoriesResponse = {
  meta: TMeta;
};

export type TGetDeletedCategoriesResponse = {
  meta: TMeta;
  data: TCategories[];
};

export type TRestoreDeletedCategoriesResponse = {
  meta: TMeta;
};

export type TBulkDeleteCategoriesResponse = {
  meta: TMeta;
};

export type TPermanentDeleteCategoriesResponse = {
  meta: TMeta;
};

export type TFolder = {
  id: number;
  name: string;
  owner_id: number;
  is_public: boolean;
  is_private: boolean;
  is_friend_only: boolean;
  is_deleted: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string;
};

export type TGetFoldersResponse = {
  meta: TMeta;
  data: TFolder[];
};

export type TGetDeletedFoldersResponse = {
  meta: TMeta;
  data: TFolder[];
};

export type TCreateFolderResponse = {
  meta: TMeta;
  data: TFolder;
};

export type TGetFolderByIdResponse = {
  meta: TMeta;
  data: TFolder;
};

export type TUpdateFolderResponse = {
  meta: TMeta;
  data: TFolder;
};

export type TDeleteFolderResponse = {
  meta: TMeta;
};

export type TRestoreDeletedFolderResponse = {
  meta: TMeta;
};

export type TFriendList = {
  friend_id: number;
  friend_username: string;
  friend_email: string;
};

export type TFriendRequestOrSent = {
  id: number;
  username: string;
  email: string;
};

export type TGetFriendResponse = {
  meta: TMeta;
  data: {
    friendList: TFriendList[];
    friendRequestList: TFriendRequestOrSent[];
    friendSentList: TFriendRequestOrSent[];
  };
};

export type TSentFriendRequestResponse = {
  meta: TMeta;
  data: {
    id: number;
    sender_id: number;
    receiver_id: number;
    created_at: string;
  };
};

export type TAcceptFriendRequestResponse = {
  meta: TMeta;
  data: {
    id: number;
    user_id: number;
    friend_id: number;
    created_at: string;
  };
};

export type TRejectFriendRequestResponse = {
  meta: TMeta;
};

export type TCancleFriendRequestResponse = {
  meta: TMeta;
};

export type TDeleteFriendResponse = {
  meta: TMeta;
};

export type TUser = {
  id: number;
  name: string;
  email: string;
  username: string;
  avatar: string;
  remember_me_token?: string;
  created_at: string;
  updated_at: string;
};

export type TGetMeResponse = {
  meta: TMeta;
  data: TUser;
};

export type TGetUserListResponse = {
  meta: TMeta;
  data: TUser[];
};

export type TUpdateAvatarResponse = {
  meta: TMeta;
  data: TUser;
};
