import "./Calendar.css";

function Calendar() {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const state = { currentDay: new Date() };

  return (
    <div className="calendar">
      <div className="calender-header">
        <h2>
          {months[state.currentDay.getMonth()]} {state.currentDay.getFullYear()}
        </h2>
      </div>
      <div className="calendar-body">
        <div className="table-header">
          {weekDays.map((weekDay, i) => {
            return (
              <div className="weekday" key={i}>
                <p>{weekDay}</p>
              </div>
            );
          })}
        </div>
        <div className="table"></div>
      </div>
    </div>
  );
}

export default Calendar;
