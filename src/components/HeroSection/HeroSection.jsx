import hero from "./HeroSection.module.css";
import Button from "../Button";
export default function Header() {
  return (
    <>
      <section className={hero.hero}>
        <div className={hero.container}>
          <div className={hero.leftPart}>
            <h1 className={hero.title}>SLAVRADA</h1>
            <h2 className={hero.subtitle}>Professional Harpist</h2>
            <p className={hero.description}>
              Combining energetic performance with raw talent, Slavrada  is an
              influential Musician. Since embarking on her career in 2012, she
              has  entranced her fans with her signature sound.
            </p>

            <div className={hero.actions}>
              <Button
                className={`${hero.btns} ${hero.btnPrimary}`}
                href="#good-cards-containeer"
              >
                Book performance
              </Button>
              <Button
                className={`${hero.btns} ${hero.btnGhost}`}
                link="https://www.youtube.com/c/SlaVrada"
              >
                Watch Videos
              </Button>
            </div>
          </div>

          <div className={hero.rightPart}>
            <img
              src="/Rectangle 1.png"
              alt="Harp performance"
              className={hero.image}
            />
          </div>
        </div>
      </section>
    </>
  );
}
