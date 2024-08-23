import { ApiResponseType, fetcher } from ".";
import { CREATE, DELETE, UPDATE, USERS } from "../constants/endpoints";
import { UserType } from "../types/user";

// response types

type GetUsersResponseType = {
  message: string;
  users: UserType[];
};

type CreateUserResponseType = {
  message: string;
  user: UserType;
};

type UpdateUserResponseType = {
  message: string;
  user: UserType;
};

type DeleteUserResponseType = {
  message: string;
};

// params types

type CreateUserParamsType = {
  name: string;
};

type UpdateUserParamsType = {
  name: string;
};

const getUsers = async (): Promise<ApiResponseType<GetUsersResponseType>> =>
  fetcher({
    method: "get",
    url: USERS,
  });

const createUser = async (
  body: CreateUserParamsType
): Promise<ApiResponseType<CreateUserResponseType>> =>
  fetcher({
    method: "post",
    url: `${USERS}${CREATE}`,
    body: { name: body.name },
  });

const updateUser = async (
  id: string,
  body: UpdateUserParamsType
): Promise<ApiResponseType<UpdateUserResponseType>> =>
  fetcher({
    method: "put",
    url: `${USERS}${UPDATE}/${id}`,
    body: { name: body.name },
  });

const deleteUser = async (
  id: string
): Promise<ApiResponseType<DeleteUserResponseType>> =>
  fetcher({
    method: "delete",
    url: `${USERS}${DELETE}/${id}`,
  });

export { getUsers, createUser, updateUser, deleteUser };
