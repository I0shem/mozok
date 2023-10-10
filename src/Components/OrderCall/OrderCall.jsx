import React, { useState } from "react";
import s from "./OrderCall.module.css";
import { toast } from "sonner";
function OrderCall({ setShowOrderCall }) {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    toast(
      `Шановний ${name}, до Вас вже телефонують наші оператори за номером: ${phoneNumber}`
    );
    setShowOrderCall(false);
  };

  return (
    <div className={s.modal} onClick={() => setShowOrderCall(false)}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          className={s.closeButton}
          onClick={() => setShowOrderCall(false)}
        >
          X
        </button>
        <h2>Замовити дзвінок</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Ім'я:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="phone-number">Номер телефону:</label>
          <input
            type="tel"
            id="phone-number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <button type="submit">Надіслати</button>
        </form>
      </div>
    </div>
  );
}

export default OrderCall;
