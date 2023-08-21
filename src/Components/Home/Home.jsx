import React from "react";
import s from "./Home.module.css";
import { AiOutlineLaptop } from "react-icons/ai";
import { ReactComponent as GPUSVG } from "../Images/video-card-svgrepo-com.svg";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineApple } from "react-icons/ai";
import { BsTv, BsSpeaker } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <div className={s.HomeContent}>
        <div className={s.topBannerHeader}>
          <div className={s.catalog}>
            <ul>
              <li>
                <AiOutlineLaptop />
                Ноутбуки і комп'ютери
              </li>
              <hr />
              <li>
                <GPUSVG />
                Комплектуючі для ПК
              </li>
              <hr />
              <li>
                <IoIosPhonePortrait />
                Смартфони та планшети
              </li>
              <hr />
              <li>
                <AiOutlineApple />
                Техніка Apple
              </li>
              <hr />
              <li>
                <BsTv />
                Телевізори і проектори
              </li>
              <hr />
              <li>
                <BsSpeaker />
                Аудіо обладнання
              </li>
            </ul>
          </div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          cupiditate odit. Corporis odit asperiores cupiditate repudiandae
          nostrum neque et sed. Autem, rerum. Eaque, assumenda nisi? Facere
          quasi culpa dolorem amet? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corporis, quasi commodi! Sit adipisci quo rem
          delectus libero quas similique esse aliquid, consectetur eos, deserunt
          blanditiis beatae! Accusamus voluptates aliquam iusto. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ab mollitia, odit
          numquam accusamus cumque perferendis, repellendus quis voluptate ad
          recusandae nostrum ipsa dolor, necessitatibus dolore cupiditate
          magnam. Consequatur, ad vitae? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Saepe, cupiditate odit. Corporis odit asperiores
          cupiditate repudiandae nostrum neque et sed. Autem, rerum. Eaque,
          assumenda nisi? Facere quasi culpa dolorem amet? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Corporis, quasi commodi! Sit
          adipisci quo rem delectus libero quas similique esse aliquid,
          consectetur eos, deserunt blanditiis beatae! Accusamus voluptates
          aliquam iusto. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Ab mollitia, odit numquam accusamus cumque perferendis,
          repellendus quis voluptate ad recusandae nostrum ipsa dolor,
          necessitatibus dolore cupiditate magnam. Consequatur, ad vitae? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate
          odit. Corporis odit asperiores cupiditate repudiandae nostrum neque et
          sed. Autem, rerum. Eaque, assumenda nisi? Facere quasi culpa dolorem
          amet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Corporis, quasi commodi! Sit adipisci quo rem delectus libero quas
          similique esse aliquid, consectetur eos, deserunt blanditiis beatae!
          Accusamus voluptates aliquam iusto. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Ab mollitia, odit numquam accusamus
          cumque perferendis, repellendus quis voluptate ad recusandae nostrum
          ipsa dolor, necessitatibus dolore cupiditate magnam. Consequatur, ad
          vitae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
          cupiditate odit. Corporis odit asperiores cupiditate repudiandae
          nostrum neque et sed. Autem, rerum. Eaque, assumenda nisi? Facere
          quasi culpa dolorem amet? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Corporis, quasi commodi! Sit adipisci quo rem
          delectus libero quas similique esse aliquid, consectetur eos, deserunt
          blanditiis beatae! Accusamus voluptates aliquam iusto. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Ab mollitia, odit
          numquam accusamus cumque perferendis, repellendus quis voluptate ad
          recusandae nostrum ipsa dolor, necessitatibus dolore cupiditate
          magnam. Consequatur, ad vitae?
        </div>
      </div>
    </>
  );
};

export default Home;
