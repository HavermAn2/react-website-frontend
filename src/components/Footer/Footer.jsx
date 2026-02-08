import footer from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={footer.footerTxt}>
        <h1>Contact</h1>
        <p>Dubai Studio City, BS 08, office 201</p>
        <p>slavradaharp@gmail.com</p>
        <p>+971 4 552 1748</p>
      </div>
      <div className={footer.mapWrap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7229.501853521136!2d55.240212678538306!3d25.04252542116771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6f90e288fc23%3A0xe91a3739fcf492c8!2sDubai%20Studio%20City%20by%20TECOM%20Group!5e0!3m2!1sru!2spl!4v1762960507335!5m2!1sru!2spl"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <footer className={footer.footer}></footer>
    </>
  );
}
