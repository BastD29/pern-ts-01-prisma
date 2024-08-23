import {
  CREATE_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "../constants/actions";

type UserType = {
  id?: number;
  name: string;
};

type UserStateType = {
  users: UserType[] | null;
  loading: boolean;
  error: string | null;
};

// Fetch user actions

type FetchUsersRequestActionType = {
  type: typeof FETCH_USERS_REQUEST;
};

type FetchUsersSuccessActionType = {
  type: typeof FETCH_USERS_SUCCESS;
  payload: UserType[];
};

type FetchUsersFailureActionType = {
  type: typeof FETCH_USERS_FAILURE;
  payload: string;
};

// Create user actions
type CreateUserRequestActionType = {
  type: typeof CREATE_USER_REQUEST;
};

type CreateUserSuccessActionType = {
  type: typeof CREATE_USER_SUCCESS;
  payload: UserType;
};

type CreateUserFailureActionType = {
  type: typeof CREATE_USER_FAILURE;
  payload: string;
};

// Update user actions
type UpdateUserRequestActionType = {
  type: typeof UPDATE_USER_REQUEST;
};

type UpdateUserSuccessActionType = {
  type: typeof UPDATE_USER_SUCCESS;
  payload: UserType;
};

type UpdateUserFailureActionType = {
  type: typeof UPDATE_USER_FAILURE;
  payload: string;
};

// Delete User
type DeleteUserRequestActionType = {
  type: typeof DELETE_USER_REQUEST;
};

type DeleteUserSuccessActionType = {
  type: typeof DELETE_USER_SUCCESS;
  payload: string;
};

type DeleteUserFailureActionType = {
  type: typeof DELETE_USER_FAILURE;
  payload: string;
};

type UserActionType =
  | FetchUsersRequestActionType
  | FetchUsersSuccessActionType
  | FetchUsersFailureActionType
  | CreateUserRequestActionType
  | CreateUserSuccessActionType
  | CreateUserFailureActionType
  | UpdateUserRequestActionType
  | UpdateUserSuccessActionType
  | UpdateUserFailureActionType
  | DeleteUserRequestActionType
  | DeleteUserSuccessActionType
  | DeleteUserFailureActionType;

export type { UserType, UserStateType, UserActionType };
