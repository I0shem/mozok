import React, { useState } from "react";
import s from "./HeaderBtns.module.css";
import { BiChevronDown } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export function HeaderBtns() {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const style = {
    transform: showModal ? "rotate(180deg)" : "",
    transition: "transform 150ms ease",
  };
  const style1 = {
    transform: showModal1 ? "rotate(180deg)" : "",
    transition: "transform 150ms ease",
  };
  const style2 = {
    transform: showModal2 ? "rotate(180deg)" : "",
    transition: "transform 150ms ease",
  };

  const [weight, setWeight] = useState(300);
  const [weight1, setWeight1] = useState(300);

  const loyaltyContent = ["Про програму лояльності", "Подарункові сертифікати"];
  const clientsContent = [
    "Уцінені товари",
    "Доставка та оплата",
    "Mozok Блог",
    "Публічна оферта",
    "Контакти",
    "Всі бренди",
  ];
  const serviceContent = ["Сервісні центри", "Сервіс і гарантія"];

  const openModal = (state) => {};
  return (
    <div className={s.headerBtnContainer}>
      <NavLink
        to="/mozok/stores"
        className={s.Link}
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? setWeight1(600) : setWeight1(300),
          };
        }}
      >
        <button
          type="button"
          className={s.dropDownBtn}
          style={{ fontWeight: weight1 }}
        >
          Магазини
        </button>
      </NavLink>

      <button
        type="button"
        className={s.dropDownBtn}
        onClick={() => setShowModal(!showModal)}
      >
        Програма лояльності
        <BiChevronDown className={s.headerBtn} id="btn" style={style} />
        {showModal ? (
          <>
            <div
              onClick={() => setShowModal(!showModal)}
              className={s.modalBackground}
            >
              <div
                className={s.modalHeader0}
                onClick={(e) => e.stopPropagation()}
              >
                <ul>
                  {loyaltyContent.map((i) => (
                    <li>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </button>

      <button
        type="button"
        className={s.dropDownBtn}
        onClick={() => setShowModal1(!showModal1)}
      >
        Клієнтам
        <BiChevronDown className={s.headerBtn} id="btn" style={style1} />
        {showModal1 ? (
          <>
            <div
              onClick={() => setShowModal1(!showModal1)}
              className={s.modalBackground}
            >
              <div className={s.modalHeader1}>
                <ul>
                  {clientsContent.map((i) => (
                    <li>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </button>

      <button
        type="button"
        className={s.dropDownBtn}
        style={{ fontWeight: weight }}
        onClick={() => setShowModal2(!showModal2)}
      >
        Сервіс
        <BiChevronDown className={s.headerBtn} id="btn" style={style2} />
        {showModal2 ? (
          <>
            <div
              onClick={() => setShowModal2(!showModal2)}
              className={s.modalBackground}
            >
              <div className={s.modalHeader2}>
                <ul>
                  {serviceContent.map((i) => (
                    <li>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </button>

      <NavLink
        to="/mozok/promotion"
        className={s.Link}
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? setWeight(600) : setWeight(300),
          };
        }}
      >
        <button
          type="button"
          className={s.dropDownBtn}
          style={{ color: "red", fontWeight: weight }}
        >
          Акції
        </button>
      </NavLink>
    </div>
  );
}
