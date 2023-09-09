import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineLaptop } from "react-icons/ai";
import { ReactComponent as GPUSVG } from "../Images/video-card-svgrepo-com.svg";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineApple } from "react-icons/ai";
import { BsTv, BsSpeaker } from "react-icons/bs";
import s from "./Header.module.css";

const CatalogHeader = () => {
  return (
    <div className={s.topBannersContainer}>
      <div id="catalog" className={s.topBannerHeader}>
        <li>
          <AiOutlineLaptop />
          Ноутбуки і комп'ютери
        </li>

        <li>
          <GPUSVG />
          Комплектуючі для ПК
        </li>

        <li>
          <IoIosPhonePortrait />
          Смартфони та планшети
        </li>

        <li>
          <AiOutlineApple />
          Техніка Apple
        </li>

        <li>
          <BsTv />
          Монітори та аксесуари
        </li>

        <li>
          <BsTv />
          Телевізори і проектори
        </li>

        <li>
          <BsSpeaker />
          Аудіо обладнання
        </li>

        <NavLink to="/mozok/productpage/motherboards" className={s.Link}>
          <li>
            <GPUSVG />
            Комплектуючі для ПК
          </li>
        </NavLink>
        <li>
          <IoIosPhonePortrait />
          Смартфони та планшети
        </li>

        <li>
          <AiOutlineApple />
          Техніка Apple
        </li>

        <li>
          <BsTv />
          Монітори та аксесуари
        </li>
      </div>
    </div>
  );
};

export default CatalogHeader;
