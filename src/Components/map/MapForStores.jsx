import React from "react";
import s from "./map.module.css";
import phoneSVG from "../Images/contacts/phone.svg";
import mail from "../Images/contacts/mail.svg";
import point from "../Images/contacts/point.svg";
import clock from "../Images/contacts/clock.svg";
import MapComponentForStores from "./Google_mapForStores";

const MapForStores = ({
  id,
  name,
  resume,
  adress,
  work_schedule,
  phone,
  e_mail,
  position,
  center,
}) => {
  return (
    <div
      key={id}
      className={s.stores_map_container}
      style={{ position: "relative" }}
    >
      <svg
        className={s.pr_svg}
        style={{ position: "absolute", left: "0", top: "0" }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-100 110 2114 600"
        fill="none"
      >
        <path
          opacity="0.2"
          d="M246.154 2.99999L1920 2.99999L1920 347.058V732.82L443.568 732.82L5.89351e-05 735V502.091V347.058L5.89351e-05 203.254L163.404 203.254"
          stroke="#1F347B"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <g transform="translate(230, -10)">
          <ellipse
            cx="14.9356"
            cy="12.9873"
            rx="13.995"
            ry="12.9873"
            fill="#c2c4c3"
          />
        </g>
      </svg>
      <h1>
        Магазин компʼютерної техніки <strong>"{name}"</strong> <br />
      </h1>
      <h2>{resume}</h2>
      <div className={s.map_content_box}>
        <ul className={s.mao_info_box}>
          <li className={s.contacts_list_item}>
            <img
              src={point}
              alt={adress}
              style={{ width: "20px", height: "26.84px", marginRight: "14px" }}
            />
            {adress}
          </li>
          <li className={s.contacts_list_item}>
            <img
              src={phoneSVG}
              alt={phone}
              style={{
                width: "18.14px",
                height: "19.56px",
                marginRight: "14px",
              }}
            />{" "}
            {phone}
          </li>
          <li className={s.contacts_list_item}>
            <img
              src={mail}
              alt={e_mail}
              style={{ width: "24px", height: "18px", marginRight: "14px" }}
            />{" "}
            {e_mail}
          </li>

          <li className={s.contacts_list_item}>
            <img
              src={clock}
              alt="Графік роботи у будній день"
              style={{ width: "25px", height: "26px", marginRight: "14px" }}
            />{" "}
            {work_schedule}
          </li>
          <li className={s.contacts_list_item}>
            <img
              src={clock}
              alt="Графік роботи у вихідні"
              style={{ width: "25px", height: "26px", marginRight: "14px" }}
            />{" "}
            Без вихідних приймаємо онлайн-замовлення
          </li>
        </ul>
        <div className={s.stores_map_box}>
          <MapComponentForStores
            name={name}
            adress={adress}
            position={position}
            center={center}
          />
        </div>
      </div>
    </div>
  );
};

export default MapForStores;
