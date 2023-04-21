import { useState, useEffect } from "react";
import axios from "axios";

function Teams() {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/team/getTeams", {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6ImphdmljaHUiLCJpYXQiOjE2ODIwNzc0MDYsImV4cCI6MTcxODA3MzgwNn0.vFpIRgcApHpNNrgA8oGRUSpfrdMR6NPb0jo_2ZhnSeQ`
            }
        }).then((response) => {
            setTeam(response.data);
        });
    }, []);

    return (
        <div>
            
            {team.length > 0 ? (
                team.map((equipo) => (
                  <div>
                        <div className="card">
                            <h5 className="card-header" data-toggle="collapse" href={"#collapseExample" + equipo.id}
                               aria-expanded="false" aria-controls="collapseExample">
                                <img className="card-img-top" src={equipo.logo} width="100" height="100">{equipo.name}</img>
                                
                            </h5>
                            <div className="collapse card-body" id={"collapseExample" + equipo.id}>
                                <div>
                                  <a>
                                    Tipo de equipo: {equipo.sport}
                                    <br></br>
                                    Tamaño del equipo: {equipo.max_players_team}
                                  </a>
                                </div>
                            </div>
                        </div>
                  </div>
                ))
            ) : (
                <p style={{color:"black"}}>No hay actividades disponibles...</p>
            )}
        </div>
    );
}

export default Teams;
