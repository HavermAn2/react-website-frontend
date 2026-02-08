import Stats from "./Stats";
import profile from "./Profile.module.css";
export default function Profile() {
  return (
    <div className={profile.profile}>
      <div className={profile.profilePhoto}>
        <img className={profile.aboutPhoto} src="/Ellipse 1.png" />
        <span className={profile.badge}>
          World <br />
          Guinness Record
        </span>
      </div>

      <div className={profile.aboutContent}>
        <h3 className={profile.aboutName}>Kateryna Oliinyk</h3>
        <h2 className={profile.aboutAlias}>SLAVRADA</h2>
        <p className={profile.aboutText}>
          A passionate professional harpist combining energetic performances
          with raw talent. Based in Dubai, captivating audiences worldwide since
          2012.
        </p>

        <Stats />
      </div>
    </div>
  );
}
