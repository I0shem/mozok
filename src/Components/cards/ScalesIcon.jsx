import { PiScalesFill, PiScalesLight } from "react-icons/pi";
import { IconContext } from "react-icons";
import s from "./card.module.css";

const ScalesIcon = ({ scales, scalesClick }) => (
  <div onClick={(e) => e.stopPropagation()}>
    <IconContext.Provider value={{ className: s.scalesBtn, size: "40px" }}>
      {scales ? (
        <PiScalesLight onClick={scalesClick} />
      ) : (
        <PiScalesFill onClick={scalesClick} />
      )}
    </IconContext.Provider>
  </div>
);

export default ScalesIcon;
