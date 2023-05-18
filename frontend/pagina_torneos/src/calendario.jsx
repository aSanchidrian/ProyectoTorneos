import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/activity/getActivitys",
          {
            headers: {
              Authorization: "Bearer your_token",
            },
          }
        );
        const events = res.data.map((e) => ({
          start: new Date(e.date),
          end: new Date(e.date), // se supone que la fecha de inicio y de fin son la misma
          title: e.name,
        }));
        setEvents(events);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div style={{ height: 700 }}>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
      />
    </div>
  );
};

export default MyCalendar;
