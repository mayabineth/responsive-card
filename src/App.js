import { Rating } from "@mui/material";
import React, { useState, useEffect } from "react";

const url = "https://source.unsplash.com/random/360x180";
const details = {
  targetName: "דובאי",
  dates: "31.08 - 05.09",
  hotelName: "ELITE BYBLOS HOTEL CITY",
  nightsNum: 5,
  isBreakfast: true,
  isPassing: true,
  ratingNum: 5,
  price: 624,
};

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 500) setIsMobile(true);
    else setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });

  return (
    <main>
      <article className="flight">
        <footer>
          <img src={url} alt={details.dates} />

          <div className="flight-info">
            <div className="flight-title">{details.targetName}</div>
            <h4>{details.dates}</h4>
            <div className="flex-row">
              <h4>
                {isMobile
                  ? details.hotelName.slice(0, 10) + "..."
                  : details.hotelName}
              </h4>
              <Rating
                size="small"
                name="read-only"
                value={details.ratingNum}
                readOnly
              />
            </div>
            <div className="flex-row rtl">
              <h4>
                {details.nightsNum === 1
                  ? "לילה 1 "
                  : details.nightsNum > 1
                  ? details.nightsNum + " לילות"
                  : ""}
              </h4>
              {details.nightsNum > 0 &&
                (details.isBreakfast || details.isPassing) && <span>|</span>}
              <h4>{details.isBreakfast ? "ארוחת בוקר" : ""}</h4>
              {details.isBreakfast > 0 && details.isPassing && <span>|</span>}
              <h4>{details.isPassing ? "העברות" : ""}</h4>
            </div>
          </div>
        </footer>
        <div className="flight-info-sec">
          <div className="note">מחיר לאדם בהרכב שני מבוגרים</div>
          <div className="flex-space-between rtl">
            <h4 className="confirm">באישור מיידי</h4>
            <h3 className="price ltr">{"<$" + details.price}</h3>
          </div>
        </div>
      </article>
    </main>
  );
}

export default App;
