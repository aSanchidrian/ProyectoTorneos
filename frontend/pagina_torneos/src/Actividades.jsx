import { useState, useEffect } from "react";
import axios from "axios";

function Actividades(props) {
    const [activity, setActivity] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/activity/getActivitys", {
            headers: {
                Authorization: `Bearer ${props.sessionToken}`
            }
        }).then((response) => {
            setActivity(response.data);
            console.log(response.data);
        });
    }, []);

    return (
        <div>
            
            {activity.length > 0 ? (
                activity.map((actividad) => (
                    <div className="card">
                        <div className="card-header">
                            <h5 style={{ color: "black" }} className="card-title">
                                {actividad.name}
                            </h5>
                        </div>
                        <div className="card-body">
                            <p style={{ color: "black" }} className="card-text">
                                Descripcion: {actividad.description}
                                <br />
                                Deporte: {actividad.sport}
                                <br />
                                Fecha: {actividad.date}
                                <br />
                                Maximo de Plazas: {actividad.max_plazas}
                                <br />
                                Lugar: {actividad.place}
                            </p>
                        </div>
                    </div>
                ))
            ) : (
                <p style={{color:"black"}}>No hay actividades disponibles...</p>
            )}
        </div>
    );
}

export default Actividades;
