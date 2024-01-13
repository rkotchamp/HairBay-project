import { useState, useContext } from "react";
import CalendarDays from "../CalendarDays/CalendarDays";
import UserContext from "../../../Context/UserContext";

import "./Calendar.css";

function Calendar() {
  const [state, setState] = useState({ currentDay: new Date() });

  const { user, setUsers } = useContext(UserContext);

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

  // const state = { currentDay: new Date() };
  const changeCurrentDay = (day) => {
    const newDate = new Date(day.year, day.month, day.number);
    setState({ currentDay: newDate });
    // setUsers({ date: state.currentDay });
    const theMonth = months[newDate.getMonth()];
    const theDay = newDate.getDate();
    // const newDate = state.currentDay.getDate();
    setUsers((prevUsers) => ({
      ...prevUsers,
      date: `${theMonth} ${theDay}`,
    }));
  };
  console.log(user);

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

        <CalendarDays
          day={state.currentDay}
          changeCurrentDay={changeCurrentDay}
        />
      </div>
    </div>
  );
}

export default Calendar;
