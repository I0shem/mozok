import React, { useState } from "react";
import s from "./Home.module.css";
import Card from "../cards/card";
import MongoDBDataFetcher from "../useData";
import { AiFillApple } from "react-icons/ai";
import {
  SiSamsung,
  SiAmd,
  SiNvidia,
  SiOneplus,
  SiGoogle,
  SiLogitech,
} from "react-icons/si";
import EPAM from "../Images/EPAM logo.png";
import GlobalLogic from "../Images/GlobalLogic.png";
import SoftServe from "../Images/SoftServe.png";
import Luxoft from "../Images/Luxoft.png";
import NIX from "../Images/nix.png";
import Map from "../map/Map";
import SwiperBox from "../SwiperBox/SwiperBox";
import SmallSwiperBox from "../SwiperBox/SmallSwiperBox1";
import ImageBanner from "../Images/s11.jpg";
import SlimImageBanner from "../Images/slimBanner.png";
import { AiOutlineLaptop } from "react-icons/ai";
import { ReactComponent as GPUSVG } from "../Images/video-card-svgrepo-com.svg";
import { IoIosPhonePortrait } from "react-icons/io";
import { AiOutlineApple, AiOutlineClose } from "react-icons/ai";
import { BsTv, BsSpeaker } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import CatalogHeader from "../Header/CatalogHeader";

