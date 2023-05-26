import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Modal, Form } from 'react-bootstrap';

function Tournaments(props) {
  const [tournaments, setTournaments] = useState([]);
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [sportFilter, setSportFilter] = useState("");
  const [showModal, setShowModal] = useState(false);

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
    setSelectedTournament(tournament);
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
    <div>
      <div className="filter-container">
        <Form.Control
          as="select"
          value={sportFilter}
          onChange={handleSportFilterChange}
        >
          <option value="">Select a sport</option>
          <option value="Football">Football</option>
          <option value="Basketball">Basketball</option>
        </Form.Control>
      </div>

      {filteredTournaments.map((tournament) => (
        <div
          key={tournament.id}
          onClick={() => selectTournament(tournament)}
        >
          {tournament.name}
        </div>
      ))}

      {selectedTournament && (
        <div>
          <h2>{selectedTournament.name}</h2>
          <p>{selectedTournament.description}</p>
          <p>{selectedTournament.sport}</p>
          <p>{selectedTournament.date_start}</p>
          <p>{selectedTournament.date_end}</p>
          <p>{selectedTournament.min_teams}</p>
          <p>{selectedTournament.max_teams}</p>
          <p>{selectedTournament.max_players_team}</p>
          <p>{selectedTournament.type}</p>
          <p>{selectedTournament.privacity}</p>
        </div>
      )}

      <Button onClick={handleShowModal}>
        Create New Tournament
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Tournament</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCreateTournament}>
            <Form.Group controlId="formTournamentName">
              <Form.Label>Tournament Name</Form.Label>
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
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formValues.description}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTournamentSport">
              <Form.Label>Sport</Form.Label>
              <Form.Control
                type="text"
                name="sport"
                value={formValues.sport}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTournamentDateStart">
              <Form.Label>Start Date</Form.Label>
              <Form.Control
                type="datetime-local"
                name="date_start"
                value={formValues.date_start}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTournamentDateEnd">
              <Form.Label>End Date</Form.Label>
              <Form.Control
                type="datetime-local"
                name="date_end"
                value={formValues.date_end}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTournamentMinTeams">
              <Form.Label>Min Teams</Form.Label>
              <Form.Control
                type="number"
                name="min_teams"
                value={formValues.min_teams}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTournamentMaxTeams">
              <Form.Label>Max Teams</Form.Label>
              <Form.Control
                type="number"
                name="max_teams"
                value={formValues.max_teams}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTournamentMaxPlayersTeam">
              <Form.Label>Max Players per Team</Form.Label>
              <Form.Control
                type="number"
                name="max_players_team"
                value={formValues.max_players_team}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formTournamentType">
              <Form.Label>Type</Form.Label>
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
              <Form.Label>Privacy</Form.Label>
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
              Create Tournament
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Tournaments;