import { Dispatch } from "react";
import { UserActionType, UserType } from "../types/user";
import {
  CREATE_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../constants/actions";
import { getUsers, createUser } from "../services/user";
import { toast } from "react-toastify";

const fetchUsersAction = async (dispatch: Dispatch<UserActionType>) => {
  dispatch({ type: FETCH_USERS_REQUEST });

  try {
    const { data } = await getUsers();
    dispatch({ type: FETCH_USERS_SUCCESS, payload: data?.users || [] });
  } catch (error) {
    console.error((error as Error).message);
    toast.error("Failed to fetch users");
    dispatch({
      type: FETCH_USERS_FAILURE,
      payload: (error as Error).message,
    });
  }
};

const createUserAction = async (
  user: UserType,
  dispatch: Dispatch<UserActionType>
) => {
  dispatch({ type: CREATE_USER_REQUEST });

  try {
    const { data } = await createUser(user);

    if (data?.user) {
      dispatch({ type: CREATE_USER_SUCCESS, payload: data.user });
      toast.success(data.message || "User created");
    }
  } catch (error) {
    console.error((error as Error).message);
    toast.error("Failed to create user");
    dispatch({ type: CREATE_USER_FAILURE, payload: (error as Error).message });
  }
};

export { fetchUsersAction, createUserAction };
