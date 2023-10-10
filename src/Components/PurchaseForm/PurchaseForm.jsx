import React, { useState } from "react";
import s from "./PurchaseForm.module.css";
import { toast } from "sonner";
const PurchaseForm = ({ setShowCheckOut }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Замовлення оформлено! `);
    setShowCheckOut(false);
  };
  function handleInput(e) {
    e.target.value = e.target.value.replace(/\D/g, "");
  }
  const [phoneNumber, setPhoneNumber] = useState("380");

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const prefix = "+380";

    // Check if user is trying to remove the prefix
    if (value.length < prefix.length || !value.startsWith(prefix)) {
      setPhoneNumber(prefix); // Reset to prefix if it's being removed
    } else {
      // Remove any non-numeric character but keep the prefix
      const cleanedValue = value.slice(prefix.length).replace(/\D/g, "");
      setPhoneNumber(prefix + cleanedValue);
    }
  };

  return (
    <div className={s.modal} onClick={() => setShowCheckOut(false)}>
      <form
        className={s.form}
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
      >
        <button
          className={s.closeButton}
          onClick={() => setShowCheckOut(false)}
        >
          X
        </button>
        <h2 className={s.title}>Оформлення замовлення</h2>
        <label className={s.label}>
          Ім'я
          <input type="text" className={s.input} required maxLength="80" />
        </label>
        <label className={s.label}>
          Прізвище
          <input type="text" className={s.input} required maxLength="80" />
        </label>
        <label className={s.label}>
          E-mail
          <input
            type="email"
            className={s.input}
            required
            maxLength="50"
            placeholder="sophie@example.com"
          />
        </label>

        <label className={s.label}>
          Номер телефону
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className={s.input}
            required
            maxLength="13"
          />
        </label>

        <label className={s.label}>
          Номер рахунку
          <input
            type="text"
            onInput={handleInput}
            inputMode="numeric"
            autoComplete="cc-number"
            maxLength="19"
            className={s.input}
            required
          />
        </label>

        <label className={s.label}>
          Місто
          <input type="text" className={s.input} required />
        </label>

        <label className={s.label}>
          Вулиця/Провулок
          <input type="text" className={s.input} required />
        </label>

        <label className={s.label}>
          Номер квартири або будинку
          <input type="text" className={s.input} required />
        </label>
        <label className={s.speclabel}>
          Не дзвонити для підтвердження замовлення
          <input type="radio" />
        </label>
        <button type="submit" className={s.submitButton}>
          Оформити
        </button>
      </form>
    </div>
  );
};

export default PurchaseForm;
