import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../constants/actions";
import { UserActionType, UserStateType } from "../types/user";

const initialState: UserStateType = {
  users: null,
  loading: false,
  error: null,
};

const reducer = (
  state: UserStateType,
  action: UserActionType
): UserStateType => {
  switch (action.type) {
    case FETCH_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { initialState, reducer };
