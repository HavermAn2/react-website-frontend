import musicJor from "./MusicJourney.module.css";
import CareerTimeLine from "./CareerTimeline";
import MasterStatistics from "./MasterStatistics";
export const musicJourneyText = [
  {
    strong: "Slavrada has always been musically gifted. ",
    text: "Since she was young, she has loved the limelight and were always singing, performing and playing a variety of instruments. However, it wasn'tuntil after undergoing some major upheavals in her life that she became a professional Musician.",
  },
  {
    text: "Throughout her time with the group, she composed several originalpieces for the Ensemble and performed to crowds as large as 10,000 people, completing over 100 performances. After touring Europe with 'Symfomania' in 2016, Kateryna moved to Dubai to showcase her talent.",
  },
  {
    text: "Born in Kyiv, Ukraine, Kateryna first developed love and interest in playing the harp at age 7. She later furthered her passion by attending and graduating with Honors at the Kiev Institute of Music R.M. Gliera, receiving Junior Specialist, Bachelors and Masters Degrees in Harp performance.",
  },
  {
    text: "Now performing at prestigious events and 5-star hotels around the UAE, she brings cultural diversity through her extensive background in Middle Eastern, Western, and Asian Music, with genres ranging from Classical, Pop, Rock, Bollywood, Arabic and more.",
  },
  {
    text: " Performed with orchestras including 'Symfomania', playing on a Lyon & Healy electro harp in a Rock Ensemble using digital processors and effects.",
    variant: "right",
  },
  {
    text: "Featured in Netflix's 'Dubai Bling' (October 2022, Episode 8) and holds a Guinness World Record for longest harp marathon playing - 31 hours 1 minute 54 seconds.",
    variant: "left",
  },
];

export default function MusicJourney() {
  return (
    <>
      <div className={musicJor.container}>
        <h1 className={musicJor.title}>My Musical Journey</h1>

        <div className={musicJor.textContainer}>
          {musicJourneyText.map((item, index) =>
            item.strong ? (
              <div key={index}>
                <strong>{item.strong}</strong> {item.text}
              </div>
            ) : item.variant ? (
              <div className={musicJor.textLReft} key={index}>
                {item.text}
              </div>
            ) : (
              <div key={index}>{item.text}</div>
            ),
          )}
        </div>
        <CareerTimeLine />
      </div>

      <MasterStatistics />
    </>
  );
}
