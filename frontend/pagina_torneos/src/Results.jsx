import { useState, useEffect } from "react";
import axios from "axios";

function Results(props) {
  const [results, setResults] = useState([]);

  const getResults = async () => {
    const response = await axios.get("URL_BACKEND/resultados");
    setResults(response.data);
  };

  useEffect(() => {
    getResults();
  }, []);

  return (
    <>
      {results.map((result) => (
        <div key={result.id} className="result-box">
          <p>
            {result.equipo_local} vs. {result.equipo_visitante}
          </p>
          <p>Resultado: {result.resultado}</p>
          <p>Fecha: {result.fecha}</p>
        </div>
      ))}
    </>
  );
}

export default Results;
