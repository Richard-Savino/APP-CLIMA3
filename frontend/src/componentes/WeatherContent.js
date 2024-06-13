import React, { useState } from 'react';
import axios from 'axios';


const WeatherContent = () => {
    const [location, setLocation] = useState('');
    const [weather, setWeather] = useState(null);
    const [history, setHistory] = useState([]);
    const [error, setError] = useState('');

    const fetchWeather = async () => {
        if (!location) {
            setError('LOCALIZACION ES REQUERIDA');
            return;
        }

        try {
            const response = await axios.get(`http://localhost:5000/api/weather?location=${location}`);
            setWeather(response.data);
            setError('');
            fetchHistory();
        } catch (error) {
            setError('Error al obtener datos del clima');
        }
    };

    const fetchHistory = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/history');
            setHistory(response.data);
        } catch (error) {
            setError('Error al obtener el historial de búsqueda');
        }
    };

    // const getPosition = (weather) => {
    //     return [weather.coord.lat, weather.coord.lon];
    // };

    return (
        <div style={contentStyle}>
            <input 
                type="text" 
                value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                placeholder="Ingrese la ubicacion" 
                style={inputStyle}
            />
            <button onClick={fetchWeather} style={buttonStyle}>Buscar</button>
            {error && <p style={errorStyle}>{error}</p>}
            {weather && (
                <div>
                    <h2>{weather.name}</h2>
                    <p>{weather.main.temp} °C</p>
                    <p>{weather.weather[0].description}</p>
                </div>
            )}
            <h2>Historial de Busqueda</h2>
            <ul>
                {history.map((item, index) => (
                    <li key={index}>{item.location} - {new Date(item.date).toLocaleString()}</li>
                ))}
            </ul>
        </div>
    );
};

const contentStyle = {
    textAlign: 'center',
    margin: '20px 0'
};

const inputStyle = {
    padding: '10px',
    marginRight: '10px'
};

const buttonStyle = {
    padding: '10px'
};

const errorStyle = {
    color: 'red'
};

export default WeatherContent;
