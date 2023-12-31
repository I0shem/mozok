import React, { useEffect } from "react";
import s from "./ForClients.module.css";
import { scroller, Element } from "react-scroll";
import { useLocation } from "react-router-dom";

const ForClients = () => {
  const location = useLocation();

  useEffect(() => {
    const section = location.hash.substring(1);
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, [location]);

  return (
    <div className={s.ForClients}>
      <h1>Клієнтам:</h1>
      <Element name="discounted-products">
        <section>
          <h2>Уцінені товари</h2>
          <p>
            В розділі "Уцінені товари" ви знайдете товари, які ми пропонуємо за
            зниженими цінами. Це можуть бути товари з відкритою упаковкою, без
            упаковки або з незначними косметичними дефектами, які не впливають
            на функціональні характеристики товару. Всі такі товари пройшли
            повну перевірку якості та готові до експлуатації.
          </p>
          <p>
            Вибір уцінених товарів в нашому магазині дозволяє економити, не
            жертвуючи якістю. Крім того, купуючи уцінені товари, ви допомагаєте
            зменшити обсяги відходів, що позитивно впливає на стан навколишнього
            середовища.
          </p>
          <h2>Переваги покупки уцінених товарів</h2>
          <ul>
            <li>
              Значна економія коштів у порівнянні з покупкою нового товару.
            </li>
            <li>Можливість придбати високоякісний товар за доступною ціною.</li>
            <li>
              Екологічна відповідальність завдяки повторному використанню
              товарів.
            </li>
            <li>Повна гарантія від продавця на уцінені товари.</li>
          </ul>
          <h2>Асортимент уцінених товарів</h2>
          <p>
            Асортимент уцінених товарів в нашому магазині постійно оновлюється.
            Тут ви зможете знайти різноманітну електроніку, побутову техніку,
            гаджети, комп'ютерну техніку та багато іншого. Ми рекомендуємо вам
            регулярно відвідувати цей розділ, щоб не пропустити вигідні
            пропозиції.
          </p>
        </section>
      </Element>
      <Element name="delivery-payment">
        <section>
          <h2>Доставка та оплата</h2>
          <section id="delivery">
            <h2>Доставка</h2>
            <p>
              Ми пропонуємо кілька варіантів доставки, щоб ви могли обрати
              найбільш зручний для вас. Доставка може бути здійснена кур'єрською
              службою, поштовими службами або через пункти самовивозу. Вартість
              та терміни доставки залежать від вибраного варіанту та регіону
              доставки.
            </p>
            <p>
              Після оформлення замовлення наш менеджер зв'яжеться з вами для
              уточнення деталей доставки та оплати. Ви також отримаєте
              трек-номер для відстеження статусу замовлення.
            </p>
          </section>

          <section id="payment">
            <h2>Оплата</h2>
            <p>Ви можете оплатити своє замовлення наступними способами:</p>
            <ul>
              <li>Банківською картою (Visa, MasterCard)</li>
              <li>Готівково при отриманні</li>
              <li>Безготівковий розрахунок для юридичних осіб</li>
              <li>Оплата через термінали самообслуговування</li>
              <li>Електронні гроші (WebMoney, Qiwi, Яндекс.Гроші та інші)</li>
            </ul>
            <p>
              Оплата замовлення здійснюється в гривнях за курсом Національного
              банку України на день оплати.
            </p>
          </section>
        </section>
      </Element>
      <Element name="public-offer">
        <section>
          <h2>Публічна оферта</h2>
          <section id="intro">
            <h3>Вступ</h3>
            <p>
              Цей документ є офіційною пропозицією (офертою) Інтернет-магазину
              "TechStore" щодо укладання договору роздрібного купівлі-продажу
              товарів на вказаних нижче умовах.
            </p>
          </section>

          <section id="terms">
            <h3>Терміни та визначення</h3>
            <p>
              У цьому документі та виниклих з нього відносинах застосовуються
              наступні терміни та визначення:
            </p>
            <ul>
              <li>
                Товар - об'єкти матеріального світу, що пропонуються для продажу
                в Інтернет-магазині.
              </li>
              <li>
                Інтернет-магазин - веб-сайт, розташований в мережі Інтернет за
                адресою example.com, де представлені Товари, що пропонуються
                Продавцем для придбання, а також інша необхідна інформація для
                укладання договорів роздрібного купівлі-продажу.
              </li>
              <li>
                Продавець - компанія, що реалізує товари дистанційним способом
                через Інтернет-магазин.
              </li>
              <li>
                Покупець - фізична особа, яка досягла 18 років, яка має намір
                придбати або придбала Товар у Продавця через Інтернет-магазин.
              </li>
            </ul>
          </section>

          <section id="ordering">
            <h3>Замовлення Товару</h3>
            <p>
              Процес замовлення товару на нашому сайті простий та зручний.
              Дотримуйтесь наступних кроків, щоб замовити товар:
            </p>
            <ol>
              <li>
                Виберіть товар, який вам сподобався, та натисніть кнопку "Додати
                до кошика".
              </li>
              <li>
                Перейдіть до кошика, перевірте вибрані товари та натисніть
                "Оформити замовлення".
              </li>
              <li>Введіть свої контактні дані в форму замовлення.</li>
              <li>Оберіть спосіб доставки та оплати.</li>
              <li>
                Перевірте всю інформацію та натисніть кнопку "Підтвердити
                замовлення".
              </li>
            </ol>
            <p>
              Після оформлення замовлення наш менеджер зв'яжеться з вами для
              підтвердження деталей замовлення. Ви також отримаєте електронний
              лист із підтвердженням замовлення та інформацією для відстеження.
            </p>
            <p>
              Ми працюємо з надійними партнерами з доставки та оплати, щоб
              забезпечити вам комфортний та безпечний процес покупки.
            </p>
          </section>

          <section id="payment">
            <h3>Оплата Товару</h3>
            <p>
              Оплата Товару здійснюється Покупцем у гривнях за допомогою
              банківських карт, електронних грошей, готівкового розрахунку або
              іншим способом, який вказаний на сайті Інтернет-магазину.
            </p>
          </section>

          <section id="delivery">
            <h3>Доставка Товару</h3>
            <p>
              Доставка Товару здійснюється за адресою та в строк, які вказані
              Покупцем при оформленні замовлення. Вартість доставки вказується
              при оформленні замовлення.
            </p>
          </section>
        </section>
      </Element>
      <Element name="contacts">
        <section>
          <h2>Контакти</h2>
          <p>
            Ми завжди готові надати вам необхідну інформацію та допомогу.
            Зв'яжіться з нами будь-яким зручним для вас способом:
          </p>
          <ul>
            <li>Телефон: +380 123 456 789</li>
            <li>Email: support@example.com</li>
            <li>Адреса: вул. Соборна, 123, Вінниця, Україна</li>
          </ul>
          <p>Графік роботи: Пн-Пт з 9:00 до 18:00, Сб з 10:00 до 15:00.</p>
          <p>Ми цінуємо кожного клієнта і завжди раді вам допомогти!</p>
        </section>
      </Element>
      <Element name="all-brands">
        <section>
          <h2>Всі бренди</h2>
          <p>
            У нашому асортименті представлені товари від відомих світових
            брендів. Ми прагнемо надати вам можливість вибору з широкого спектру
            якісних товарів:
          </p>
          <ul>
            <li>Apple</li>
            <li>Samsung</li>
            <li>Sony</li>
            <li>LG</li>
            <li>Philips</li>
            <li>Panasonic</li>
            <li>Bosch</li>
            <li>Siemens</li>
            <li>HP</li>
            <li>Dell</li>
            <li>Lenovo</li>
            <li>Asus</li>
            <li>Acer</li>
            <li>Canon</li>
            <li>Nikon</li>
            <li>і багато інших</li>
          </ul>
          <p>
            Виберіть продукцію від надійних виробників та насолоджуйтесь високою
            якістю та довговічністю придбаних товарів.
          </p>
        </section>
      </Element>
    </div>
  );
};

export default ForClients;
