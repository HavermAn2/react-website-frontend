import goods from "./GoodsSection.module.css";
import { useEffect, useState } from "react";
export const goodsText = [
  {
    h1: "Acoustic Harp",
    h2: "45 min",
    h3: "From 3,000",
    imgUrl: "/...",
  },
  {
    h1: "Acoustic Harp",
    h2: "45 min",
    h3: "From 3,000",
    imgUrl: "/...",
  },
  {
    h1: "Electric Harp",
    h2: "45 min",
    h3: "From 3,000",
    imgUrl: "/...",
  },

  {
    h1: "Acoustic Harp",
    h2: "45 min",
    h3: "From 3,000",
    imgUrl: "/...",
  },
];
export default function GoodsSection({ onSelected, isOpen }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/get_services")
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

  // const cards = data.data;
  function onSecetedCard(cardTitle, cardDesc) {
    onSelected({ title: cardTitle, desc: cardDesc });
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
          >
            <div className={goods.cardText}>
              <h1>{item.title}</h1>
              <h2>{item.duration}</h2>
              <h3>{item.price}</h3>
              <a
                href="#"
                id="open-booking-btn"
                onClick={() => {
                  onSecetedCard(item.title, item.duration);
                }}
              >
                Book Now
              </a>
            </div>
            <div className={goods.cardImg}>
              <img src={`http://127.0.0.1:8000/${item.img}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
