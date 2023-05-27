import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function AdminPanel(props) {
  const [entityType, setEntityType] = useState("User");
  const [entityId, setEntityId] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (entityType) => {
    try {
      let response;
      switch (entityType) {
        case "User":
          response = await axios.get(`http://localhost:3001/auth/getUsers`, {
            headers: {
              Authorization: `Bearer ${props.sessionToken}`,
            },
          });
          break;
        case "Team":
          response = await axios.get(`http://localhost:3001/team/getTeams`, {
            headers: {
              Authorization: `Bearer ${props.sessionToken}`,
            },
          });
          break;
        case "Tournament":
          response = await axios.get(`http://localhost:3001/tournament/getTournaments`, {
            headers: {
              Authorization: `Bearer ${props.sessionToken}`,
            },
          });
          break;
        case "Activity":
          response = await axios.get(`http://localhost:3001/activity/getActivitys`, {
            headers: {
              Authorization: `Bearer ${props.sessionToken}`,
            },
          });
          break;
        default:
          return;
      }

      setResults(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAdminAction = async () => {
    if (!entityId) return;
    try {
      await axios.delete(
        `http://localhost:3001/Auth/${entityType}/${entityId}`,
        {
          headers: {
            Authorization: `Bearer ${props.sessionToken}`,
          },
        }
      );
      alert(`${entityType} with ID: ${entityId} has been deleted.`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2 style={{marginTop: "1%"}} >Panel de administrador</h2>
      <hr className="hr2"/>
      <div className="d-flex justify-content-center">
        <Button style={{marginRight: "2%"}} onClick={() => handleSearch("User")}>Search Users</Button>
        <Button style={{marginRight: "2%"}} onClick={() => handleSearch("Team")}>Search Teams</Button>
        <Button style={{marginRight: "2%"}} onClick={() => handleSearch("Tournament")}>
          Search Tournaments
        </Button>
        <Button onClick={() => handleSearch("Activity")}>
          Search Activities
        </Button>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <select
          value={entityType}
          onChange={(e) => setEntityType(e.target.value)}
        >
          <option value="User">User</option>
          <option value="Team">Team</option>
          <option value="Tournament">Tournament</option>
          <option value="Activity">Activity</option>
        </select>
        <input
          type="text"
          value={entityId}
          onChange={(e) => setEntityId(e.target.value)}
          placeholder="Enter Entity ID"
        />
        <Button onClick={handleAdminAction}>Delete Entity</Button>
      </div>
      <br />
      <hr className="hr2"/>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td>{result.id}</td>
              <td>{result.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminPanel;
