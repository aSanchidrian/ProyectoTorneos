import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Notificaciones.css';

const Notificaciones = (props) => {
  const [notificaciones, setNotificaciones] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getNotificaciones = async () => {
      try {
        const response = await axios.get("http://localhost:3001/logs/getLogs", {
          headers: {
            Authorization: `Bearer ${props.sessionToken}`
          }
        });
        setNotificaciones(response.data);
      } catch (error) {
        setError('Error al cargar las notificaciones');
      }
    };

    getNotificaciones();
  }, [props.sessionToken]);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }

  return (
    <div className="notificaciones">
      <h2>Notificaciones</h2>
      <hr className='hr2'></hr>
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        notificaciones.map((notif, index) => (
          <div key={index} className="notificacion">
            <p style={{color:"black"}} className="notificacion-message">
              <strong>{notif.message}</strong>
            </p>
            <p style={{color:"black"}} className="notificacion-date">
              {formatDate(notif.date)}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Notificaciones;