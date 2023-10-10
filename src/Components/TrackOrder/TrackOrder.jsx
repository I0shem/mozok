import React, { useState } from "react";
import s from "./TrackOrder.module.css";

const TrackOrder = ({ setShowTrackOrder }) => {
  const [orderNumber, setOrderNumber] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const handleTrackOrder = () => {
    // Симулюємо затримку мережі з setTimeout
    setOrderStatus("Завантаження...");
    setTimeout(() => {
      // Після затримки ми "отримуємо" стан замовлення.
      // В реальному сценарії тут був би запит до API.

      // Тут можна додати логіку для різних номерів замовлень або станів, якщо хочете додати різноманіття в симуляцію.
      const simulatedOrderStatus = "Ваше замовлення в дорозі!";

      setOrderStatus(simulatedOrderStatus);
    }, 2000); // Затримка у 2000 мілісекунд (2 секунди)
  };
  return (
    <div
      className={s.TrackOrderModalOuter}
      onClick={() => setShowTrackOrder(false)}
    >
      <div className={s.trackOrderModal} onClick={(e) => e.stopPropagation()}>
        <div className={s.modalHeader}>
          <h2>Відстежити замовлення</h2>
          <button
            className={s.closeButton}
            onClick={() => setShowTrackOrder(false)}
          >
            X
          </button>
        </div>
        <div className={s.modalBody}>
          <label for="order-id">Order ID:</label>
          <input
            type="text"
            id="order-id"
            name="order-id"
            value={orderNumber}
            placeholder="Номер замовлення або трекінг-код"
            onChange={(e) => setOrderNumber(e.target.value)}
          />
          <button className={s.trackButton} onClick={handleTrackOrder}>
            Відстежити
          </button>
          <p className={s.orderStatus}>{orderStatus}</p>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
