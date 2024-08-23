import { FC } from "react";
import { useUserContext } from "../../hooks/useUserContext";
import style from "./UsersList.module.scss";

const UsersList: FC = () => {
  const { state } = useUserContext();
  const { error, users, loading } = state;

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
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default UsersList;
