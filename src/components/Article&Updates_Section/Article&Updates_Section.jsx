import article from "./Article&Updates_Section.module.css";
import { useState } from "react";
export const articles = [
  {
    h1: "March 22, 2022",
    p: "Dubai Bling is a Netflix  reality show featuring cast members who are among the high-net-worth  individuals from the glamorous city of UAE.",
    imgUrl: "/Rectangle 1.png",
  },
  {
    h1: "October 30, 2022",
    p: "It was an honor to be a part of this magical lifetime moment! Kris And Brianna Fade Wedding",
    imgUrl: "/Rectangle 1.png",
  },
  {
    h1: "December 29, 2022",
    p: "Slavrada got a Guinness World Record for the longest marathon harp playing - 31 hour 1 minute and 54 seconds",
    imgUrl: "/Rectangle 1.png",
  },
  {
    h1: "March 22, 2022",
    p: "Dubai Bling is a Netflix  reality show featuring cast members who are among the high-net-worth  individuals from the glamorous city of UAE.",
    imgUrl: "/Rectangle 1.png",
  },
  {
    h1: "October 30, 2022",
    p: "It was an honor to be a part of this magical lifetime moment! Kris And Brianna Fade Wedding",
    imgUrl: "/Rectangle 1.png",
  },
  {
    h1: "December 29, 2022",
    p: "Slavrada got a Guinness World Record for the longest marathon harp playing - 31 hour 1 minute and 54 seconds",
    imgUrl: "/Rectangle 1.png",
  },
  {
    h1: "March 22, 2022",
    p: "Dubai Bling is a Netflix  reality show featuring cast members who are among the high-net-worth  individuals from the glamorous city of UAE.",
    imgUrl: "/Rectangle 1.png",
  },
  {
    h1: "October 30, 2022",
    p: "It was an honor to be a part of this magical lifetime moment! Kris And Brianna Fade Wedding",
    imgUrl: "/Rectangle 1.png",
  },
  {
    h1: "December 29, 2022",
    p: "Slavrada got a Guinness World Record for the longest marathon harp playing - 31 hour 1 minute and 54 seconds",
    imgUrl: "/Rectangle 1.png",
  },
];
export default function ArticleSection() {
  const [moved, setMoved] = useState(0);
  function handleMoveRight() {
    if (moved > -articles.length + 2) setMoved((prev) => prev - 1);
  }
  function handleMoveLeft() {
    if (moved < 0) {
      setMoved((prev) => prev + 1);
    }
  }

  return (
    <section className={article.articlesAndUpdates} id="articles-and-updates">
      <div className={article.textContainer}>
        <h1>ARTICLES  & UPDATES</h1>
        <p>
          Make sure you never miss a single Slavrada update! For new
          articles and album releases, reviews, interviews and more, stay in the
          know with this regularly updated news section. Read on to find out
          more.
        </p>
      </div>
      <div className={article.slider}>
        <button
          className={`${article.sliderBtn} ${article.prev}`}
          onClick={handleMoveLeft}
        >
          ←
        </button>
        <div className={article.viewport}>
          <div className={article.cards} id="cards-container">
            {articles.map((item) => (
              <div
                key={item.id}
                className={`${article.card} ${article.cardTemplate}`}
                style={{ transform: `translateX(${120 * moved}%)` }}
              >
                <div className={article.cardView}>
                  <img src={item.imgUrl} />
                </div>
                <div className={article.cardTxt}>
                  <h1>{item.h1}</h1>
                  <p>{item.p}</p>
                </div>
                <div className={article.findOutMore}>
                  <a href="#" className={article.findOutMoreBtn}>
                    Find Out More
                  </a>
                </div>
              </div>
            ))}
          </div>
          <button
            className={`${article.sliderBtn} ${article.next}`}
            onClick={handleMoveRight}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
