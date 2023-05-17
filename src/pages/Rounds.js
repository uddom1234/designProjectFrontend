import React, { useState } from 'react';

const Rounds = () => {
    const [roundTypeID, setRoundTypeID] = useState("");
    const [competitionID, setCompetitionID] = useState("");
    const [startTime, setStartTime] = useState("");
    const [roundID, setRoundID] = useState("");

    const handleInsertRound = () => {
        // Call API to insert round
    };

    const handleGetAllRounds = () => {
        // Call API to get all rounds
    };

    const handleUpdateStartTime = () => {
        // Call API to update start time
    };

    const handleDeleteRound = () => {
        // Call API to delete round
    };

    return (
        <div className="container">
            <h1 className="my-4 d-flex justify-content-center">Rounds</h1>

            <div>
                <h2>Insert Round</h2>
                <input type="number" value={roundTypeID} onChange={e => setRoundTypeID(e.target.value)} placeholder="Round Type ID" />
                <input type="number" value={competitionID} onChange={e => setCompetitionID(e.target.value)} placeholder="Competition ID" />
                <input type="datetime-local" value={startTime} onChange={e => setStartTime(e.target.value)} />
                <button onClick={handleInsertRound}>Insert</button>
            </div>

            <div>
                <h2>Get All Rounds</h2>
                <button onClick={handleGetAllRounds}>Get All</button>
            </div>

            <div>
                <h2>Update Start Time</h2>
                <input type="number" value={roundID} onChange={e => setRoundID(e.target.value)} placeholder="Round ID" />
                <input type="datetime-local" value={startTime} onChange={e => setStartTime(e.target.value)} />
                <button onClick={handleUpdateStartTime}>Update Start Time</button>
            </div>

            <div>
                <h2>Delete Round</h2>
                <input type="number" value={roundID} onChange={e => setRoundID(e.target.value)} placeholder="Round ID" />
                <button onClick={handleDeleteRound}>Delete Round</button>
            </div>
        </div>
    );
};

export default Rounds;
