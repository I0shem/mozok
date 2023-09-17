import React from "react";
import s from "./ErrorPopUp.module.css";
import { motion } from "framer-motion";
const ErrorPopUp = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, borderColor: "red" }}
      animate={{ opacity: 1, scale: 1, borderColor: "transparent" }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={s.ErrorPopUpContainer}
      onClick={(e) => e.stopPropagation()}
    >
      <span>Неправильний пароль або електронна пошта.</span>
      <span>Перевірте дані та спробуйте ще раз.</span>
    </motion.div>
  );
};

export default ErrorPopUp;
