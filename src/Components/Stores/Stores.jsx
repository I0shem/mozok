import React from "react";
import s from "./Stores.module.css";
import MapForStores from "../map/MapForStores";
const Stores = () => {
  const my_stores = [
    {
      id: 0,
      name: "Процесори і Пам'ять",
      resume:
        "Найкращий вибір комп'ютерних компонентів в Україні. Високий рівень обслуговування та широкий асортимент.",
      adress: "вул. Гагаріна, 34, Дніпро, 49000",
      work_schedule: "Пн-Пт: 09:00 - 18:00, Сб: 10:00 - 15:00, Нд: Закрито",
      phones: "+380631112233",
      e_mail: "info@processor-ram.ua",
      position: [48.4430112312443, 35.05015059724272],
      center: [48.412917236731756, 35.051194031564606],
    },
    {
      id: 1,
      name: "Комп'ютерний ВсеСвіт",
      resume:
        "Зручне розташування, професійний персонал, акції та знижки на асортимент.",
      adress: "пл. Соборна, 1, Львів, 79000",
      work_schedule: "Пн-Пт: 10:00 - 19:00, Сб-Нд: 11:00 - 17:00",
      phones: "+380971234567",
      e_mail: "support@compworld.ua",
      position: [49.83962581657866, 24.03314523778786],
      center: [49.80962581657866, 24.03414523778786],
    },
    {
      id: 2,
      name: "ПК Салон",
      resume:
        "Більше ніж просто магазин, це місце, де ви зможете отримати кваліфіковану консультацію та знайти все необхідне для вашого ПК.",
      adress: "просп. Київський, 50, Харків, 61000",
      work_schedule: "Пн-Пт: 09:30 - 19:30, Сб: 10:00 - 16:00, Нд: Закрито",
      phones: "+380661234567",
      e_mail: "salon@pcsalon.ua",
      position: [50.04636796462033, 36.287205704119835],
      center: [50.01636796462033, 36.288205704119835],
    },
    {
      id: 3,
      name: "Все для ПК",
      resume:
        "Широкий вибір комп'ютерних запчастин і аксесуарів за доступними цінами.",
      adress: "вул. Київська, 100, Одеса, 65000",
      work_schedule: "Пн-Пт: 10:00 - 20:00, Сб-Нд: 11:00 - 18:00",
      phones: "+380501112233",
      e_mail: "info@allforpc.ua",
      position: [46.33957461688376, 30.681970993457902],
      center: [46.30957461688376, 30.682970993457902],
    },
    {
      id: 4,
      name: "IT Galaxy",
      resume:
        "Місце, де технології стають доступними. Найновіші комп'ютерні компоненти та аксесуари в наявності.",
      adress: "просп. Перемоги, 25, Київ, 02000",
      work_schedule: "Пн-Пт: 09:00 - 19:00, Сб: 10:00 - 16:00, Нд: Закрито",
      phones: "+380441112233",
      e_mail: "info@itgalaxy.ua",
      position: [50.44991533058906, 30.47229932616826],
      center: [50.41991533058906, 30.47329932616826],
    },
    {
      id: 5,
      name: "Mozok",
      resume:
        "Пропонуємо високоякісні комп'ютерні компоненти та аксесуари від провідних виробників.",
      adress: "м. Вінниця, вул. Соборна 30",
      work_schedule: "Пн-Пт: 09:00 - 19:00, Сб: 10:00 - 16:00, Нд: Закрито",
      phones: "+38 0680000000",
      e_mail: "info@mozok.com.ua",
      position: [49.23333, 28.46964],
      center: [49.20333, 28.46974],
    },
  ];
  return (
    <div className={s.StoresContent}>
      <div className={s.InnerContainer}>
        {my_stores.map((s) => (
          <div key={s.id}>
            <MapForStores
              id={s.id}
              name={s.name}
              resume={s.resume}
              adress={s.adress}
              work_schedule={s.work_schedule}
              phone={s.phones}
              e_mail={s.e_mail}
              position={s.position}
              center={s.center}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stores;
