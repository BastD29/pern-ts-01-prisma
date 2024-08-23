import { FC } from "react";
import UsersList from "../../components/UsersList/UsersList";
import Form from "../../components/Form/Form";
import style from "./Store.module.scss";

const Store: FC = () => {
  return (
    <div className={style["store"]}>
      <Form />
      <UsersList />
    </div>
  );
};

export default Store;
