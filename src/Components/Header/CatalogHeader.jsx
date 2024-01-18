import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CatalogData from "./CatalogData";
import s from "./Header.module.css";

const CatalogHeader = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const handleMouseEnter = (item) => {
    if (timeoutId) clearTimeout(timeoutId);
    setActiveItem(item);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => setActiveItem(null), 300);
    setTimeoutId(id);
  };
  return (
    <div
      id="catalog"
      className={s.topBannersContainer}
      onMouseLeave={handleMouseLeave}
    >
      <div className={s.topBannerHeader}>
        {CatalogData.map((item, index) => (
          <li key={index} onMouseEnter={() => handleMouseEnter(item)}>
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
      </div>

      {activeItem && (
        <div className={s.catalogModalWindow}>
          <div className={s.catalogItemFP}>
            <ul>
              {activeItem.links.map((link, index) => (
                <NavLink key={index} to={link.to} className={s.link}>
                  <p>{link.label}</p>
                </NavLink>
              ))}
            </ul>
          </div>

          <div className={s.catalogItemSP}>
            <img
              className={s.catalogImage}
              src={activeItem.productImage}
              alt={activeItem.title}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogHeader;