const Home = () => {
  const data = MongoDBDataFetcher("sales");
  const halfLength = Math.ceil(data.length / 2);
  const firstHalf = data.slice(0, halfLength);
  const secondHalf = data.slice(halfLength, data.length);
  const [selectedItem, setSelectedItem] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const CharacteristicsTable = (characteristics) => (
    <motion.table variants={ModalInfoVariants}>
      {Object.entries(characteristics).map(([key, value]) => (
        <tr key={key}>
          <th>{key}</th>
          <td>{value}</td>
        </tr>
      ))}
    </motion.table>
  );
  const closeModalWindow = () => {
    const body = document.querySelector("body");
    body.style.overflow = "auto";
    setOpenModal(null);
  };
  const modalVariants = {
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.5, delayChildren: 0.2 },
    },
    closed: { opacity: 0 },
  };
  const imageVariants = {
    open: {
      opacity: 1,
      y: "0vh",
    },
    closed: { opacity: 0, y: "-10vh" },
  };
  const ModalInfoVariants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: { opacity: 0, x: "10%" },
  };
  return (
    <>
      <div className={s.homeHeaderContainer}>
        <CatalogHeader />
        <SwiperBox></SwiperBox>
        <SmallSwiperBox></SmallSwiperBox>
        <img className={s.ImageBanner} src={ImageBanner} alt="picture1" />

        <img
          className={s.SlimImageBanner}
          src={SlimImageBanner}
          alt="picture2"
        />
        <div className={s.bottomBannersContainer}>
          <li>
            <AiOutlineLaptop />
          </li>

          <li>
            <GPUSVG />
          </li>

          <li>
            <IoIosPhonePortrait />
          </li>

          <li>
            <AiOutlineApple />
          </li>

          <li>
            <BsTv />
          </li>

          <li>
            <BsSpeaker />
          </li>
        </div>
      </div>
      <div className={s.HomeContent}>
        <div id="homecontent" className={s.bigText}>
          ПОПУЛЯРНІ ТОВАРИ
        </div>
        <div className={s.items}>
          {firstHalf.map((i) => (
            <Card
              item={i}
              setSelectedItem={setSelectedItem}
              setOpenModal={setOpenModal}
            />
          ))}
        </div>

        <div className={s.partnerBrands}>
          <div className={s.largeText}>Бренди-партнери</div>
          Ми співпрацюємо з провідними брендами, щоб пропонувати вам найкращу
          техніку!
          <ul>
            <li>
              <AiFillApple />
            </li>
            <li>
              <SiSamsung />
            </li>
            <li>
              <SiAmd />
            </li>
            <li>
              <SiNvidia />
            </li>
            <li>
              <SiOneplus />
            </li>
            <li>
              <SiGoogle />
            </li>
            <li>
              <SiLogitech />
            </li>
          </ul>
        </div>
        <div className={s.items}>
          {secondHalf.map((i) => (
            <Card
              item={i}
              setSelectedItem={setSelectedItem}
              setOpenModal={setOpenModal}
            />
          ))}
        </div>
        <div className={s.partnerClients}>
          <div className={s.largeText}>Наші партнери-клієнти</div>
          Ми пишаємося тим, що наші клієнти - це провідні компанії, які обирають
          нас для задоволення своїх потреб у техніці!
          <ul>
            <li>
              <img className={s.ImageClient} src={EPAM} alt="ImageClient" />
            </li>
            <li>
              <img
                className={s.ImageClient}
                src={SoftServe}
                alt="ImageClient"
              />
            </li>
            <li>
              <img
                className={s.ImageClient}
                src={GlobalLogic}
                alt="ImageClient"
              />
            </li>

            <li>
              <img className={s.ImageClient} src={NIX} alt="ImageClient" />
            </li>
            <li>
              <img className={s.ImageClient} src={Luxoft} alt="ImageClient" />
            </li>
          </ul>
        </div>
        <Map />
        <div className={s.bigText}>ПРО НАС</div>

        <div className={s.generalText}>
          Mozok.ua - це інтернет-магазин електроніки в Україні, заснований у
          2022 році Іваном та Марією. Компанія пропонує широкий асортимент
          товарів від провідних виробників, а також гарантує якісне
          обслуговування та оперативну доставку.
        </div>

        <div className={s.bigText}>ІСТОРІЯ СТВОРЕННЯ</div>

        <div className={s.generalText}>
          У 2020 році Іван та Марія, двоє друзів-студентів, заснували
          інтернет-магазин електроніки "Mozok". Вони хотіли створити просту та
          інтуїтивно зрозумілу платформу, де українці могли б купувати
          електроніку за доступними цінами. Напочатку "Mozok" був невеликим
          бізнесом, але він швидко розвивався. У 2021 році компанія відкрила
          свій перший фізичний магазин у Києві. У 2022 році "Mozok" отримав
          інвестиції від міжнародного фонду венчурного капіталу. Сьогодні
          "Mozok" є одним із найбільших інтернет-магазинів електроніки в
          Україні. Компанія має понад 100 співробітників і пропонує широкий
          асортимент товарів від відомих світових брендів. У 2023 році "Mozok"
          планує розширити свою присутність у регіонах України та відкрити нові
          магазини.
        </div>
      </div>
      <AnimatePresence>
        {openModal && (
          <div className={s.itemModal} onClick={() => closeModalWindow()}>
            <motion.div
              variants={modalVariants}
              layoutId={selectedItem._id}
              className={s.innerItemModal}
              onClick={(e) => e.stopPropagation()}
            >
              <AiOutlineClose
                className={s.innerItemModalCloseBtn}
                onClick={() => closeModalWindow()}
              />
              <motion.div className={s.innerItemModalContainer}>
                <motion.div
                  className={s.innerItemModalFirstContainer}
                  variants={imageVariants}
                >
                  <img src={selectedItem.image} alt="failedToLoad"></img>
                </motion.div>
                <motion.div className={s.innerItemModalSecondContainer}>
                  <motion.h2>{selectedItem.title}</motion.h2>{" "}
                  <motion.div className={s.availability}>
                    В наявності
                  </motion.div>
                  <motion.h3 className={s.price}>
                    Ціна: {selectedItem.price} грн.
                  </motion.h3>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    className={s.buyButton}
                  >
                    Купити
                  </motion.button>
                </motion.div>
              </motion.div>
              <motion.h3 className={s.characteristicsModal}>
                Характеристики:
              </motion.h3>
              {CharacteristicsTable(selectedItem.characteristics)}
              <motion.button
                className={s.closeButton}
                onClick={() => closeModalWindow()}
              >
                Закрити{" "}
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
