import header from "./Header.module.css";
import NavButton from "./NavButton";
export default function Header() {
  return (
    <nav className={header.nav}>
      <ul className={header.navList}>
        <NavButton href="#">Home</NavButton>
        <NavButton href="#good-cards-containeer">Book Online</NavButton>
        <NavButton href="https://www.instagram.com/slavrada_official/">
          Blog
        </NavButton>
      </ul>
    </nav>
  );
}
