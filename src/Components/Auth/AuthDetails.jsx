import React, { useEffect } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Toaster, toast } from "sonner"; // Import toast from sonner-toast

const AuthDetails = () => {
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        toast.success("Успішний вхід, приємних покупок!", {
          duration: 5000,
          position: "top-center",
        });
      }
    });
    return () => {
      listen();
    }; // eslint-disable-next-line
  }, []);

  return <Toaster richColors />;
};

export default AuthDetails;
