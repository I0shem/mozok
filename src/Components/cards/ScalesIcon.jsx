import { PiScalesFill, PiScalesLight } from "react-icons/pi";
import { IconContext } from "react-icons";
import s from "./card.module.css";

const ScalesIcon = ({ scales, scalesClickTrue, scalesClickFalse }) => (
  <div className={s.ScaleSVG} onClick={(e) => e.stopPropagation()}>
    <IconContext.Provider value={{ className: s.scalesBtn, size: "40px" }}>
      {scales ? (
        <PiScalesFill onClick={scalesClickFalse} />
      ) : (
        <PiScalesLight onClick={scalesClickTrue} />
      )}
    </IconContext.Provider>
  </div>
);

export default ScalesIcon;
