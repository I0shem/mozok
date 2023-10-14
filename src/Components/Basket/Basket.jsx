import React, { useState } from "react";
import s from "./Basket.module.css";
import { motion } from "framer-motion";
import ProductModalWindow from "./../ProductModalWindow/ProductModalWindow";
import { toast } from "sonner";

function Basket({
  setShowBasket,
  basketProducts,
  setBasketProducts,
  setShowCheckOut,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(1);
  const CharacteristicsTable = (characteristics) => (
    <motion.table>
      {Object.entries(characteristics).map(([key, value]) => (
        <tr key={key}>
          <th>{key}</th>
          <td>{value}</td>
        </tr>
      ))}
    </motion.table>
  );

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
  const closeModalWindow = () => {
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    main.style.paddingRight = "0px";
    body.style.overflow = "auto";
    setOpenModal(null);
  };
  const removeItem = (id) => {
    setBasketProducts((prevItems) =>
      prevItems.filter((item) => item._id !== id)
    );
  };
  const total = basketProducts.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );
  const incrementQuantity = (id) => {
    setBasketProducts((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    );
  };
  const decrementQuantity = (id) => {
    setBasketProducts((prevItems) => {
      const item = prevItems.find((item) => item._id === id);
      if (item && item.quantity === 1) {
        return prevItems.filter((item) => item._id !== id);
      }
      return prevItems.map((item) =>
        item._id === id ? { ...item, quantity: (item.quantity || 2) - 1 } : item
      );
    });
  };

  const handleCheckout = () => {
    if (basketProducts.length > 0) {
      setShowCheckOut(true);
    } else {
      toast.error("Додайте товар в кошик!");
    }
  };
  const HandleClick = (item) => {
    const body = document.querySelector("body");
    const main = document.querySelector("main");
    body.style.overflow = "hidden";
    body.style.scrollbarGutter = "stable";
    main.style.paddingRight = "20px";
    setSelectedItem(item);
    setOpenModal(true);
  };

  return (
    <div className={s.modal} onClick={() => setShowBasket(false)}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2 className={s.title}>Кошик</h2>
        <button className={s.closeButton} onClick={() => setShowBasket(false)}>
          X
        </button>
        <div className={s.itemList}>
          <ul>
            {basketProducts.map((item) => (
              <li key={item._id} className={s.item}>
                <span onClick={() => HandleClick(item)}>
                  {item.title.length > 40
                    ? item.title.substring(0, 40) + "..."
                    : item.title}
                </span>{" "}
                <button
                  onClick={() => incrementQuantity(item._id)}
                  className={s.incrementButton}
                >
                  +
                </button>{" "}
                <button
                  onClick={() => decrementQuantity(item._id)}
                  className={s.decrementButton}
                >
                  -
                </button>
                <span>
                  {item.price * item.quantity} грн. ({item.quantity || 1}x)
                </span>
                <button
                  onClick={() => removeItem(item._id)}
                  className={s.removeItemButton}
                >
                  Видалити
                </button>
              </li>
            ))}
          </ul>
        </div>
        <br />
        <div className={s.totalCheckOut}>
          <p className={s.total}>Загальна вартість: {total} грн.</p>
          <button onClick={handleCheckout} className={s.checkoutButton}>
            Купити
          </button>
        </div>
      </div>

      {openModal && (
        <ProductModalWindow
          closeModalWindow={closeModalWindow}
          modalVariants={modalVariants}
          imageVariants={imageVariants}
          textColor={textColor}
          selectedItem={selectedItem}
          CharacteristicsTable={CharacteristicsTable}
          basketProducts={basketProducts}
          setBasketProducts={setBasketProducts}
        />
      )}
    </div>
  );
}

export default Basket;
