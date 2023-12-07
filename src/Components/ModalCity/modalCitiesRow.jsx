import React from "react";
import s from "./modalCity.module.css";

const ModalCitiesRow = (c1, c2, c3, setCity) => {
  return (
    <div className={s.citiesRow}>
      <td onClick={(e) => setCity(e.target.textContent)}>{c1}</td>
      <td onClick={(e) => setCity(e.target.textContent)}>{c2}</td>
      <td onClick={(e) => setCity(e.target.textContent)}>{c3}</td>
    </div>
  );
};

export default ModalCitiesRow;
