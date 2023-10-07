import React from "react";
import s from "./footer.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as MyLogo } from "../Images/mozok_svg.svg";
import inst from "../Images/social/inst.svg";
import fb from "../Images/social/fb.svg";
import ws from "../Images/social/ws.svg";
import phone from "../Images/contacts/phone.svg";
import mail from "../Images/contacts/mail.svg";
import point from "../Images/contacts/point.svg";
import viza from "../Images/viza.png";
// font rubik
import "@fontsource/rubik"; // Defaults to weight 400
import "@fontsource/rubik/400.css"; // Specify weight
import "@fontsource/rubik/400-italic.css"; // Specify weight and style
//
const Footer = () => {
  return (
    <div className={s.footer_container}>
      <div className={s.logo_box}>
        <NavLink to="/mozok" end>
          <MyLogo className={s.logoImage} />
        </NavLink>
        <p className={s.logo_text}>
          <b>Mozok</b> - надійний постачальник компʼютерної техніки поряд з
          вами, з великим досвідом
        </p>
      </div>
      <ul className={s.category}>
        <li
          className={`${s.category_text} ${s.contacts_list_item}`}
          style={{ fontWeight: "bold" }}
        >
          Популярні категорії
        </li>
        <NavLink
          to="/mozok/productpage/cpus"
          className={s.link}
          activeClassName={s.linkActive}
        >
          <li className={s.contacts_list_item}>Центральні процесори (CPU)</li>
        </NavLink>
        <NavLink
          to="/mozok/productpage/gpus"
          className={s.link}
          activeClassName={s.linkActive}
        >
          <li className={s.contacts_list_item}>Графічні процесори (GPU)</li>
        </NavLink>
        <NavLink
          to="/mozok/productpage/motherboards"
          className={s.link}
          activeClassName={s.linkActive}
        >
          <li className={s.contacts_list_item}>Материнські плати</li>
        </NavLink>
        <NavLink
          to="/mozok/productpage/tablets"
          className={s.link}
          activeClassName={s.linkActive}
        >
          <li className={s.contacts_list_item}>Смартфони та телефони</li>
        </NavLink>
        <NavLink
          to="/mozok/productpage/phones"
          className={s.link}
          activeClassName={s.linkActive}
        >
          <li className={s.contacts_list_item}>Планшети</li>
        </NavLink>
        <NavLink
          to="/mozok/promotion"
          className={s.link}
          activeClassName={s.linkActive}
        >
          <li className={s.contacts_list_item} style={{ color: "red" }}>
            Акції
          </li>
        </NavLink>
      </ul>

      <ul className={s.service}>
        <NavLink
          to="/mozok/loyalty_program"
          className={s.link}
          activeClassName={s.linkActive}
        >
          <li
            className={`${s.category_text} ${s.contacts_list_item}`}
            style={{ fontWeight: "bold" }}
          >
            Програма лояльності
          </li>
        </NavLink>
        <NavLink
          to="/mozok/loyalty_program#loyalty-program-section"
          className={s.link}
          activeClassName={s.linkActive}
        >
          <li className={s.contacts_list_item}>Про програму лояльності</li>
        </NavLink>
        <NavLink
          to="/mozok/loyalty_program#gift-certificates-section"
          className={s.link}
          activeClassName={s.linkActive}
        >
          <li className={s.contacts_list_item}>Подарункові сертифікати</li>
        </NavLink>

        <li
          className={`${s.category_text} ${s.contacts_list_item}`}
          style={{ fontWeight: "bold" }}
        >
          Сервіс
        </li>
        <li className={s.contacts_list_item}>Сервісні центри</li>
        <li className={s.contacts_list_item}>Сервіс і гарантія</li>
      </ul>
      <ul className={s.info}>
        <li
          className={`${s.category_text} ${s.contacts_list_item}`}
          style={{ fontWeight: "bold" }}
        >
          Клієнтам
        </li>
        <li className={s.contacts_list_item}>Уцінені товари</li>
        <li className={s.contacts_list_item}>Доставка та оплата</li>
        <li className={s.contacts_list_item}>Публічна оферта</li>
        <li className={s.contacts_list_item}>Контакти</li>
        <li className={s.contacts_list_item}>Всі бренди</li>
      </ul>
      <ul className={s.social}>
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <li className={s.contacts_list_item}>
            <img src={inst} alt="" className={s.social_icon} />
          </li>
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <li className={s.contacts_list_item}>
            <img src={fb} alt="" className={s.social_icon} />
          </li>
        </a>
        <a
          href="https://www.whatsapp.com/?lang=uk_UA"
          target="_blank"
          rel="noreferrer"
        >
          <li className={s.contacts_list_item}>
            <img src={ws} alt="" className={s.social_icon} />
          </li>
        </a>
      </ul>
      <ul className={s.contacts}>
        <li
          className={`${s.category_text} ${s.contacts_list_item}`}
          style={{ fontWeight: "bold" }}
        >
          Контакти
        </li>
        <li className={s.contacts_list_item}>
          <img
            src={phone}
            alt="номер телефону +38 068 000 00 00"
            style={{ width: "18.14px", height: "19.56px", marginRight: "14px" }}
          />{" "}
          +38 068 000 00 00
        </li>
        <li className={s.contacts_list_item}>
          <img
            src={mail}
            alt="email info@mozok.com.ua"
            style={{ width: "24px", height: "18px", marginRight: "14px" }}
          />{" "}
          info@mozok.com.ua
        </li>
        <li className={s.contacts_list_item}>
          <img
            src={point}
            alt="адреса м. Вінниця, вул. Соборна 30 "
            style={{ width: "20px", height: "26.84px", marginRight: "14px" }}
          />{" "}
          м. Вінниця, вул. Соборна 30
        </li>
        <li>
          <img src={viza} alt="" style={{ marginTop: "40px" }} />
        </li>
      </ul>
    </div>
  );
};

export default Footer;
