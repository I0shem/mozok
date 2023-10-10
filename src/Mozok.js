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

function Mozok() {
  const [logo, setLogo] = useState(true);
  const [myUser, setMyUser] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setLogo(false);
    }, 5000);
  }, []);
  const [productsToCompare, setProductsToCompare] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [basketProducts, setBasketProducts] = useState([]);
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
