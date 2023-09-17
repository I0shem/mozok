import React, { useState } from "react";
import s from "./auth.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { motion } from "framer-motion";
import SignUp from "./SignUp";
import ErrorPopUp from "./../ErrorPoUp/ErrorPopUp";
import { AnimatePresence } from "framer-motion";
// rafce
const SignIn = ({ closeSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [popError, setPopError] = useState(false);
  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        closeSignIn();
      })
      .catch((err) => {
        setPopError(true);
        setTimeout(() => setPopError(false), 5000);
        console.log(err);
      });
  };
  return (
    <div className={s.SignInContainer} onClick={() => closeSignIn()}>
      {popError ? (
        <AnimatePresence>
          <ErrorPopUp setPopError={setPopError} />
        </AnimatePresence>
      ) : (
        <></>
      )}

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
        <SignUp />
      </div>
    </div>
  );
};

export default SignIn;
