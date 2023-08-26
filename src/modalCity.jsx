import React, { useState } from "react";
import s from "./Mozok.module.css";
import { BiChevronDown } from "react-icons/bi";
import Backgound from "./Components/Background/Backgound";
const ModalCityWindow = ({ show, setShow }) => {
  const [chosenCity, setChosenCity] = useState("Київ");
  const setCity = (text) => {
    setChosenCity(text);
    setShow(false);
  };
  const cityReturn = (c1, c2, c3) => {
    return (
      <>
        <td onClick={(e) => setCity(e.target.textContent)}>{c1}</td>
        <td onClick={(e) => setCity(e.target.textContent)}>{c2}</td>
        <td onClick={(e) => setCity(e.target.textContent)}>{c3}</td>
      </>
    );
  };
  return (
    <>
      {show ? (
        <>
          <div className={s.modalContainer}>
            <Backgound setShow={setShow} />
            <div className={s.city} onClick={() => setShow(true)}>
              {chosenCity} <BiChevronDown className={s.cityBtn} />
            </div>
            <div className={s.cities}>
              <table>
                <tr>{cityReturn("Київ", "Харків", "Одеса")}</tr>
                <tr>{cityReturn("Дніпро", "Донецьк", "Запоріжжя")}</tr>
                <tr>{cityReturn("Луцьк", "Горлівка", "Івано-Франківськ")}</tr>
                <tr>{cityReturn("Львів", "Кривий ріг", "Миколаїв")}</tr>
                <tr>{cityReturn("Вінниця", "Севастополь", "Тернопіль")}</tr>
              </table>
            </div>{" "}
          </div>
        </>
      ) : (
        <div className={s.city} onClick={() => setShow(true)}>
          {chosenCity} <BiChevronDown className={s.cityBtn} />
        </div>
      )}
    </>
  );
};

export default ModalCityWindow;
