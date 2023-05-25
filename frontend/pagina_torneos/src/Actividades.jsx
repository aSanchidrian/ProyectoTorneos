import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, Form } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';

function Actividades(props) {
    const [activity, setActivity] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3001/activity/getActivitys", {
            headers: {
                Authorization: `Bearer ${props.sessionToken}`
            }
        }).then((response) => {
            setActivity(response.data);
            console.log(response.data);
        });
    }, []);

    const handleRegister = async (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;
        const sport = document.getElementById("sport").value;
        const date = document.getElementById("date").value;
        const privacity = "true";
        const max_plazas = document.getElementById("max_plazas").value;
        const status = "true";
        const result = "";
        const place = document.getElementById("place").value;

        try {
            const response = await axios.post(
                "http://localhost:3001/activity/createActivity",
                {
                    name,
                    description,
                    sport,
                    date,
                    privacity,
                    max_plazas,
                    status,
                    result,
                    place,
                },
                {
                    headers: {
                        Authorization: `Bearer ${props.sessionToken}`,
                        api_key: 'Api-publica-123',
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
                    Crear Actividad
                </Button>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear una actividad</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleRegister}>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" id="name" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" id="description" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Deporte</Form.Label>
                            <Form.Control type="text" id="sport" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="datetime-local" id="date" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Máximo de plazas</Form.Label>
                            <Form.Control type="number" id="max_plazas" required/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Lugar</Form.Label>
                            <Form.Control type="text" id="place" required/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Crear
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {activity.length > 0 ? (
                activity.map((actividad) => {
                  // Convertir fecha de la actividad a formato legible
                  const date = new Date(actividad.date);
                  const formattedDate = date.toLocaleString();
                  return ( 
                    <div className="d-flex justify-content-around flex-wrap mr-5 ml-5 mb-5 mt-5">
                        <div style={{height: "100%",width: "100%",border: "1.5px solid #0066ef",borderRadius: "30px"}}>
                            <br></br>
                            <h4 className="text-center">{actividad.name}</h4>
                            <hr className="hr2"></hr>
                            <Row>
                                <Col className="text-right font-weight-bold">Descripcion:</Col>
                                <Col className="text-left">{actividad.description}</Col>
                            </Row>
                            <Row>
                                <Col className="text-right font-weight-bold">Deporte:</Col>
                                <Col className="text-left">{actividad.sport}</Col>
                            </Row>
                            <Row>
                                <Col className="text-right font-weight-bold">Fecha:</Col>
                                <Col className="text-left">{formattedDate}</Col>
                            </Row>
                            <Row>
                                <Col className="text-right font-weight-bold">Maximo de Plazas:</Col>
                                <Col className="text-left">{actividad.max_plazas}</Col>
                            </Row>
                            <Row>
                                <Col className="text-right font-weight-bold">Lugar:</Col>
                                <Col className="text-left">{actividad.place}</Col>
                            </Row>
                            <br></br>
                        </div>
                    </div>
                  );
                })
            ) : (
                <p style={{color:"black"}}>No hay actividades disponibles...</p>
            )}
        </div>
    );
}

export default Actividades;
