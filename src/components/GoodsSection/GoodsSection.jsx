import goods from "./GoodsSection.module.css";
import { useEffect, useState } from "react";

export default function GoodsSection({ onSelected, isOpen }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://zxzpm6yxp7.eu-central-1.awsapprunner.com/get_services")
      .then((r) => r.json())
      .then((json) => {
        const list = (json.data ?? []).map(
          ([id, title, duration, price, img]) => ({
            id,
            title,
            duration,
            price,
            img,
          }),
        );
        setData(list);
      })
      .catch(console.error);
  }, []);

  function onSecetedCard(cardTitle, cardDesc, cardImg) {
    onSelected({ title: cardTitle, desc: cardDesc, image: cardImg });
    isOpen(true);
  }

  return (
    <section className={goods.containeer} id="good-cards-containeer">
      <div className={goods.cards}>
        {data.map((item, index) => (
          <div
            className={
              index % 2 === 0 ? `${goods.card} ${goods.odd}` : goods.card
            }
            style={{ top: 35 * index }}
            key={item.id}
          >
            <div className={goods.cardText}>
              <h1>{item.title}</h1>
              <h2>{item.duration}</h2>
              <h3>{item.price}</h3>
              <a
                href="#"
                id="open-booking-btn"
                onClick={() => {
                  onSecetedCard(item.title, item.duration, item.img);
                }}
              >
                Book Now
              </a>
            </div>
            <div className={goods.cardImg}>
              <img
                src={`https://zxzpm6yxp7.eu-central-1.awsapprunner.com/${item.img}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
