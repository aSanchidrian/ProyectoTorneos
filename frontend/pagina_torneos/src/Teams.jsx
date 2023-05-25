import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Form } from 'react-bootstrap';

function Teams(props) {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
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
        setTeams(response.data);
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
      // Refrescar la lista de equipos
      const responseTeams = await axios.get("http://localhost:3001/team/getTeams", {
        headers: {
          Authorization: `Bearer ${props.sessionToken}`,
        },
      });
      setTeams(responseTeams.data);
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const selectTeam = (team) => {
    setSelectedTeam(team);
  }

  return (
    <div>
      <br></br>
      <div className="d-flex justify-content-around flex-wrap">
        {teams.length > 0 ? (
          teams.map((team) => (
            <div onClick={() => selectTeam(team)} style={{ cursor: "pointer", textAlign: "center" }}>
              <img src={team.logo} style={{border:"1px solid #0066ef", width: "75px", height: "75px"}} className="rounded-circle"/>
              <h6>{team.name}</h6>
            </div>
          ))
        ) : (
          <p style={{ color: "black" }}>No hay equipos disponibles...</p>
        )}
        <Button variant="primary" onClick={handleShowModal} className="align-self-center rounded-circle" style={{width: "50px", height: "50px"}}>
          +
        </Button>
        <hr className="hr"></hr>
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
              <br></br>
              <Button variant="primary" type="submit">
                Crear
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
      {selectedTeam ? (
      <div className="w-100 mt-4">
        <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{selectedTeam.name}</h1>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={selectedTeam.logo} style={{border:"1px solid #0066ef"}} width="200" height="200" className="rounded-circle"/>
        </div>
        <br></br>
        <div className="mr-5 ml-5 mb-5">
          <div style={{height: "100%",width: "100%",border: "1.5px solid #0066ef",borderRadius: "30px"}}>
            <br></br>
            <h4>Miembros:</h4>
            <hr className="hr2"></hr>
            <div className="d-flex justify-content-around flex-wrap">
              {numPlayers.length && numPlayers.map((player) => (
                <h5> @{player.members}</h5>
              ))}
            </div>
            <br></br>
          </div>
        </div>
      </div>
    ) : (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <br></br>
        <br></br>
        <h2 className="font-italic" style={{color:"#0066ef"}}>Selecciona algun equipo para ver su informacion</h2>
      </div>
    )}

    </div>
  );
}

export default Teams;
