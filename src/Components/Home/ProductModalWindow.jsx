import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import s from "./Home.module.css";
export default function ProductModalWindow({
  closeModalWindow,
  modalVariants,
  imageVariants,
  textColor,
  selectedItem,
  CharacteristicsTable,
}) {
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
              <img src={selectedItem.image} alt="failedToLoad"></img>
            </motion.div>
            <motion.div className={s.innerItemModalSecondContainer}>
              <motion.h2>{selectedItem.title}</motion.h2>{" "}
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
          {CharacteristicsTable(selectedItem.characteristics)}
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
