/* eslint-disable react-hooks/exhaustive-deps */
import s from "./Mozok.module.css";
import { Routes, Route } from "react-router-dom";
import Stores from "./Components/Stores/Stores";
import User from "./Components/User/User";
import ServiceCentre from "./Components/ServiceCentre/ServiceCentre";
import ForClients from "./Components/ForClients/ForClients";
import LoyaltyProgram from "./Components/LoyaltyProgram/LoyaltyProgram";
import Home from "./Components/Home/Home";
import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import ProductPage from "./Components/ProductPage/ProductPage";
import AuthDetails from "./Components/Auth/AuthDetails";
import LoadingLogo from "./Components/LoadingLogo/LoadingLogo";
import Promotion from "./Components/Promotion/Promotion";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import axios from "axios";
function Mozok() {
  const [logo, setLogo] = useState(true);
  const [myUser, setMyUser] = useState({
    uid: "",
  });
  useEffect(() => {
    setTimeout(() => {
      setLogo(false);
    }, 5000);
    // eslint-disable-next-line
  }, []);
  const [userInfo, setUserInfo] = useState({});
  const [productsToCompare, setProductsToCompare] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [basketProducts, setBasketProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchUserInfo = async (userId) => {
    const db = getFirestore();
    const userDocRef = doc(db, "users", userId);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      setUserInfo((prevState) => ({ ...prevState, ...userData }));
    }
  };
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        setLoading(true);
        setMyUser(u);
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
            setError("");
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setMyUser(null);
      }
    });

    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {logo ? (
        <LoadingLogo />
      ) : (
        <div id="myBody" className={s.noScroll}>
          <Header
            productsToCompare={productsToCompare}
            setProductsToCompare={setProductsToCompare}
            setMyUser={setMyUser}
            myUser={myUser}
            likedProducts={likedProducts}
            setLikedProducts={setLikedProducts}
            basketProducts={basketProducts}
            setBasketProducts={setBasketProducts}
            userInfo={userInfo}
          />
          <main id="content" className={s.PageContent}>
            <Routes>
              <Route
                path="/mozok/"
                element={
                  <Home
                    myUser={myUser}
                    basketProducts={basketProducts}
                    setBasketProducts={setBasketProducts}
                  />
                }
              />
              <Route path="/mozok/stores" element={<Stores />} />
              <Route
                path="/mozok/user"
                element={
                  <User
                    likedProducts={likedProducts}
                    setLikedProducts={setLikedProducts}
                    basketProducts={basketProducts}
                    setBasketProducts={setBasketProducts}
                    userInfo={userInfo}
                    setUserInfo={setUserInfo}
                    error={error}
                    loading={loading}
                    myUser={myUser}
                    auth={auth}
                  />
                }
              />
              <Route
                path="/mozok/loyalty_program"
                element={<LoyaltyProgram />}
              />
              <Route
                path="/mozok/productpage/:productName"
                element={
                  <ProductPage
                    productsToCompare={productsToCompare}
                    setProductsToCompare={setProductsToCompare}
                    basketProducts={basketProducts}
                    setBasketProducts={setBasketProducts}
                  />
                }
              />
              <Route path="/mozok/service_centre" element={<ServiceCentre />} />
              <Route path="/mozok/forclients" element={<ForClients />} />
              <Route path="/mozok/promotion" element={<Promotion />} />
            </Routes>
          </main>
          <footer className={s.footer}>
            <Footer />
          </footer>
          <AuthDetails />
        </div>
      )}
    </>
  );
}

export default Mozok;
