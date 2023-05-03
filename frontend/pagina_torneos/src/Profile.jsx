import { useState, useEffect } from "react";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [image, setImage] = useState("");
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/auth/getUser").then((response) => {
      setUser(response.data);
      setName(response.data.name);
      setNickname(response.data.nickname);
      setImage(response.data.image);
      setTeams(response.data.teams);
    });
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleNicknameChange = (event) => {
    setNickname(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleTeamChange = (event) => {
    const selectedTeams = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setTeams(selectedTeams);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    axios
      .put("http://localhost:3001/auth/update/1", { name, nickname, image, teams })
      .then((response) => {
        setUser(response.data);
        setIsEditing(false);
      });
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-end mb-3">
        {isEditing ? (
          <button className="btn btn-primary mr-2" onClick={handleSaveClick}>
            Guardar cambios
          </button>
        ) : (
          <button className="btn btn-primary mr-2" onClick={handleEditClick}>
            Editar perfil
          </button>
        )}
      </div>
      <h1>
        {isEditing ? (
          <input type="text" value={name} onChange={handleNameChange} />
        ) : (
          user.name
        )}
      </h1>
      <div className="row">
        <div className="col-md-4">
          {isEditing ? (
            <input type="text" value={image} onChange={handleImageChange} />
          ) : (
            <img src={user.image} alt="Foto de perfil" />
          )}
          {isEditing ? (
            <input
              type="text"
              value={nickname}
              onChange={handleNicknameChange}
            />
          ) : (
            <p>Nickname: {user.nickname}</p>
          )}
          <p>Equipos:</p>
          <select multiple={true} value={teams} onChange={handleTeamChange}>
            {user.teams.map((team, index) => (
              <option key={index} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Profile;
