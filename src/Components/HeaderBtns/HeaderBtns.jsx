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
  const loyaltyContent = [
    {
      tolink: "/mozok/loyalty_program#loyalty-program-section",
      label: "Про програму лояльності",
    },
    {
      tolink: "/mozok/loyalty_program#gift-certificates-section",
      label: "Подарункові сертифікати",
    },
  ];
  const clientsContent = [
    {
      tolink: "/mozok/forclients#discounted-products",
      label: "Уцінені товари",
    },
    {
      tolink: "/mozok/forclients#delivery-payment",
      label: "Доставка та оплата",
    },
    {
      tolink: "/mozok/forclients#public-offer",
      label: "Публічна оферта",
    },
    {
      tolink: "/mozok/forclients#contacts",
      label: "Контакти",
    },
    {
      tolink: "/mozok/forclients#all-brands",
      label: "Всі бренди",
    },
  ];
  const serviceContent = [
    {
      tolink: "/mozok/service_centre#service-centers",
      label: "Сервісні центри",
    },
    {
      tolink: "/mozok/service_centre#service-warranty",
      label: "Сервіс і гарантія",
    },
  ];

  return (
    <div className={s.headerBtnContainer}>
      <NavLink
        to="/mozok/stores"
        className={s.Link}
        style={({ isActive }) => ({ fontWeight: isActive ? "600" : "300" })}
      >
        <button type="button" className={s.dropDownBtn}>
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
        {showModal && (
          <>
            <div
              onClick={() => setShowModal(!showModal)}
              className={s.modalBackground}
            >
              <div className={s.modalHeader0}>
                <ul>
                  {loyaltyContent.map((item) => (
                    <NavLink to={item.tolink} className={s.link}>
                      <li>{item.label}</li>
                    </NavLink>
                  ))}
                </ul>
              </div>
            </div>
          </>
        )}
      </button>

      <button
        type="button"
        className={s.dropDownBtn}
        onClick={() => setShowModal1(!showModal1)}
      >
        Клієнтам
        <BiChevronDown className={s.headerBtn} id="btn" style={style1} />
        {showModal1 && (
          <div
            onClick={() => setShowModal1(!showModal1)}
            className={s.modalBackground}
          >
            <div className={s.modalHeader1}>
              <ul>
                {clientsContent.map((item) => (
                  <NavLink to={item.tolink} className={s.link}>
                    <li>{item.label}</li>
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
        )}
      </button>

      <button
        type="button"
        className={s.dropDownBtn}
        onClick={() => setShowModal2(!showModal2)}
      >
        Сервіс
        <BiChevronDown className={s.headerBtn} id="btn" style={style2} />
        {showModal2 && (
          <div
            onClick={() => setShowModal2(!showModal2)}
            className={s.modalBackground}
          >
            <div className={s.modalHeader2}>
              <ul>
                {serviceContent.map((item) => (
                  <NavLink to={item.tolink} className={s.link}>
                    <li>{item.label}</li>
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
        )}
      </button>

      <NavLink
        to="/mozok/promotion"
        className={s.Link}
        style={({ isActive }) => ({ fontWeight: isActive ? "600" : "300" })}
      >
        <button
          type="button"
          className={s.dropDownBtn}
          style={{ color: "red" }}
        >
          Акції
        </button>
      </NavLink>
    </div>
  );
}
