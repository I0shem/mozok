import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import WelcomePoUp from "../WelcomePoUp/WelcomePoUp";
const AuthDetails = () => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [showPopUpLoggedUser, setShowPopUpLoggedUser] = useState(false);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedUser(user);
        console.log(user);
        setShowPopUpLoggedUser(true);
        setTimeout(() => setShowPopUpLoggedUser(false), 5000);
      } else {
        setLoggedUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  return (
    <>
      {showPopUpLoggedUser ? (
        <WelcomePoUp ftext="Успішний вхід" stext="Приємних покупок!" />
      ) : (
        <></>
      )}

      {loggedUser ? (
        <button style={{ zIndex: 294, position: "fixed" }}>Signed In</button>
      ) : (
        <div style={{ zIndex: 294, position: "fixed" }}>Signed Out</div>
      )}
    </>
  );
};

export default AuthDetails;
