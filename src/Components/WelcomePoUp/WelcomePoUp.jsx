import React from "react";
import s from "./WelcomePoUp.module.css";
import { motion } from "framer-motion";
const WelcomePoUp = ({ ftext, stext }) => {
  return (
    <div className={s.WelcomePoUpContainer}>
      <motion.div
        initial={{ opacity: 0, scale: 0.7, borderColor: "red" }}
        animate={{ opacity: 1, scale: 1, borderColor: "transparent" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={s.WelcomePoUpInnerContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <span>{ftext}</span>
        <span>{stext}</span>
      </motion.div>
    </div>
  );
};

export default WelcomePoUp;
