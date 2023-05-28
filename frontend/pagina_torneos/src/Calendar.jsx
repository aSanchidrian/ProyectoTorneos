import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es"; // Importa el archivo de localización en español
import axios from "axios";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Configura moment en español
moment.locale("es");
const localizer = momentLocalizer(moment);

const MyCalendar = (props) => {
  const [events, setEvents] = useState([]);

  const messages = {
    allDay: "Todo el día",
    previous: "Atrás",
    next: "Siguiente",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
    showMore: (total) => `+ Ver más (${total})`,
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/activity/getActivitys",
          {
            headers: {
              Authorization: `Bearer ${props.sessionToken}`,
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
    <div style={{ height: "100%" }}>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        messages={messages}
      />
    </div>
  );
};

export default MyCalendar;
