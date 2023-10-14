import s from "./LikedProducts.module.css";
import ModalCard from "../cards/ModalCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { AnimatePresence, motion } from "framer-motion";
import ProductModalWindow from "./../ProductModalWindow/ProductModalWindow";
const LikedProducts = ({
  setShowLikedProducts,
  setBasketProducts,
  setShowBasket,
}) => {
  const [likedProducts, setLikedProducts] = useState([]);
  const auth = getAuth();
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
    const main = document.querySelector("main");
    main.style.paddingRight = "0px";
    body.style.overflow = "auto";
    setOpenModal(null);
  };
  const textColor = (item) => {
    if (item.hot === true) {
      return (
        <>
          <div onClick={(e) => e.stopPropagation()}>
            <div
              className={s.price}
              style={{ color: "red" }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className={s.price}> Ціна: {item.price} грн.</h3>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className={s.price} onClick={(e) => e.stopPropagation()}>
          Ціна: {item.price} грн.
        </div>
      );
    }
  };

  const [selectedItem, setSelectedItem] = useState(1);
  const ModalInfoVariants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: { opacity: 0, x: "10%" },
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
  return (
    <div
      className={s.LikedProducts}
      onClick={() => setShowLikedProducts(false)}
    >
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setShowLikedProducts(false)}
          className={s.closeButton}
        >
          X
        </button>
        {likedProducts.map((i) => (
          <ModalCard
            item={i}
            setSelectedItem={setSelectedItem}
            setOpenModal={setOpenModal}
            setBasketProducts={setBasketProducts}
            setShowBasket={setShowBasket}
          />
        ))}
      </div>
      <AnimatePresence>
        {openModal && (
          <ProductModalWindow
            closeModalWindow={closeModalWindow}
            modalVariants={modalVariants}
            imageVariants={imageVariants}
            textColor={textColor}
            selectedItem={selectedItem}
            CharacteristicsTable={CharacteristicsTable}
            setBasketProducts={setBasketProducts}
            setShowBasket={setShowBasket}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LikedProducts;
