import { Dispatch } from "react";
import { UserActionType } from "../types/user";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../constants/actions";
import { getUsers } from "../services/user";
import { toast } from "react-toastify";

const fetchUsers = async (dispatch: Dispatch<UserActionType>) => {
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

export { fetchUsers };
