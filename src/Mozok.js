import s from "./Mozok.module.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import User from "./Components/User/User";
import ServiceCentre from "./Components/ServiceCentre/ServiceCentre";
import Basket from "./Components/Basket/Basket";
import Reviews from "./Components/Reviews/Reviews";

function Mozok() {
  return (
    <div className={s.mozok}>
      <BrowserRouter>
        <header className={s.header}></header>
        <main className={s.content}>
          <div className={s.TopBanner}>
            <ul className={s.Menu}>
              <NavLink
                className={s.Link}
                to="/mozok/"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                  };
                }}
                end
              >
                <li id="home">Home</li>
              </NavLink>
              <NavLink
                className={s.Link}
                to="/mozok/About"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                  };
                }}
              >
                <li id="about">About</li>
              </NavLink>
              <NavLink
                className={s.Link}
                to="/mozok/User"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                  };
                }}
              >
                <li id="user">User</li>
              </NavLink>
              <NavLink
                className={s.Link}
                to="/mozok/ServiceCentre"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                  };
                }}
              >
                <li id="serviceCentre">ServiceCentre</li>
              </NavLink>
              <NavLink
                className={s.Link}
                to="/mozok/Basket"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                  };
                }}
              >
                <li id="basket">Basket</li>
              </NavLink>
              <NavLink
                className={s.Link}
                to="/mozok/Reviews"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "red" : "black",
                  };
                }}
              >
                <li id="reviews">Reviews</li>
              </NavLink>
            </ul>
          </div>

          <Routes>
            <Route path="/mozok/" element={<Home />} />
            <Route path="/mozok/About" element={<About />} />
            <Route path="/mozok/User" element={<User />} />
            <Route path="/mozok/Basket" element={<Basket />} />
            <Route path="/mozok/Reviews" element={<Reviews />} />
            <Route path="/mozok/ServiceCentre" element={<ServiceCentre />} />
          </Routes>
        </main>
        <footer className={s.footer}></footer>
      </BrowserRouter>
    </div>
  );
}

export default Mozok;
