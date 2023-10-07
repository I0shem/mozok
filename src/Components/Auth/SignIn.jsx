import React, { useState } from "react";
import s from "./auth.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { motion } from "framer-motion";
import { toast } from "sonner";
// rafce
const SignIn = ({ closeSignIn, setShowSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        closeSignIn();
      })
      .catch((err) => {
        toast.error(
          "Неправильний пароль або електронна пошта. Перевірте дані та спробуйте ще раз."
        );
        console.log(err);
      });
  };
  const openSignUp = () => {
    setShowSignUp(true);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  };
  return (
    <div className={s.SignInContainer} onClick={() => closeSignIn()}>
      <div
        className={s.InnerSignInContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div type="button" className={s.CloseBtn} onClick={() => closeSignIn()}>
          X
        </div>
        <form action="" onSubmit={SignIn}>
          <div className={s.InnerSignInText}>Вхід:</div>
          <input
            type="email"
            placeholder="Уведіть зареєстровану ел. пошту"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Уведіть пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className={s.BtnLogin}
          >
            Увійти
          </motion.button>
        </form>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          className={s.BtnLogin}
          onClick={() => {
            closeSignIn();
            openSignUp();
          }}
        >
          Зареєструватися
        </motion.button>
      </div>
    </div>
  );
};

export default SignIn;
