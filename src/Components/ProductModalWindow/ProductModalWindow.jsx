import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import s from "../Home/Home.module.css";
import ImageMagnifier from "../ImageMagnifier/ImageMagnifier";
import ReactStars from "react-stars";
export default function ProductModalWindow({
  closeModalWindow,
  modalVariants,
  imageVariants,
  textColor,
  selectedItem,
  ModalInfoVariants,
}) {
  function getRandomInt(max) {
    return Math.floor(Math.random(1) * max);
  }
  return (
    <AnimatePresence>
      <div className={s.itemModal} onClick={() => closeModalWindow()}>
        <motion.div
          variants={modalVariants}
          layoutId={selectedItem._id}
          className={s.innerItemModal}
          onClick={(e) => e.stopPropagation()}
        >
          <AiOutlineClose
            className={s.innerItemModalCloseBtn}
            onClick={() => closeModalWindow()}
          />
          <motion.div className={s.innerItemModalContainer}>
            <motion.div
              className={s.innerItemModalFirstContainer}
              variants={imageVariants}
            >
              <ImageMagnifier selectedImage={selectedItem.image} />
            </motion.div>
            <motion.div className={s.innerItemModalSecondContainer}>
              <motion.h2>{selectedItem.title}</motion.h2>
              <div className={s.stars}>
                <ReactStars
                  count={5}
                  value={getRandomInt(5)}
                  size={36}
                  color2={"#ffd700"}
                />
              </div>
              <motion.div className={s.availability}>В наявності</motion.div>
              {textColor(selectedItem)}
              <motion.button
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                type="submit"
                className={s.buyButton}
              >
                Купити
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.h3 className={s.characteristicsModal}>
            Характеристики:
          </motion.h3>
          <motion.table variants={ModalInfoVariants}>
            {Object.entries(selectedItem.characteristics).map(
              ([key, value]) => (
                <tr key={key}>
                  <th>{key}</th>
                  <td>{value}</td>
                </tr>
              )
            )}
          </motion.table>
          <motion.button
            className={s.closeButton}
            onClick={() => closeModalWindow()}
          >
            Закрити{" "}
          </motion.button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
