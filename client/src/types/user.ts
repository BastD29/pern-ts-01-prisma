import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
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

// actions

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

type UserActionType =
  | FetchUsersRequestActionType
  | FetchUsersSuccessActionType
  | FetchUsersFailureActionType;

export type { UserType, UserStateType, UserActionType };
