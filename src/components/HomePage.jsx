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
        <JumbotronComponent title="button counter" description="button counter" imageCard="luna.png" onClick={() => navigateToService('/button-counter')} />
        <JumbotronComponent title="Streamyard" description="" onClick={() => navigateToService('/streamyard')} />
        <JumbotronComponent title="YouTube" description="" onClick={() => navigateToService('/youtube')} />
        <JumbotronComponent title="Dacast" description="" onClick={() => navigateToService('/dacast')} />
        </div>
    );
}

export default HomePage;