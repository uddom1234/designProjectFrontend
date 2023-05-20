import React, { useEffect, useState } from 'react';

const Rounds = () => {
    const [roundTypeID, setRoundTypeID] = useState("");
    const [competitionID, setCompetitionID] = useState("");
    const [startTime, setStartTime] = useState("");
    const [roundID, setRoundID] = useState("");
    const [allRound, setAllRound] = useState([]);

    const handleInsertRound = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roundTypeID, competitionID, startTime })
        };
        fetch('http://localhost:4000/round/insertRound', requestOptions)
            .then(response => response.json())
            .then(data => alert(data));
    };


    const handleGetAllRounds = () => {
        fetch('http://localhost:4000/round/allRound').then(res => {
            return res.json();
          }).then(data => {
            setAllRound(data);
            alert(data);
          });
    };


    const handleDeleteRound = () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ roundID })
        };
        fetch('http://localhost:4000/round/deleteRound', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    };
    return (
        <div className="container">
            <h1 className="my-4 d-flex justify-content-center">Rounds</h1>

            <div>
                <h2>Insert Round</h2>
                <input type="number" value={roundTypeID} onChange={e => setRoundTypeID(e.target.value)} placeholder="Round Type ID" />
                <input type="number" value={competitionID} onChange={e => setCompetitionID(e.target.value)} placeholder="Competition ID" />
                <input type="datetime-local" value={startTime} onChange={e => setStartTime(e.target.value)} />
                <button className="btn btn-primary mx-2" onClick={handleInsertRound}>Insert</button>
            </div>

            <div className="my-2">
                <h2>Get All Rounds</h2>
                <button className="btn btn-primary" onClick={handleGetAllRounds}>Get All</button>
            </div>


            <div className="my-2">
                <h2>Delete Round</h2>
                <input type="number" value={roundID} onChange={e => setRoundID(e.target.value)} placeholder="Round ID" />
                <button className="btn btn-primary mx-2" onClick={handleDeleteRound}>Delete Round</button>
            </div>
        </div>
    );
};

export default Rounds;
