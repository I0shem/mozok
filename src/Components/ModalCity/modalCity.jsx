import React, { useState } from "react";
import s from "./modalCity.module.css";
import { BiChevronDown } from "react-icons/bi";
import Backgound from "../Background/Backgound";
import ModalCitiesRow from "./modalCitiesRow";

const ModalCityWindow = ({ show, setShow }) => {
  const [chosenCity, setChosenCity] = useState("Київ");
  const setCity = (text) => {
    setChosenCity(text);
    setShow(false);
  };

  const style = {
    transform: show ? "rotate(180deg)" : "",
    transition: "transform 150ms ease",
  };

  return (
    <div>
      {show ? (
        <>
          <Backgound setShow={setShow} />
          <div className={s.modalContainer}>
            <div className={s.city} onClick={() => setShow(true)}>
              {chosenCity} <BiChevronDown style={style} className={s.cityBtn} />
            </div>
            <div className={s.cities}>
              <table>
                <tr>{ModalCitiesRow("Київ", "Харків", "Одеса", setCity)}</tr>
                <tr>
                  {ModalCitiesRow("Дніпро", "Донецьк", "Запоріжжя", setCity)}
                </tr>
                <tr>
                  {ModalCitiesRow(
                    "Луцьк",
                    "Горлівка",
                    "Івано-Франківськ",
                    setCity
                  )}
                </tr>
                <tr>
                  {ModalCitiesRow("Львів", "Кривий ріг", "Миколаїв", setCity)}
                </tr>
                <tr>
                  {ModalCitiesRow(
                    "Вінниця",
                    "Севастополь",
                    "Тернопіль",
                    setCity
                  )}
                </tr>
              </table>
            </div>
          </div>
        </>
      ) : (
        <div className={s.city} onClick={() => setShow(true)}>
          {chosenCity} <BiChevronDown className={s.cityBtn} />
        </div>
      )}
    </div>
  );
};

export default ModalCityWindow;
