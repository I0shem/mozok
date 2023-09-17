import React, { useState } from "react";
import s from "./auth.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { motion } from "framer-motion";
// rafce
const SignUp = ({ setShowAuth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form action="" onSubmit={SignUp}>
      <div className={s.InnerSignInText}>Створити аккаунт:</div>
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
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        type="submit"
        className={s.BtnLogin}
      >
        Зареєструватися
      </motion.button>
    </form>
  );
};

export default SignUp;
