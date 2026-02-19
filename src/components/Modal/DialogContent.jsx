import modal from "./Modal.module.css";
import { DayPicker } from "react-day-picker";

import { useEffect, useState, useRef, useMemo } from "react";
import "react-day-picker/dist/style.css";
const parseYMD = (str) => {
  const [y, m, d] = str.split("-");
  return new Date(Number(y), Number(m) - 1, Number(d));
};

const toYMD = (date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};
export default function DialogContent({
  card,
  onHandleSendData,
  onHandleModalOpen,
}) {
  const [busyDates, setBusyDates] = useState([]);
  const [selectedDay, setSelectedDay] = useState();
  const [isOpened, setIsOpened] = useState(false);

  const nameRef = useRef();
  const phoneRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    fetch("https://zxzpm6yxp7.eu-central-1.awsapprunner.com/get_books")
      .then((r) => r.json())
      .then((res) => {
        // res.data: [id, date, time]
        const list = (res.data ?? []).map(([, dateStr]) => parseYMD(dateStr));
        console.log("PARSED:", list);
        setBusyDates(list);
      })
      .catch(console.error);
  }, []);

  const busySet = useMemo(() => {
    return new Set(busyDates.map((d) => d.toDateString()));
  }, [busyDates]);

  const sendData = async (data) => {
    const res = await fetch(
      "https://zxzpm6yxp7.eu-central-1.awsapprunner.com/data",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      },
    );
    return res.json();
  };

  return (
    <div className={modal.content}>
      <h2>Booking</h2>
      <div className={modal.modal} id="booking-modal">
        <div className={modal.dialogImg}>
          <img
            src={`https://zxzpm6yxp7.eu-central-1.awsapprunner.com/${card.image}`}
          />
          <h3>{card.title}</h3>
          <h3>{card.desc}</h3>
        </div>
        <div className={modal.line}></div>

        <form
          className={modal.form}
          onSubmit={async (e) => {
            e.preventDefault();
            if (!selectedDay) return;

            const payload = {
              name: nameRef.current.value,
              phone: phoneRef.current.value,
              day: toYMD(selectedDay),
              time: "14:00",
              message: textRef.current.value,
              service: card.title,
            };

            try {
              const info = await sendData(payload);
              console.log(info);

              onHandleSendData(true);
              setTimeout(() => {
                onHandleSendData(false);
                onHandleModalOpen(false);
              }, 3000);
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <input
            ref={nameRef}
            className={modal.name}
            name="name"
            type="text"
            placeholder=" Name"
            required
          />
          <input
            ref={phoneRef}
            className={modal.phone}
            name="phone"
            type="text"
            placeholder=" Phone"
            required
          />
          <div className={modal.btnCont}>
            <button
              className={modal.calendarBtn}
              onClick={() => {
                setIsOpened((prev) => !prev);
              }}
            >
              ▼ Calendar ▼
            </button>

            {isOpened ? (
              <div className={modal.calendarWrap}>
                <DayPicker
                  mode="single"
                  selected={selectedDay}
                  onSelect={setSelectedDay}
                  disabled={(date) => !busySet.has(date.toDateString())}
                />
              </div>
            ) : undefined}
          </div>
          <select className={modal.time}>
            <option value=" ">Firstly choose the date!!!</option>
          </select>
          <textarea
            ref={textRef}
            className={modal.msg}
            name="msg"
            type="text"
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
