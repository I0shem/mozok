import React, { useState } from "react";
import s from "./PurchaseForm.module.css";
import { toast } from "sonner";
const PurchaseForm = ({
  setShowCheckOut,
  userInfo,
  setBasketProducts,
  setShowBasket,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Замовлення оформлено! `);
    setShowCheckOut(false);
    setBasketProducts([]);
    setShowBasket(false);
  };
  console.log(userInfo);
  const [formDetails, setFormDetails] = useState({
    name: userInfo.name,
    surname: userInfo.surname,
    email: userInfo.email,
    phoneNumber: "+380",
    accountNumber: "",
    city: "",
    street: "",
    homeNumber: "",
    doNotCall: false,
    cvv: "",
    expiryMonth: "",
    expiryYear: "",
  });
  const handleCardDisplay = () => {
    const rawText = [...formDetails.accountNumber.split(" ").join("")];
    const creditCard = [];
    rawText.forEach((t, i) => {
      if (i % 4 === 0 && i !== 0) creditCard.push(" ");
      creditCard.push(t);
    });
    return creditCard.join("");
  };
  const handleCardDetailsInput = (e) => {
    const { name, value } = e.target;
    if (name === "cvv") {
      const numericValue = value.replace(/\D/g, "");
      setFormDetails((prevDetails) => ({
        ...prevDetails,
        [name]: numericValue,
      }));
    } else {
      setFormDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };
  const handleCheckboxChange = () => {
    setFormDetails((prevDetails) => ({
      ...prevDetails,
      doNotCall: !formDetails.doNotCall,
    }));
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const prefix = "+380";

    if (value.length < prefix.length || !value.startsWith(prefix)) {
      setFormDetails((prevDetails) => ({
        ...prevDetails,
        phoneNumber: prefix,
      }));
    } else {
      const cleanedValue = value.slice(prefix.length).replace(/\D/g, "");
      setFormDetails((prevDetails) => ({
        ...prevDetails,
        phoneNumber: prefix + cleanedValue,
      }));
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
          <input
            type="text"
            name="name"
            className={s.input}
            required
            maxLength="80"
            value={formDetails.name}
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Прізвище
          <input
            type="text"
            className={s.input}
            required
            maxLength="80"
            value={userInfo.surname}
          />
        </label>
        <label className={s.label}>
          E-mail
          <input
            type="email"
            className={s.input}
            required
            maxLength="50"
            value={userInfo.email}
          />
        </label>
        <label className={s.label}>
          Номер телефону
          <input
            type="tel"
            name="phoneNumber"
            value={formDetails.phoneNumber}
            onChange={handlePhoneNumberChange}
            className={s.input}
            required
            maxLength="13"
          />
        </label>
        <label className={s.label}>
          Номер карти (Master Card / VISA)
          <input
            type="tel"
            name="accountNumber"
            inputMode="numeric"
            autoComplete="cc-number"
            maxLength="19"
            className={s.input}
            required
            pattern="[0-9\s]{13,19}"
            placeholder="xxxx xxxx xxxx xxxx"
            value={handleCardDisplay()}
            onChange={(e) =>
              setFormDetails((prevDetails) => ({
                ...prevDetails,
                accountNumber: e.target.value,
              }))
            }
          />
        </label>{" "}
        <div className={s.cardDetailsInputs}>
          <label className={s.label}>
            CVV
            <input
              type="text"
              name="cvv"
              value={formDetails.cvv}
              onChange={handleCardDetailsInput}
              className={s.input}
              required
              maxLength="3"
              pattern="\d{3}"
              placeholder="000"
            />
          </label>

          <label className={s.label}>
            Місяць
            <input
              type="text"
              name="expiryMonth"
              value={formDetails.expiryMonth}
              onChange={handleCardDetailsInput}
              className={s.input}
              required
              maxLength="2"
              pattern="(0[1-9]|1[0-2])"
              placeholder="00"
            />
          </label>

          <label className={s.label}>
            Рік
            <input
              type="text"
              name="expiryYear"
              value={formDetails.expiryYear}
              onChange={handleCardDetailsInput}
              className={s.input}
              required
              maxLength="4"
              pattern="\d{4}"
              placeholder="0000"
            />
          </label>
        </div>
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
          <input
            type="checkbox"
            name="doNotCall"
            checked={formDetails.doNotCall}
            onChange={handleCheckboxChange}
          />
        </label>
        <button type="submit" className={s.submitButton}>
          Оформити
        </button>
      </form>
    </div>
  );
};

export default PurchaseForm;
