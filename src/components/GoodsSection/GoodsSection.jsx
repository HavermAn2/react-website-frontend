import goods from "./GoodsSection.module.css";
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
  function onSecetedCard(cardTitle, cardDesc) {
    onSelected({ title: cardTitle, desc: cardDesc });
    isOpen(true);
  }
  return (
    <section className={goods.containeer} id="good-cards-containeer">
      <div className={goods.cards}>
        {goodsText.map((item, index) => (
          <div
            className={
              index % 2 === 0 ? `${goods.card} ${goods.odd}` : goods.card
            }
            style={{ top: 35 * index }}
          >
            <div className={goods.cardText}>
              <h1>{item.h1}</h1>
              <h2>{item.h2}</h2>
              <h3>{item.h3}</h3>
              <a
                href="#"
                id="open-booking-btn"
                onClick={() => {
                  onSecetedCard(item.h1, item.h2);
                }}
              >
                Book Now
              </a>
            </div>
            <div className={goods.cardImg}>
              <img src="/Frame 39.png" /> {/*imgUrl*/}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
