import React, { useState, useEffect } from "react";
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
import { AiOutlineApple } from "react-icons/ai";
import { BsTv, BsSpeaker } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";
import CatalogHeader from "../Header/CatalogHeader";
import { NavLink } from "react-router-dom";
import ProductModalWindow from "../ProductModalWindow/ProductModalWindow.jsx";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import LoadingLogoOther from "../LoadingLogo/LoadingLogoOther";

const Home = ({ myUser, basketProducts, setBasketProducts }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [loading, setLoading] = useState(true);
  const data = MongoDBDataFetcher("sales", setLoading);
  const halfLength = Math.ceil(data.length / 2);
  const firstHalf = data.slice(0, halfLength);
  const secondHalf = data.slice(halfLength, data.length);
  const [selectedItem, setSelectedItem] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const closeModalWindow = () => {
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    main.style.paddingRight = "0px";
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
  const textColor = (item) => {
    if (item.hot === true) {
      return (
        <div
          className={s.price}
          style={{ color: item.hot ? "red" : "inherit" }}
          onClick={(e) => e.stopPropagation()}
        >
          Ціна: {item.price} грн.
        </div>
      );
    } else {
      return (
        <div className={s.price} onClick={(e) => e.stopPropagation()}>
          Ціна: {item.price} грн.
        </div>
      );
    }
  };
  const auth = getAuth();

  const [likedProducts, setLikedProducts] = useState([]);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        const endpoint = `https://eu-west-2.aws.data.mongodb-api.com/app/mozok-store-yrvzc/endpoint/getlikedItems`;

        axios
          .get(endpoint, {
            params: { userId: u.uid },
            headers: { "Content-Type": "application/json" },
          })
          .then((response) => {
            console.log("API response data:", response.data);

            if (response.data.error) {
              console.log(response.data.error);
            } else {
              setLikedProducts(response.data);
            }
          })
          .catch((err) => {
            console.error("API Error:", err);
            console.error("Error Details:", err.response?.data);
          })
          .finally(() => {});
      }
    });

    return () => unsubscribe();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <LoadingLogoOther />
      ) : (
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
              <NavLink to="/mozok/productpage/laptops" className={s.Link}>
                <li>
                  <AiOutlineLaptop />
                </li>
              </NavLink>
              <NavLink to="/mozok/productpage/gpus" className={s.Link}>
                <li>
                  <GPUSVG />
                </li>
              </NavLink>

              <NavLink to="/mozok/productpage/phones" className={s.Link}>
                <li>
                  <IoIosPhonePortrait />
                </li>
              </NavLink>
              <NavLink to="/mozok/productpage/apple_phones" className={s.Link}>
                <li>
                  <AiOutlineApple />
                </li>
              </NavLink>
              <NavLink to="/mozok/productpage/tvs" className={s.Link}>
                <li>
                  <BsTv />
                </li>
              </NavLink>
              <NavLink
                to="/mozok/productpage/acoustic_system"
                className={s.Link}
              >
                <li>
                  <BsSpeaker />
                </li>
              </NavLink>
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
                  userID={myUser ? myUser.uid : null}
                  setSelectedItem={setSelectedItem}
                  setOpenModal={setOpenModal}
                  likedProducts={likedProducts}
                  basketProducts={basketProducts}
                  setBasketProducts={setBasketProducts}
                />
              ))}
            </div>

            <div className={s.partnerBrands}>
              <div className={s.largeText}>Бренди-партнери</div>
              Ми співпрацюємо з провідними брендами, щоб пропонувати вам
              найкращу техніку!
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
                  userID={myUser ? myUser.uid : null}
                  setSelectedItem={setSelectedItem}
                  setOpenModal={setOpenModal}
                  likedProducts={likedProducts}
                  basketProducts={basketProducts}
                  setBasketProducts={setBasketProducts}
                />
              ))}
            </div>
            <div className={s.partnerClients}>
              <div className={s.largeText}>Наші партнери-клієнти</div>
              Ми пишаємося тим, що наші клієнти - це провідні компанії, які
              обирають нас для задоволення своїх потреб у техніці!
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
                  <img
                    className={s.ImageClient}
                    src={Luxoft}
                    alt="ImageClient"
                  />
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
              інтернет-магазин електроніки "Mozok". Вони хотіли створити просту
              та інтуїтивно зрозумілу платформу, де українці могли б купувати
              електроніку за доступними цінами. Напочатку "Mozok" був невеликим
              бізнесом, але він швидко розвивався. У 2021 році компанія відкрила
              свій перший фізичний магазин у Києві. У 2022 році "Mozok" отримав
              інвестиції від міжнародного фонду венчурного капіталу. Сьогодні
              "Mozok" є одним із найбільших інтернет-магазинів електроніки в
              Україні. Компанія має понад 100 співробітників і пропонує широкий
              асортимент товарів від відомих світових брендів. У 2023 році
              "Mozok" планує розширити свою присутність у регіонах України та
              відкрити нові магазини.
            </div>
          </div>
          <AnimatePresence>
            {openModal && (
              <ProductModalWindow
                closeModalWindow={closeModalWindow}
                modalVariants={modalVariants}
                imageVariants={imageVariants}
                textColor={textColor}
                selectedItem={selectedItem}
                basketProducts={basketProducts}
                setBasketProducts={setBasketProducts}
              />
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default Home;
