import { useState, useEffect } from "react";
import axios from "axios";

function Results(props) {
  const [activity, setActivity] = useState([]);

  const getResults = async () => {
    const response = await axios.get("http://localhost:3001/activity/getActivitys", {
        headers: {
            Authorization: `Bearer ${props.sessionToken}`
        }
    });
    setActivity(response.data);
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <div>
      {activity.length > 0 ? (
        activity.map((actividad) => {
          // Convertir fecha de la actividad a formato legible
          const date = new Date(actividad.date);
          const formattedDate = date.toLocaleString();
          return (
            (actividad.result !== "" && (
              <div className="card" key={actividad._id}>
                <div className="card-header">
                  <h5 style={{ color: "black" }} className="card-title">
                    {actividad.name}
                  </h5>
                </div>
                <div className="card-body">
                  <p style={{ color: "black" }} className="card-text">
                    Resultado: {actividad.result}
                    <br />
                    Fecha: {formattedDate}
                  </p>
                </div>
              </div>
            )) || null
          );
        })
      ) : (
        <p style={{color:"black"}}>No hay resultados disponibles...</p>
      )}
    </div>
  );
}

export default Results;