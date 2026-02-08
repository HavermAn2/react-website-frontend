import master from "./MasterStatistics.module.css";
export default function MasterStatistics() {
  return (
    <>
      <div className={master.masterStatistics}>
        <Statistics h1={"10K+"} h3={"Concert Attendees"} />
        <Statistics h1={"6"} h3={"Countries"} />
        <Statistics h1={"3"} h3={"Degrees"} />
        <Statistics h1={"50+"} h3={"Genres Mastered"} />
      </div>
      <div className={master.footerBooking}>
        <h3>Ready to bring magic to your event?</h3>
        <div className={master.btnContainer}>
          <a className={master.bookingBtn} href="#good-cards-containeer">
            Book performance
          </a>
          <a className={master.contactBtn}>Contact Me</a>
        </div>
      </div>
    </>
  );
}
export function Statistics({ h1, h3 }) {
  return (
    <div>
      <h1>{h1}</h1>
      <h3>{h3}</h3>
    </div>
  );
}
