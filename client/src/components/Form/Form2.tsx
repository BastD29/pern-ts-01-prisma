import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { UserType } from "../../types/user";
import { useUserContext } from "../../hooks/useUserContext";
import { createUserAction, updateUserAction } from "../../actions/user";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Form.module.scss";

const Form: FC = () => {
  const [user, setUser] = useState<UserType>({
    name: "",
  });
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useUserContext();
  const { users } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if (id && users) {
      const existingUser = users.find((u) => u.id?.toString() === id);
      if (existingUser) {
        setUser(existingUser);
      }
    }
  }, [id, users]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (id) {
      updateUserAction(user, id, dispatch);
      navigate("/store");
    } else {
      createUserAction(user, dispatch);
    }
    setUser({ name: "" });
  };

  return (
    <form className={style["form"]} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <button type="submit">{id ? "Update User" : "Create User"}</button>
    </form>
  );
};

export default Form;
