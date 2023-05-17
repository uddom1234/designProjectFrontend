import React, { useState } from 'react';

const Competitions = () => {
    const [competitionName, setCompetitionName] = useState("");
    const [date, setDate] = useState("");
    const [competitionType, setCompetitionType] = useState("");
    const [categoryID, setCategoryID] = useState("");
    const [competitionID, setCompetitionID] = useState("");

    const handleInsertCompetition = () => {
        // Call API to insert competition
    };

    const handleGetAllCompetitions = () => {
        // Call API to get all competitions
    };

    const handleDeleteCompetition = (competitionID) => {
        // Call API to delete a competition
    };

    return (
        <div className="container">
            <h1 className="my-4 d-flex justify-content-center">Competition</h1>

            <div>
                <h2>Insert Competition</h2>
                <input type="text" value={competitionName} onChange={e => setCompetitionName(e.target.value)} placeholder="Competition Name" />
                <input type="date" value={date} onChange={e => setDate(e.target.value)} />
                <input type="text" value={competitionType} onChange={e => setCompetitionType(e.target.value)} placeholder="Competition Type" />
                <input type="number" value={categoryID} onChange={e => setCategoryID(e.target.value)} placeholder="Category ID" />
                <button onClick={handleInsertCompetition}>Insert</button>
            </div>

            <div>
                <h2>All Competitions</h2>
                <button onClick={handleGetAllCompetitions}>Get All</button>
            </div>

            <div>
                <h2>Delete Competition</h2>
                <input type="number" placeholder="Competition ID" value={competitionID} onChange={e => setCompetitionID(e.target.value)}/>
                <button onClick={() => handleDeleteCompetition(1)}>Delete</button>
            </div>
        </div>
    );
};

export default Competitions;
