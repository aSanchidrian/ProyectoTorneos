import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

function Tournaments(props) {
  const [tournaments, setTournaments] = useState([]);
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [sportFilter, setSportFilter] = useState("");
  const [formattedDateStart, setFormattedDateStart] = useState("");
  const [formattedDateEnd, setFormattedDateEnd] = useState("");
  const [teams, setTeams] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [teamId, setTeamId] = useState(1); // Suponiendo que el id del equipo es 1

  const getTeams = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/tournament/getTeamsInTournament",
        {
          params: {
            tournamentId: selectedTournament.id,
          },
          headers: {
            Authorization: `Bearer ${props.sessionToken}`,
            api_key: 'Api-publica-123',
          },
        }
      );
  
      if (response.status === 200) {
        setTeams(response.data);
      }
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    if (selectedTournament) {
      getTeams();
    }
  }, [selectedTournament]);

  // State for form input values
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    sport: "",
    date_start: "",
    date_end: "",
    min_teams: "",
    max_teams: "",
    max_players_team: "",
    type: "",
    privacity: ""
  });

  const handleSubscribe = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/tournament/subscribeTeamToTournament",
        {
          teamId,
          tournamentId: selectedTournament.id,
        },
        {
          headers: {
            Authorization: `Bearer ${props.sessionToken}`,
            api_key: 'Api-publica-123',
            },
        }
      );

      if (response.status === 200) {
        alert("Inscripción exitosa!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    axios
      .get("http://localhost:3001/tournament/getTournaments", {
        headers: {
          Authorization: `Bearer ${props.sessionToken}`,
        },
      })
      .then((response) => {
        setTournaments(response.data);
      });
  }, []);

  const handleSportFilterChange = (event) => {
    setSportFilter(event.target.value);
  };

  const handleInputChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const selectTournament = (tournament) => {
    if (selectedTournament && selectedTournament.id === tournament.id) {
      setSelectedTournament(null);
      setFormattedDateStart("");
      setFormattedDateEnd("");
    } else {
      setSelectedTournament(tournament);
  
      // Update formatted dates
      const date1 = new Date(tournament.date_start);
      const date2 = new Date(tournament.date_end);
      setFormattedDateStart(date1.toLocaleString());
      setFormattedDateEnd(date2.toLocaleString());
    }
  };

  const filteredTournaments = sportFilter 
    ? tournaments.filter(tournament => tournament.sport === sportFilter)
    : tournaments;

  const handleCreateTournament = async (event) => {
    event.preventDefault();
    const newTournamentData = {
      ...formValues,
      min_teams: Number(formValues.min_teams),
      max_teams: Number(formValues.max_teams),
      max_players_team: Number(formValues.max_players_team),
      type: Number(formValues.type),
      privacity: Number(formValues.privacity)
    };
    

    try {
      const response = await axios.post(
        "http://localhost:3001/tournament/createTournament",
        newTournamentData,
        {
          headers: {
            Authorization: `Bearer ${props.sessionToken}`,
          },
        }
      );

      if (response.status === 200) {
        const updatedTournaments = await axios.get("http://localhost:3001/tournament/getTournaments", {
          headers: {
            Authorization: `Bearer ${props.sessionToken}`,
          },
        });
        setTournaments(updatedTournaments.data);
        setShowModal(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);


  return (
    
  <>  
    <div>
      <div className="filter-container">
        <div className="d-flex justify-content-around ml-4 mt-4">
          <Form.Control
            as="select"
            className="mr-4 ml-4"
            value={sportFilter}
            onChange={handleSportFilterChange}
          >
            <option value="">Todos los deportes</option>
            <option value="Futbol">Fútbol</option>
            <option value="Tenis">Tenis</option>
            <option value="Baloncesto">Basketball</option>
          </Form.Control>

          <Button variant="primary" onClick={handleShowModal} style={{textAlign:"center", width:"30%",height:"30%", marginRight:"3%"}}>
          Crear Torneo
        </Button>
      </div>
    </div>

    <hr className="hr2"></hr>

    <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Crear nuevo torneo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCreateTournament}>
            <Form.Group controlId="formTournamentName">
              <Form.Label>Nombre del torneo: </Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            {/* Add additional form fields here */}
            <Form.Group controlId="formTournamentDescription">
              <Form.Label>Descripcion: </Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formValues.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTournamentSport">
              <Form.Label>Deporte: </Form.Label>
              <Form.Control
                type="text"
                name="sport"
                value={formValues.sport}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTournamentDateStart">
              <Form.Label>Fecha de Inicio: </Form.Label>
              <Form.Control
                type="datetime-local"
                name="date_start"
                value={formValues.date_start}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTournamentDateEnd">
              <Form.Label>Fecha de Final: </Form.Label>
              <Form.Control
                type="datetime-local"
                name="date_end"
                value={formValues.date_end}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTournamentMinTeams">
              <Form.Label>Numero minimo de Equipos: </Form.Label>
              <Form.Control
                type="number"
                name="min_teams"
                value={formValues.min_teams}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTournamentMaxTeams">
              <Form.Label>Numero maximo de Equipos: </Form.Label>
              <Form.Control
                type="number"
                name="max_teams"
                value={formValues.max_teams}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTournamentMaxPlayersTeam">
              <Form.Label>Maximo de jugadores por equipo: </Form.Label>
              <Form.Control
                type="number"
                name="max_players_team"
                value={formValues.max_players_team}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTournamentType">
              <Form.Label>Tipo: </Form.Label>
              <Form.Control
                as="select"
                name="type"
                value={formValues.type}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Type</option>
                <option value="1">Teams only</option>
                <option value="2">Teams + Individual Players</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="formTournamentPrivacity">
              <Form.Label>Privacidad: </Form.Label>
              <Form.Control
                as="select"
                name="privacity"
                value={formValues.privacity}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Privacy</option>
                <option value="1">Private Tournament</option>
                <option value="2">Public Tournament</option>
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Crear torneo
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {filteredTournaments.map((tournament) => {
        
  return (
    <>
    <div className="d-flex justify-content-around flex-wrap mr-3 ml-3 mb-3 mt-3"> 
      <div style={{height: "100%",width: "100%",border: "1.5px solid #0066ef",borderRadius: "30px"}}>
        <div   style={{cursor:"pointer"}} className="font-weight-bold mr-3 ml-3 mb-3 mt-3" key={tournament.id} onClick={() => selectTournament(tournament)}>
          {tournament.name}
        </div>
      </div>
    </div>
    
    </>
  );
})}

<hr className='hr2'></hr>

{selectedTournament && (
  <div className="d-flex justify-content-around flex-wrap mr-5 ml-5 mb-5 mt-5">
    <div style={{height: "100%",width: "100%",border: "1.5px solid #0066ef",borderRadius: "30px"}}>
      <br></br>
      <h2 className="text-center font-weight-bold ">{selectedTournament.name}</h2>
      <hr className="hr2"></hr>
      
      <Row>
        <Col className="text-right font-weight-bold">Descripcion:</Col>
        <Col className="text-left">{selectedTournament.description}</Col>
      </Row>
      <Row>
        <Col className="text-right font-weight-bold">Deporte:</Col>
        <Col className="text-left">{selectedTournament.sport}</Col>
      </Row>
      <Row>
        <Col className="text-right font-weight-bold">Fecha de Inicio:</Col>
        <Col className="text-left">{formattedDateStart}</Col>
      </Row>
      <Row>
        <Col className="text-right font-weight-bold">Fecha de Final:</Col>
        <Col className="text-left">{formattedDateEnd}</Col>
      </Row>
      <Row>
        <Col className="text-right font-weight-bold">Minimo de equipos:</Col>
        <Col className="text-left">{selectedTournament.min_teams}</Col>
      </Row>
      <Row>
        <Col className="text-right font-weight-bold">Maximo de equipos:</Col>
        <Col className="text-left">{selectedTournament.max_teams}</Col>
      </Row>
      <Row>
        <Col className="text-right font-weight-bold">Maximo de jugadores por equipo:</Col>
        <Col className="text-left">{selectedTournament.max_players_team}</Col>
      </Row>
      <Row>
        <Col className="text-right font-weight-bold">Tipo:</Col>
        <Col className="text-left">{selectedTournament.type}</Col>
      </Row>
      <br></br>
      <Button className="mb-4" variant="primary" onClick={handleSubscribe}>Inscribirse</Button>
      <div className="d-flex justify-content-around flex-wrap mr-5 ml-5 mb-5 mt-5">
        <div style={{height: "100%",width: "100%",border: "1.5px solid #0066ef",borderRadius: "30px"}}>
          <h2 className='mt-3 mb-3'>Equipos Participantes</h2>
          <hr className='hr2'></hr>
          {teams.map((team, index) => (
            <p style={{color:"black"}}>
              {team.name} // Asegúrate de que "name" es la propiedad correcta para el nombre del equipo
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
  
)}
    </div>
    </>
  );
  
}

export default Tournaments;