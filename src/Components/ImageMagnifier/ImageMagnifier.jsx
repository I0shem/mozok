import React, { useEffect, useRef, useState } from "react";
import s from "./ImageMagnifier.module.css";
const ImageMagnifier = ({ selectedImage }) => {
  // Визначення стану для відображення лупи
  const [magnifierVisible, setMagnifierVisible] = useState(false);
  // Створення посилань на зображення та лупу
  const magnifierRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    const img = imgRef.current;
    const magnifier = magnifierRef.current;
    const magnification = 2;
    const magnifierSize = 100;
    // Функція для переміщення лупи при русі миші
    const moveMagnifier = (e) => {
      var pos, x, y;
      e.preventDefault();
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;

      if (x > img.width - magnifierSize / magnification) {
        x = img.width - magnifierSize / magnification;
      }
      if (x < magnifierSize / magnification) {
        x = magnifierSize / magnification;
      }
      if (y > img.height - magnifierSize / magnification) {
        y = img.height - magnifierSize / magnification;
      }
      if (y < magnifierSize / magnification) {
        y = magnifierSize / magnification;
      }
      magnifier.style.left = x - magnifierSize + "px";
      magnifier.style.top = y - magnifierSize + "px";
      magnifier.style.backgroundPosition =
        "-" +
        (x * magnification - magnifierSize) +
        "px -" +
        (y * magnification - magnifierSize) +
        "px";
      magnifier.style.backgroundImage = "url('" + img.src + "')";
      magnifier.style.display = "block";
    };
    // Додавання та видалення слухачів подій при зміні видимості лупи
    if (magnifierVisible) {
      magnifier.addEventListener("mousemove", moveMagnifier);
      img.addEventListener("mousemove", moveMagnifier);
    }

    return () => {
      magnifier.removeEventListener("mousemove", moveMagnifier);
      img.removeEventListener("mousemove", moveMagnifier);
    };
    function getCursorPos(e) {
      var a,
        x = 0,
        y = 0;
      e = e || window.event;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  }, [magnifierVisible]);
  return (
    <>
      <div
        class={s.img_magnifier_container}
        onMouseEnter={() => setMagnifierVisible(true)}
        onMouseLeave={() => setMagnifierVisible(false)}
      >
        <img
          ref={imgRef}
          id="magnifiedImage"
          src={selectedImage}
          alt="failedToLoad"
          loading="lazy"
          className={s.productImage}
        />
        <div
          ref={magnifierRef}
          className={magnifierVisible ? s.magnifier : ""}
        ></div>
      </div>
    </>
  );
};
export default ImageMagnifier;
