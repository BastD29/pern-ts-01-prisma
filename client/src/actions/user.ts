import { Dispatch } from "react";
import { UserActionType, UserType } from "../types/user";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  //
  CREATE_USER_FAILURE,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  //
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  //
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
} from "../constants/actions";
import { getUsers, createUser, updateUser, deleteUser } from "../services/user";
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

const updateUserAction = async (
  user: UserType,
  id: string,
  dispatch: Dispatch<UserActionType>
) => {
  dispatch({ type: UPDATE_USER_REQUEST });

  try {
    const { data } = await updateUser(id, user);

    if (data?.user) {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: data.user });
      toast.success(data.message || "User updated");
    }
  } catch (error) {
    console.error((error as Error).message);
    toast.error("Failed to update user");
    dispatch({ type: UPDATE_USER_FAILURE, payload: (error as Error).message });
  }
};

const deleteUserAction = async (
  id: string,
  dispatch: Dispatch<UserActionType>
) => {
  dispatch({ type: DELETE_USER_REQUEST });

  try {
    const { data } = await deleteUser(id);

    if (data?.message) {
      dispatch({ type: DELETE_USER_SUCCESS, payload: data.message });
      toast.success(data.message || "User deleted");
    }
  } catch (error) {
    console.error((error as Error).message);
    toast.error("Failed to delete user");
    dispatch({ type: DELETE_USER_FAILURE, payload: (error as Error).message });
  }
};

export {
  fetchUsersAction,
  createUserAction,
  updateUserAction,
  deleteUserAction,
};
