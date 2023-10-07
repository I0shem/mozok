import React, { useState } from "react";
import s from "./auth.module.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { motion } from "framer-motion";
import { doc, setDoc } from "firebase/firestore";
import { toast } from "sonner";
// rafce
const SignUp = ({ setShowSignUp }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);
  const SignUp = (e) => {
    e.preventDefault();

    if (
      !userEmail ||
      !userPassword ||
      !userName ||
      !userSurname ||
      !userPhone
    ) {
      setError("Заповніть усі поля!");
      return;
    }
    setLoading(true);
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then(async (userCredential) => {
        console.log(userCredential);
        const uid = userCredential.user.uid;

        const userDocRef = doc(db, "users", uid);

        await setDoc(userDocRef, {
          name: userName,
          surname: userSurname,
          phone: userPhone,
          email: userEmail,
          password: userPassword,
          likedProducts: [],
          comparedProducts: [],
        });
        setLoading(false);
        closeSignUp();
      })

      .catch((err) => {
        console.log(err);
        toast.error(
          "Помилка при створенні аккаунту. Перевірте дані та спробуйте знову."
        );
        setLoading(false);
      });
  };
  const closeSignUp = () => {
    setShowSignUp(false);
    const body = document.querySelector("body");
    body.style.overflow = "auto";
  };
  return (
    <div className={s.SignInContainer} onClick={() => closeSignUp()}>
      <div
        className={s.InnerSignUpContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={s.messageE}>
          {loading && <p>Loading...</p>}

          {error && error.map((errMsg, index) => <p key={index}>{errMsg}</p>)}
        </div>
        <form action="" onSubmit={SignUp}>
          <div className={s.InnerSignInText}>Створити аккаунт:</div>
          <input
            type="text"
            placeholder="Ім'я"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Прізвище"
            value={userSurname}
            onChange={(e) => setUserSurname(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Телефон"
            value={userPhone}
            onChange={(e) => setUserPhone(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Ел. пошта"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            className={s.BtnLogin}
            required
          >
            Зареєструватися
          </motion.button>
        </form>{" "}
      </div>
    </div>
  );
};

export default SignUp;
