import header from "./Header.module.css";
import NavBar from "./NavBar.jsx";
export default function Header() {
  return (
    <header className={header.header}>
      <div className={header.container}>
        <a className={header.brand} href="/">
          <img className={header.icon} src="/harp1 1.png" alt="Harp logo" />
          <span className={header.text}>
            <span className={header.title}>SLAVRADA</span>
            <span className={header.tagline}>Professional Harpist</span>
          </span>
        </a>
        <NavBar />
        <a className={header.getInTouchBtn} href="#contact">
          Get In Touch
        </a>
      </div>
    </header>
  );
}
