import modal from "./Modal.module.css";
export default function DialogContent({ card }) {
  return (
    <div className={modal.content}>
      <h2>Booking</h2>
      <div className={modal.modal} id="booking-modal">
        <div className={modal.dialogImg}>
          <img src={`http://127.0.0.1:8000/${card.img}`} />
          <h3>{card.title}</h3>
          <h3>{card.desc}</h3>
        </div>
        <dix className={modal.line}></dix>

        <form className={modal.form}>
          <input className={modal.name} name="name" placeholder=" Name" />

          <input className={modal.phone} name="phone" placeholder=" Phone" />

          <input
            className={modal.date}
            name="date"
            type=" Text"
            placeholder=" Click to choose the date"
          />

          <select className={modal.time}>
            <option value=" ">Firstly choose the date!!!</option>
          </select>

          <textarea
            className={modal.msg}
            name="msg"
            placeholder=" Message"
          ></textarea>
          <br />
          <button className={modal.sendBtn} type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
