import { useState, useEffect } from "react";
import axios from "axios";
import web_icon from "./web-globe-icon-23.png";
import Button from "react-bootstrap/Button";

function Profile() {
  const [user, setUser] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [image, setImage] = useState("");
  const [teams, setTeams] = useState([]);
  const [sport, setSport] = useState([]);

  const sendGetUser = async () => {
    axios
      .get("http://localhost:3001/auth/getUser", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6Imphdml2aSIsImlhdCI6MTY4MzMwNjg1MSwiZXhwIjoxNzE5MzAzMjUxfQ.-UadXGxOEaAGaPVd9BcFEQqBWHwtMx9KUkNhoSidLgQ`,
        },
      })
      .then((response) => {
        setName(response.data.name);
        setNickname(response.data.nickname);
        setSport(response.data.sport);
        setUser(response.data.email);
        // setName(response.data.image);
        // setTeams(response.data.teams);
      });
  };

  useEffect(() => {
    sendGetUser();
  }, []);

  const handleNameChange = (event) => {
    // setName(event.target.value);
  };

  const handleNicknameChange = (event) => {
    // setNickname(event.target.value);
  };

  const handleImageChange = (event) => {
    // setImage(event.target.value);
  };

  const handleTeamChange = (event) => {
    // const selectedTeams = Array.from(
    //   event.target.selectedOptions,
    //   (option) => option.value
    // );
    // setTeams(selectedTeams);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // axios
    //   .put("http://localhost:3001/auth/update/1", { name, nickname, image, teams })
    //   .then((response) => {
    //     setUser(response.data);
    //     setIsEditing(false);
    //   });
  };

  return (
    <>
      <div className="scrollable" style={{ height: "auto", }}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "30vh", }}
        >
          <div
            className=""
            style={{
              width: "20%",
            }}
          >
            <img
              src={web_icon}
              width="200"
              height="200"
              className="rounded-circle"
            />
          </div>
          <div
            className="mt-3 ml-5 d-flex flex-column align-items-start"
            style={{
              width: "50%",
            }}
          >
            {/* meter aqui la info del user */}
            <h2>
              <b>{nickname}</b>
            </h2>
            <br></br>
            <h2>{name}</h2>
            <br></br>
            <br></br>
            <h4>{sport}</h4>
            <br></br>
          </div>
          <div
            className="d-flex flex-column align-items-center mt-5"
            style={{
              width: "20%",
            }}
          >
            <Button className="btn btn-primary">Editar</Button>
          </div>
        </div>
        <div className="mr-5 ml-5 mb-5" style={{ height: "33.33vh"}}>
          <div
            className="d-flex justify-content-center"
            style={{
              // minHeight: "100hv",
              height: "100%",
              width: "100%",
              // minWidth: "100hv",
              border: "1.5px solid #0066ef",
              borderRadius: "30px",
            }}
          >
            {/* parte de equipos */}
            <div style={{ minWidth: "100hv",}}>
              <h2 style={{color: "#0066ef"}}>Equipos</h2>
            </div>
          </div>  
        </div>
        <div className="mr-5 ml-5 mb-5" style={{ height: "33.33vh"}}>
          <div
            className="d-flex justify-content-center"
            style={{
              // minHeight: "100hv",
              height: "100%",
              width: "100%",
              // minWidth: "100hv",
              border: "1.5px solid #0066ef",
              borderRadius: "30px",
            }}
          >
            {/* parte de equipos */}
            <div style={{ minWidth: "100hv",}}>
              <h2 style={{color: "#0066ef"}}>Publicaciones</h2>
            </div>
          </div>  
        </div>
      </div>
    </>
  );
}

export default Profile;

{
  /* <div className="d-flex justify-content-end mb-3">
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
      </div> */
}

//  <div className="d-flex flex-column h-100 overflow-scroll">
//         <div className="bg-red flex-grow-1 d-flex justify-content-center align-items-center" style={{flexShrink: 0}}>
//           <div
//             className="d-flex justify-content-center"
//             style={{
//               // minHeight: "50hv",
//               // height: "100%",
//               width: "100%",
//               // minWidth: "100hv",
//             }}
//           >
//             <div
//               className="d-flex justify-content-center align-items-center mr-3"
//               style={{
//                 width: "20%",
//               }}
//             >
//               <img
//                 src={web_icon}
//                 width="200"
//                 height="200"
//                 className="rounded-circle"
//               />
//             </div>
//             <div
//               className="mt-3 ml-2 d-flex flex-column align-items-start"
//               style={{
//                 width: "50%",
//               }}
//             >
//               {/* meter aqui la info del user */}
//               <h2>
//                 <b>{nickname}</b>
//               </h2>
//               <br></br>
//               <h2>{name}</h2>
//               <br></br>
//               <br></br>
//               <h4>{sport}</h4>
//               <br></br>
//             </div>
//             <div
//               className="d-flex flex-column align-items-center mt-5"
//               style={{
//                 width: "20%",
//               }}
//             >
//               <Button className="btn btn-primary">Editar</Button>
//             </div>
//           </div>
//         </div>
//         <div
//           className="bg-red ml-5 mr-5 mb-1 flex-grow-1 d-flex justify-content-center align-items-center"
//           style={{ border: "1.5px solid #0066ef", borderRadius: "30px", flexShrink: 0 }}
//         >
//           <div
//             className="d-flex justify-content-center"
//             style={{
//               minHeight: "100hv",
//               height: "100%",
//               width: "100%",
//               minWidth: "100hv",
//               // border: "1.5px solid #0066ef",
//               // borderRadius: "30px",
//             }}
//           >
//             {/* parte de equipos */}
//             <div style={{ minWidth: "100hv",}}>
//               <h2 style={{color: "#0066ef"}}>Equipos</h2>
//             </div>
//           </div>
//         </div>
//          <div
//           className="bg-red ml-5 mr-5 flex-grow-1 d-flex justify-content-center align-items-center"
//           style={{ border: "1.5px solid #0066ef", borderRadius: "30px", flexShrink: 0 }}
//         >
//           <div
//             className="d-flex justify-content-center"
//             style={{
//               // minHeight: "100hv",
//               height: "100%",
//               width: "100%",
//               // minWidth: "100hv",
//               // border: "1.5px solid #0066ef",
//               // borderRadius: "30px",
//             }}
//           >
//             {/* parte de equipos */}
//             <div style={{ minWidth: "100hv",}}>
//               <h2 style={{color: "#0066ef"}}>Equipos</h2>
//             </div>
//           </div>
//         </div>
//       </div>
