import React from 'react';
import Header from './componentes/Header';
import WeatherContent from './componentes/WeatherContent';
import Footer from './componentes/Footer';
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <div style={mainContentStyle}>
                <WeatherContent />
            </div>
            <Footer />
        </div>
    );
}

const mainContentStyle = {
    minHeight: '80vh',
    padding: '20px'
};

export default App;
