import career from "./CareerTimeline.module.css";
export const careerTimelineText = [
  {
    id: 1,
    h2: "Age 7",
    h3: "Started Harp",
    p: "First discovered passion for the harp.",
  },
  {
    id: 2,
    h2: "Age 7",
    h3: "Started Harp",
    p: "First discovered passion for the harp.",
  },
  {
    id: 3,
    h2: "Age 7",
    h3: "Started Harp",
    p: "First discovered passion for the harp.",
  },
  {
    id: 4,
    h2: "Age 7",
    h3: "Started Harp",
    p: "First discovered passion for the harp.",
  },
  {
    id: 5,
    h2: "Age 7",
    h3: "Started Harp",
    p: "First discovered passion for the harp.",
  },
  {
    id: 6,
    h2: "Age 7",
    h3: "Started Harp",
    p: "First discovered passion for the harp.",
  },
];
export default function CareerTimeLine() {
  return (
    <div className={career.career}>
      <h1 className={career.title}>Career Timeline</h1>
      <ol className={career.timeLineList}>
        {careerTimelineText.map((item, index) => (
          <li className={career.tItem} key={item.id}>
            <div
              className={`${career.card} ${index % 2 === 0 ? career.left : career.right}`}
              style={{ gridRow: index + 1 }}
            >
              <div className={career.eyebrow}></div>
              <h2 className="card-title">{item.h2}</h2>
              <h3>{item.h3}</h3>
              <p>{item.p}</p>
            </div>
            <span className={index === 0 ? career.dotOutNoline : career.dotOut}>
              <span className={career.dot}></span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
