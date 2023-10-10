import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import CatalogData from "./CatalogData";
const CatalogHeaderModal = ({ setCClick }) => {
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
    <div className={s.topBannersContainerModal} onMouseLeave={handleMouseLeave}>
      <div className={s.topBannerHeader}>
        {CatalogData.map((item, index) => (
          <li key={index} onMouseEnter={() => handleMouseEnter(item)}>
            {item.icon}
            {item.title}
          </li>
        ))}
      </div>

      {activeItem && (
        <div className={s.catalogModalWindow}>
          <div className={s.catalogItemFP}>
            <ul>
              {activeItem.links.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.to}
                  className={s.link}
                  activeClassName={s.linkActive}
                  onClick={() => setCClick(false)}
                >
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

export default CatalogHeaderModal;
