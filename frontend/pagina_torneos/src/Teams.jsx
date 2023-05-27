import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Form, Select } from "react-bootstrap";

function Teams(props) {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [sportFilter, setSportFilter] = useState("");
  const [numPlayers, setNumPlayers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filteredActivity, setFilteredActivity] = useState([]);

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
        console.log("NumPlayers: " + numPlayers);
        console.log(response.data);
      });
  }, []);

  const handleSportFilterChange = (value) => {
    setSportFilter(value);
  };

  const selectTeam = (team) => {
    setSelectedTeam(team);
    setFilteredActivity([team]);
  };

  const filteredTeams = sportFilter
    ? teams.filter((team) => team.sport === sportFilter)
    : teams;

  const handleCreateTeam = async (event) => {
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
      const responseTeams = await axios.get(
        "http://localhost:3001/team/getTeams",
        {
          headers: {
            Authorization: `Bearer ${props.sessionToken}`,
          },
        }
      );
      setTeams(responseTeams.data.reverse());
      setShowModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <div>
      <div className="filter-container">
        <div className="d-flex justify-content-around ml-4 mt-4">
          <Form.Control
            as="select"
            className="mr-4 ml-4"
            value={sportFilter}
            onChange={(e) => handleSportFilterChange(e.target.value)}
          >
            <option value="">Todos los deportes</option>
            <option value="Futbol">Fútbol</option>
            <option value="Tenis">Tenis</option>
            <option value="Baloncesto">Baloncesto</option>
          </Form.Control>
          <Button
            variant="primary"
            onClick={handleShowModal}
            style={{
              textAlign: "center",
              width: "30%",
              height: "30%",
              marginRight: "3%",
            }}
          >
            Crear Equipo
          </Button>
        </div>
      </div>
      <hr className="hr2"></hr>
      <div className="d-flex justify-content-around flex-wrap">
        {filteredTeams.length > 0 ? (
          filteredTeams.map((team) => (
            <div
              onClick={() => selectTeam(team)}
              style={{ cursor: "pointer", textAlign: "center" }}
            >
              <img
                src={team.logo}
                style={{
                  border: "1px solid #0066ef",
                  width: "75px",
                  height: "75px",
                }}
                className="rounded-circle"
              />
              <h6>{team.name}</h6>
            </div>
          ))
        ) : (
          <p style={{ color: "black" }}>No hay equipos disponibles...</p>
        )}
      </div>

      <hr className="hr2"></hr>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Crear un equipo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCreateTeam}>
            <Form.Group>
              <Form.Label>Nombre del equipo</Form.Label>
              <Form.Control type="text" id="name" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Deporte</Form.Label>
              <Form.Control type="text" id="sport" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Logo</Form.Label>
              <Form.Control type="text" id="logo" required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Máximo de jugadores por equipo</Form.Label>
              <Form.Control type="number" id="max_players_team" required />
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit">
              Crear
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {filteredActivity.length > 0 ? (
        <div className="w-100 mt-4">
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {selectedTeam.name}
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={filteredActivity[0].logo}
              style={{ border: "1px solid #0066ef" }}
              width="200"
              height="200"
              className="rounded-circle"
            />
          </div>
          <br></br>
          <div className="mr-1 ml-1 mb-1">
            <div
              style={{
                height: "100%",
                width: "100%",
                border: "1.5px solid #0066ef",
                borderRadius: "30px",
              }}
            >
              <br></br>
              <h4>Miembros:</h4>
              <hr className="hr2"></hr>
              <div className="d-flex justify-content-around flex-wrap">
                {numPlayers.length &&
                  numPlayers.map((team) => (
                    <div key={team.teamName}>
                      <h4>{team.teamName}</h4>
                      {team.members.map((member) => (
                        <div key={member.name}>
                          <h5>@{member.name}</h5>
                          <img
                            src={member.profilePic}
                            style={{
                              border: "1px solid #0066ef",
                              width: "75px",
                              height: "75px",
                            }}
                            className="rounded-circle"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
              <br></br>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <br></br>
          <br></br>
          <h2 className="font-italic" style={{ color: "#0066ef" }}>
            Selecciona algún equipo para ver su información
          </h2>
        </div>
      )}
    </div>
  );
}

export default Teams;
