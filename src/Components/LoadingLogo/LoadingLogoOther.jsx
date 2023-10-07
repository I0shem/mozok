import React from "react";
import s from "./LoadingLogo.module.css";
import { ReactComponent as LogoAnimatedSVG } from "../Images/mozokcss_animated.svg";

const LoadingLogoOther = () => {
  return (
    <div className={s.logoAnimatedContainer}>
      <LogoAnimatedSVG className={s.logoAnimated} />
    </div>
  );
};

export default LoadingLogoOther;
