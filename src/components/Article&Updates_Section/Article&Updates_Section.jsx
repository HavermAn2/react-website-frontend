import article from "./Article&Updates_Section.module.css";
import { useState, useEffect } from "react";

export default function ArticleSection() {
  const [moved, setMoved] = useState(0);
  const [articleData, serArticleData] = useState([]);
  useEffect(() => {
    async function articlesFetch() {
      await fetch(
        "https://zxzpm6yxp7.eu-central-1.awsapprunner.com/get_articles",
      )
        .then((response) => response.json())
        .then((res) => {
          const list = (res.data ?? []).map(([id, h1, p, imgUrl]) => ({
            id,
            h1,
            p,
            imgUrl,
          }));
          serArticleData(list);
        })
        .catch(console.error);
    }
    articlesFetch();
  }, []);
  function handleMoveRight() {
    if (moved > -articleData.length + 2) setMoved((prev) => prev - 1);
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
            {articleData.map((item) => (
              <div
                key={item.id}
                className={`${article.card} ${article.cardTemplate}`}
                style={{ transform: `translateX(${120 * moved}%)` }}
              >
                <div className={article.cardView}>
                  <img
                    src={`https://zxzpm6yxp7.eu-central-1.awsapprunner.com/${item.imgUrl}`}
                  />
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
