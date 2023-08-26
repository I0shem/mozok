import React from "react";
import s from "./Background.module.css";

const Backgound = ({ setShow }) => {
  return (
    <div onClick={() => setShow(false)} className={s.modalWindowCities}></div>
  );
};

export default Backgound;
