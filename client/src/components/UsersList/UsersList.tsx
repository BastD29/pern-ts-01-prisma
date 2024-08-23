import { FC } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import { deleteUserAction } from "../../actions/user";
import style from "./UsersList.module.scss";

const UsersList: FC = () => {
  const { state, dispatch } = useUserContext();
  const { error, users, loading } = state;

  const handleDelete = (id: string) => {
    deleteUserAction(id, dispatch);
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (users === null) {
    return <p>No users available.</p>;
  }

  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <div className={style["users-list"]}>
      {users?.map((user) => (
        <div key={user.id} className={style["users-list__item"]}>
          <h3>{user.name}</h3>
          <button onClick={() => handleDelete(user.id?.toString() || "")}>
            Delete user
          </button>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
