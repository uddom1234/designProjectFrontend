import React, { useState } from 'react';

const Competitions = () => {
    const [competitionName, setCompetitionName] = useState("");
    const [date, setDate] = useState("");
    const [competitionType, setCompetitionType] = useState("");
    const [categoryID, setCategoryID] = useState("");
    const [competitionID, setCompetitionID] = useState("");

    const handleInsertCompetition = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ competitionName, date, competitionType, categoryID })
        };
        fetch('http://localhost:4000/competition/insertCompetition', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    };
    
    const handleGetAllCompetitions = () => {
        fetch('http://localhost:4000/competition/allCompetition')
            .then(response => response.json())
            .then(data => {
                console.log(data);
            });
    };
    
    const handleDeleteCompetition = (competitionID) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ competitionID })
        };
        fetch('http://localhost:4000/competition/deleteCompetition', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
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
                <button className="btn btn-primary mx-2" onClick={handleInsertCompetition}>Insert</button>
            </div>

            <div className=' my-2'>
                <h2>All Competitions</h2>
                <button className="btn btn-primary" onClick={handleGetAllCompetitions}>Get All</button>
            </div>

            <div>
                <h2>Delete Competition</h2>
                <input type="number" placeholder="Competition ID" value={competitionID} onChange={e => setCompetitionID(e.target.value)}/>
                <button className="btn btn-primary mx-2" onClick={() => handleDeleteCompetition(1)}>Delete</button>
            </div>
        </div>
    );
};

export default Competitions;
