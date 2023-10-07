import React, { useState, useEffect } from "react";
import s from "./User.module.css";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { AnimatePresence, motion } from "framer-motion";
import ProductModalWindow from "../ProductModalWindow/ProductModalWindow.jsx";
import Card from "../cards/card";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [comparedProducts, setComparedProducts] = useState([]);
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
  const ModalInfoVariants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: { opacity: 0, x: "10%" },
  };
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        setLoading(true);
        setUser(u);
        fetchUserInfo(u.uid);
        const endpoint = `https://eu-west-2.aws.data.mongodb-api.com/app/mozok-store-yrvzc/endpoint/getlikedItems`;

        axios
          .get(endpoint, {
            params: { userId: u.uid },
            headers: { "Content-Type": "application/json" },
          })
          .then((response) => {
            console.log("API response data:", response.data);

            // Check for errors in the response
            if (response.data.error) {
              setError(response.data.error);
            } else {
              setLikedProducts(response.data);
              setError(null);
            }
          })
          .catch((err) => {
            console.error("API Error:", err);
            console.error("Error Details:", err.response?.data);
            setError("An error occurred while fetching data");
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

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
  const fetchUserInfo = async (userId) => {
    const db = getFirestore();
    const userDocRef = doc(db, "users", userId);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      setUserInfo((prevState) => ({ ...prevState, ...userData }));
      setComparedProducts(userData.comparedProducts || []);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const saveChanges = async () => {
    const db = getFirestore();
    const userDocRef = doc(db, "users", user.uid);

    await updateDoc(userDocRef, userInfo);
    setIsEditing(false);
  };
  const delChanges = async () => {
    setIsEditing(false);
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
  return (
    <div className={s.UserContent}>
      <div className={s.userProfileContainer}>
        {user ? (
          <>
            <h2>Профіль користувача: {user.email}</h2>
            {isEditing ? (
              <div>
                <label>
                  Ім'я:
                  <input
                    type="text"
                    name="name"
                    value={userInfo.name || ""}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Прізвище:
                  <input
                    type="text"
                    name="surname"
                    value={userInfo.surname || ""}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  E-mail:
                  <input
                    type="text"
                    name="email"
                    value={userInfo.email || ""}
                    onChange={handleInputChange}
                  />
                </label>
                <label>
                  Телефон:
                  <input
                    type="text"
                    name="phone"
                    value={userInfo.phone || ""}
                    onChange={handleInputChange}
                  />
                </label>{" "}
                <label>
                  Пароль:
                  <input
                    type="text"
                    name="password"
                    value={userInfo.password || ""}
                    onChange={handleInputChange}
                  />
                </label>
                <button onClick={saveChanges}>Зберегти зміни</button>
                <button onClick={delChanges} className={s.doNotSaveButton}>
                  Скасувати зміни
                </button>
              </div>
            ) : (
              <div>
                <p>Ім'я: {userInfo.name}</p>
                <p>Прізвище: {userInfo.surname}</p>
                <p>Телефон: {userInfo.phone}</p>

                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                <div className={s.items}>
                  Відібрані товари:
                  {likedProducts.map((i) => (
                    <Card
                      item={i}
                      userID={user.uid}
                      setSelectedItem={setSelectedItem}
                      setOpenModal={setOpenModal}
                      likedProducts={likedProducts}
                    />
                  ))}
                </div>
                {comparedProducts.length > 0 && (
                  <>
                    <h3>Збережені порівняння</h3>
                    <ul>
                      {comparedProducts.map((product) => (
                        <li key={product.id}>{product}</li>
                      ))}
                    </ul>
                  </>
                )}

                <button onClick={() => setIsEditing(true)}>
                  Редагувати профіль
                </button>
              </div>
            )}
          </>
        ) : (
          <p>Будь ласка, увійдіть в систему</p>
        )}
      </div>
      <AnimatePresence>
        {openModal && (
          <ProductModalWindow
            closeModalWindow={closeModalWindow}
            modalVariants={modalVariants}
            imageVariants={imageVariants}
            textColor={textColor}
            selectedItem={selectedItem}
            ModalInfoVariants={ModalInfoVariants}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default User;
