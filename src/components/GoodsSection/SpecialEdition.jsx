import special from "./SpecialEdition.module.css";

export default function SpecialEdition({ imgUrl, h1, h2 }) {
  return (
    <>
      <div className={special.card}>
        <img className={special.img} src={imgUrl} />
        <div className={special.internalContent}>
          <h1>{h1}</h1>
          <h2>{h2}</h2>
          <button>Reserve</button>
        </div>
      </div>
    </>
  );
}
