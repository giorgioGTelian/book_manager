import React from 'react';
import JumbotronComponent from './JumbotronComponent';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

function HomePage() {
const navigate = useNavigate(); // useNavigate hook

const navigateToService = (path) => {
    navigate(path); // Use navigate function
    };

    return (
        <div className="home-page">
            <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Book management
        </h2>
        </div>
        </div>

        <JumbotronComponent title="Contatore" description="conta il numero dei click" imageCard="luna.png" onClick={() => navigateToService('/button-counter')} />
        <JumbotronComponent title="Cerca Libri" description="cerca i libri che ti servono" onClick={() => navigateToService('/book-search')} />

        </div>
    );
}

export default HomePage;