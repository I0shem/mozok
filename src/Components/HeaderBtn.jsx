import React, { useState } from "react";
import s from "../Mozok.module.css";
import { BiChevronDown } from "react-icons/bi";

export function HeaderBtn({ text, col, displayModal, content, weight }) {
  const [show, setShow] = useState(false);
  const style = {
    transform: show ? "rotate(180deg)" : "",
    transition: "transform 150ms ease", // smooth transition
  };

  return (
    <div className={s.headerBtnContainer}>
      <button
        type="button"
        className={s.dropDownBtn}
        style={{ color: col, fontWeight: weight }}
      >
        {text}{" "}
        {displayModal ? (
          <BiChevronDown
            className={s.headerBtn}
            id="btn"
            onClick={() => setShow(!show)}
            style={style}
          />
        ) : (
          ""
        )}
      </button>

      {show ? (
        <>
          <div className={s.modalHeader}>
            <ul>
              {content.map((i) => (
                <li>{i}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
