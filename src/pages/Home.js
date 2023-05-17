import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
    <div className="jumbotron mt-5">
        <h1 className="display-4">Welcome to the Archery Club!</h1>
        <p className="lead">Choose an option, how can I help you today?</p>
        <hr className="my-6" />
        <h4>Archer Options:</h4>
        <ul className="list-group">
            <li className="list-group-item">
                <Link to="/ends">Record Ends</Link>
            </li>
            <li className="list-group-item">
                <Link to="/highscores">View Highscores</Link>
            </li>
        </ul>
        <hr className="my-6" />

        <h4>Recorder Options:</h4>
        <ul className="list-group">
            <li className="list-group-item">
                <Link to="/rounds">Manage Rounds</Link>
            </li>
            <li className="list-group-item">
                <Link to="/competitions">Manage Competitions</Link>
            </li>
            <li className="list-group-item">
                <Link to="/archers">Manage Archers</Link>
            </li>
        </ul>

    </div>
</div>
  );
};

export default Home;
