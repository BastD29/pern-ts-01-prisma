import {
  Dispatch,
  FC,
  ReactNode,
  createContext,
  useEffect,
  useReducer,
} from "react";
import { UserActionType, UserStateType } from "../types/user";
import { initialState, reducer } from "../reducers/user";
// import {
//   FETCH_USERS_FAILURE,
//   FETCH_USERS_REQUEST,
//   FETCH_USERS_SUCCESS,
// } from "../constants/actions";
// import { getUsers } from "../services/user";
// import { toast } from "react-toastify";
import { fetchUsers } from "../actions/user";

type UserContextType = {
  state: UserStateType;
  dispatch: Dispatch<UserActionType>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderPropsType = {
  children: ReactNode;
};

const UserProvider: FC<UserProviderPropsType> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("users:", state.users);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     dispatch({ type: FETCH_USERS_REQUEST });

  //     try {
  //       const { data } = await getUsers();
  //       dispatch({ type: FETCH_USERS_SUCCESS, payload: data?.users || [] });
  //     } catch (error) {
  //       console.error((error as Error).message);
  //       toast.error("Failed to fetch users");
  //       dispatch({
  //         type: FETCH_USERS_FAILURE,
  //         payload: (error as Error).message,
  //       });
  //     }
  //   };

  //   fetchUsers();
  // }, [dispatch]);

  useEffect(() => {
    fetchUsers(dispatch);
  }, [dispatch]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
