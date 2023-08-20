import React from "react";
import s from "./Stores.module.css";
import Card from "../cards/card";
import MongoDBDataFetcher from "./../useData";

const Stores = () => {
  const data = MongoDBDataFetcher("motherboards");
  return (
    <div className={s.StoresContent}>
      <div className={s.cards}>
        {data.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};

export default Stores;
