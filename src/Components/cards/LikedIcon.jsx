import { BsHeart, BsHeartFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import s from "./card.module.css";

const LikedIcon = ({ isLiked, onClick, deleteItem }) => (
  <div onClick={(e) => e.stopPropagation()}>
    <IconContext.Provider value={{ className: s.heartBtn, size: "40px" }}>
      {isLiked ? (
        <BsHeartFill onClick={deleteItem} />
      ) : (
        <BsHeart onClick={onClick} />
      )}
    </IconContext.Provider>
  </div>
);

export default LikedIcon;
