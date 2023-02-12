import React, { useState } from "react";
import Card from "../../components/card/Card";
import Calendar from "empower-calendar";

const CONFIG_CALENDAR = {
  type: "date-range",
  date: {
    from: "2022-04-01",
    to: "2022-04-30",
  },
  viewOnly: false,
  currentDate: "2022-04-05",
  data: {
    "2022-04-15": {
      content: [
        <p key={"content-1"}>Content 1</p>,
        <p key={"content-2"}>Content 2</p>,
      ],
    },
    "2022-04-30": {
      content: [<p key={"content-1"}>Content 1</p>],
    },
  },
};

const CalendarContainer = () => {
  const [selectedDate, setSelectedDate] = useState([]);

  const extractSelectedDates = (selected) => {
    setSelectedDate([...selected]);
  };

  try {
    return (
      <div className={"v2-main v2-main-lists"}>
        <div className="v2-content">
          <div className="row">
            <div className="col-12">
              <h4>Calendar (npm install empower-calendar)</h4>
              <br />
              <br />
              <Card hideMenuBar={true}>
                <div className="card-page">
                  <Calendar
                    {...CONFIG_CALENDAR}
                    selected={selectedDate ? selectedDate : []}
                    getSelected={(selected) => extractSelectedDates(selected)}
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error in rendering calendar", error);
    return <h4>Something went wrong.</h4>;
  }
};

export default CalendarContainer;
