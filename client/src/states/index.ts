import { AnyAction, ThunkDispatch, configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import isLoadingReducer from "./isLoading/reducer";
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";
import notesReducer from "./notes/reducer";
import detailNoteReducer from "./detailNote/reducer";
import isEditingNoteReducer from "./isEditingNote/reducer";
import userListReducer from "./userList/reducer";
import friendListReducer from "./friendsList/reducer";
import friendRequestReducer from "./friendRequest/reducer";
import thunk from "redux-thunk";
import friendSentReducer from "./friendSentList/reducer";

export const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isLoading: isLoadingReducer,
    isPreload: isPreloadReducer,
    notes: notesReducer,
    detailNote: detailNoteReducer,
    isEditingNote: isEditingNoteReducer,
    userList: userListReducer,
    friendList: friendListReducer,
    friendRequestList: friendRequestReducer,
    friendSentList: friendSentReducer,
    loadingBar: loadingBarReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export type AppGetState = typeof store.getState;
