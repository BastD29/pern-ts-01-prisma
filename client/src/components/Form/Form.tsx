import { ChangeEvent, FC, FormEvent, useState } from "react";
import { createUser } from "../../services/user";
import { toast } from "react-toastify";
import { UserType } from "../../types/user";
import { useUserContext } from "../../hooks/useUserContext";
import { FETCH_USERS_SUCCESS } from "../../constants/actions";
import style from "./Form.module.scss";

const Form: FC = () => {
  const [user, setUser] = useState<UserType>({
    name: "",
  });

  const { dispatch, state } = useUserContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { data } = await createUser({ name: user.name });

      if (data?.user) {
        toast.success(data.message || "User created");

        dispatch({
          type: FETCH_USERS_SUCCESS,
          payload: [...(state.users || []), data.user],
        });

        setUser({ name: "" });
      }
    } catch (error) {
      console.error((error as Error).message);
      toast.error("Failed to create user");
    }
  };

  return (
    <form className={style["form"]} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <button type="submit">Create user</button>
    </form>
  );
};

export default Form;
