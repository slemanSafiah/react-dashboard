import moment from "moment";

function RightSide() {
  let hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];

  let appointments = [
    {
      start: 8.5,
      end: 9.5,
      dur: 60,
      top: 160,
      desc: "some description about appointmetn"
    }, //60 px for each hour
    {
      start: 12,
      end: 14,
      dur: 120,
      top: 365,
      desc: "some description about appointmetn"
    },
    {
      start: 17,
      end: 18,
      dur: 60,
      top: 660,
      desc: "some description about appointmetn"
    }
    // top value calculated by subtract start from end and then multiply it by 60 (indicate for 1 hour)
  ];

  return (
    <div className="right-side">
      <div className="right-side-header flex-space-between">
        <div className="right-side-header-title">
          <div className="todo-date">calendar</div>
          <div>
            {moment().format("dddd")}, {moment().format("Do MMM")}
          </div>
        </div>
        <div className="calendar-image">
          <img
            src="/static/images/event.svg"
            width="100px"
            height="100px"
            alt="calendar logo"
          />
        </div>
      </div>
      <div className="calendar-dates">
        {hours.map((hour, index) => (
          <div className="calendar-hour flex-center">
            <div>
              <div style={{ fontSize: "14px" }}>{hour}</div>
              <div style={{ fontSize: "6px" }}>{index > 6 ? "AM" : "PM"}</div>
            </div>
            <div className="divider-date" />
          </div>
        ))}
        {appointments.map((ap) => (
          <div
            className="appointment"
            style={{
              height: ap.dur.toString() + "px",
              top: ap.top.toString() + "px"
            }}
          >
            <div style={{ padding: "5px" }}>{ap.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSide;
