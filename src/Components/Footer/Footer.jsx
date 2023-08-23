import React from "react";
import s from "./footer.module.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as MyLogo } from "../../Components/Images/mozok_svg.svg";
import y from "../../Mozok.module.css";
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
        <NavLink to="/mozok">
          <MyLogo className={y.logoImage} />
        </NavLink>
        <p className={s.logo_text}>
          Mozok - надійний постачальник компʼютерної техніки поряд з вами, з
          великим досвідом
        </p>
      </div>
      <ul className={s.category}>
        <li
          className={`${s.category_text} ${s.contacts_list_item}`}
          style={{ fontWeight: "bold" }}
        >
          Популярні категорії
        </li>
        <li className={s.contacts_list_item}>
          Компʼютерні постачання та комплектуючі
        </li>
        <li className={s.contacts_list_item}>Принтери та МФУ</li>
        <li className={s.contacts_list_item}>Відеокарти</li>
        <li className={s.contacts_list_item}>Картриджі</li>
        <li className={s.contacts_list_item}>Акції</li>
      </ul>
      <ul className={s.service}>
        <li
          className={`${s.category_text} ${s.contacts_list_item}`}
          style={{ fontWeight: "bold" }}
        >
          Послуги
        </li>
        <li className={s.contacts_list_item}>Доставка картриджів в офіс</li>
        <li className={s.contacts_list_item}>
          Запуск та налаштування обладнання
        </li>
        <li className={s.contacts_list_item}>Обслуговування офісної техніки</li>
      </ul>
      <ul className={s.info}>
        <li
          className={`${s.category_text} ${s.contacts_list_item}`}
          style={{ fontWeight: "bold" }}
        >
          Інформація
        </li>
        <li className={s.contacts_list_item}>Доставка та оплата</li>
        <li className={s.contacts_list_item}>Гарантія</li>
        <li className={s.contacts_list_item}>Відгуки</li>
        <li className={s.contacts_list_item}>Про компанію Mozok</li>
        <li className={s.contacts_list_item}>Політика конфіденційності</li>
      </ul>
      <ul className={s.social}>
        <li className={s.contacts_list_item}>
          <img src={inst} alt="" className={s.social_icon} />
        </li>
        <li className={s.contacts_list_item}>
          <img src={fb} alt="" className={s.social_icon} />
        </li>
        <li className={s.contacts_list_item}>
          <img src={ws} alt="" className={s.social_icon} />
        </li>
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
