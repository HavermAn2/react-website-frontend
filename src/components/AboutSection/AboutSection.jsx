import Profile from "./Profile/Profile";
import MusicJourney from "./MusicJourney/MusicJourney";
import about from "./AboutSection.module.css";
export default function AboutSection() {
  return (
    <>
      <section className={about.about}>
        <Profile />
        <MusicJourney />
        {/*========================================================================*/}
      </section>
    </>
  );
}
