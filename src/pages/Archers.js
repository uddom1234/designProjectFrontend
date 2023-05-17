import React, { useState } from 'react';

function Archers() {
    return (
        <div className="p-4">
            <InsertArcher />
            <GetScore />
            <DeleteArcher />
        </div>
    );
}

function InsertArcher() {
    const [archerData, setArcherData] = useState({
        clubID: '',
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: ''
    });

    const handleChange = (event) => {
        setArcherData({
            ...archerData,
            [event.target.name]: event.target.value
        });
    };

    const insertArcher = async () => {
        // fetch call as before
    };

    return (
        <div className='flex'>
            <h2>Insert Archer</h2>
            <input className="mx-2" name="clubID" onChange={handleChange} placeholder="Club ID" />
            <input className="mx-2" name="firstName" onChange={handleChange} placeholder="First Name" />
            <input className="mx-2" name="lastName" onChange={handleChange} placeholder="Last Name" />
            <input className="mx-2" name="gender" onChange={handleChange} placeholder="Gender" />
            <input className="mx-2" name="dateOfBirth" onChange={handleChange} placeholder="Date of Birth" />
            <button className="btn btn-primary mx-2" onClick={insertArcher}>Insert Archer</button>
        </div>
    );
}

function GetScore() {
    const [archerID, setArcherID] = useState('');

    const handleChange = (event) => {
        setArcherID(event.target.value);
    };

    const getScore = async () => {
        // fetch call as before
    };

    return (
        <div>
            <h2>Get Archer Score</h2>
            <input className="mx-2" name="archerID" onChange={handleChange} placeholder="Archer ID" />
            <button className="btn btn-primary mx-2" onClick={getScore}>Get Archer Score</button>
        </div>
    );
}

function DeleteArcher() {
    const [archerID, setArcherID] = useState('');

    const handleChange = (event) => {
        setArcherID(event.target.value);
    };

    const deleteArcher = async () => {
        // fetch call as before
    };

    return (
        <div>
            <h2>Delete Archer</h2>
            <input className="mx-2" name="archerID" onChange={handleChange} placeholder="Archer ID" />
            <button className="btn btn-primary mx-2" onClick={deleteArcher}>Delete Archer</button>
        </div>
    );
}

export default Archers;
