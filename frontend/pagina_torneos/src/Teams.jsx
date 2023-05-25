import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Form } from 'react-bootstrap';

function Teams(props) {
  const [team, setTeam] = useState([]);
  const [numPlayers, setNumPlayers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  

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
        console.log(response.data);
      });
  }, []);

  const handleRegister = async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const sport = document.getElementById("sport").value;
    const logo = document.getElementById("logo").value;
    const max_players_team = document.getElementById("max_players_team").value;

    try {
      const response = await axios.post(
        "http://localhost:3001/team/createTeam",
        {
          name,
          sport,
          logo,
          max_players_team,
        },
        {
          headers: {
            Authorization: `Bearer ${props.sessionToken}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div>
        <div className="d-flex justify-content-end bottom mr-4">
          <Button variant="primary" onClick={handleShowModal}>
            Crear Equipo
          </Button>
        </div>
        <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Crear un equipo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleRegister}>
            <Form.Group>
              <Form.Label>Nombre del equipo</Form.Label>
              <Form.Control type="text" id="name" required/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Deporte</Form.Label>
              <Form.Control type="text" id="sport" required/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Logo</Form.Label>
              <Form.Control type="text" id="logo" required/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Máximo de jugadores por equipo</Form.Label>
              <Form.Control type="number" id="max_players_team" required/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Crear
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
        

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
                  className="d-flex justify-content-center"
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
                          {numPlayers.length &&
                            numPlayers.map((player) => (
                              <a style={{ color: "black" }}>
                                {player.members}
                                <br></br>
                              </a>
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
