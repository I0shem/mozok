import React from "react";
import s from "./Stores.module.css";
import Card from "../card";
const Stores = () => {
  return (
    <div className={s.StoresContent}>
      <div className={s.cartTest}>
        <Card />
      </div>
    </div>
  );
};

export default Stores;
