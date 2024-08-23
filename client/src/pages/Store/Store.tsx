import { FC } from "react";
import UsersList from "../../components/UsersList/UsersList";
import style from "./Store.module.scss";

const Store: FC = () => {
  return (
    <div className={style["store"]}>
      <UsersList />
    </div>
  );
};

export default Store;
