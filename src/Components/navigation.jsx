import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Mozok.module.css";

export function Navigation({ text, adress, col }) {
  return (
    <NavLink
      className={s.Link}
      to={adress}
      style={({ isActive }) => {
        return {
          fontWeight: isActive ? 800 : "normal",
        };
      }}
      end
    >
      <div className={s.menuText} style={{ color: col }}>
        {text}
      </div>
    </NavLink>
  );
}
