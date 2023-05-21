import { useState, useEffect } from "react";
import axios from "axios";

function Teams(props) {
  const [team, setTeam] = useState([]);
  const [numPlayers, setNumPlayers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/team/getTeams", {
        headers: {
          Authorization: `Bearer ${props.sessionToken}`,
        },
      })
      .then((response) => {
        setTeam(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3001/team/teams-with-users", {
        headers: {
          Authorization: `Bearer ${props.sessionToken}`,
        },
      })
      .then((response) => {
        setNumPlayers(response.data);
        console.log(response.data)
      });
  }, []);

  return (
    <div>
      {team.length > 0 ? (
        team.map((equipo) => (
          <div>
            <div className="card" style={{ cursor: "pointer" }}>
              <div
                className="card-header"
                data-toggle="collapse"
                href={"#collapseExample" + equipo.id}
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <img
                  className="d-flex-justify-content-center"
                  src={equipo.logo}
                  width="100"
                  height="100"
                />
                <h5>{equipo.name}</h5>
              </div>

              <div
                className="collapse card-body"
                id={"collapseExample" + equipo.id}
              >
                <div>
                  <a>
                    Modalidad: {equipo.sport}
                    <br></br>
                    Tamaño del equipo: {equipo.max_players_team}
                    <br></br>
                    <br></br>
                    <div className="card">
                      <div className="card-header">
                        <h5 style={{ color: "black" }} className="card-title">
                          Miembros
                        </h5>
                      </div> 
                      <div className="card-body">
                        <p style={{ color: "black" }} className="card-text">
                        {numPlayers.length && numPlayers.map((player) => (
                        
                            <a style={{ color: "black" }}>{player.members}<br></br></a>
                             
                          
                        ))}
                        </p>
                      </div>
                    </div>
                    <br></br>
                    <div className="card">
                      <div className="card-header">
                        <h5 style={{ color: "black" }} className="card-title">
                          Torneos Activos
                        </h5>
                      </div>
                      <div className="card-body">
                        <p style={{ color: "black" }} className="card-text">
                          Torneos activos del equipo
                        </p>
                      </div>
                    </div>
                    <br></br>
                    <button class="btn btn-primary rounded">
                      Solicitar unirme
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p style={{ color: "black" }}>No hay actividades disponibles...</p>
      )}
    </div>
  );
}

export default Teams;
