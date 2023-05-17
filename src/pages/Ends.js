import React, { useState } from 'react';

const Ends = () => {
    const [archerID, setArcherID] = useState("");
    const [roundID, setRoundID] = useState("");
    const [score, setScore] = useState([0, 0, 0, 0, 0, 0]); // default values
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleInsertEnd = () => {
        // Call API to insert end
    };

    const handleSelectRound = () => {
        // Call API to select round
    };

    const handleChooseArcher = () => {
        // Call API to choose archer
    };

    const handleEquipment = () => {
        // Call API to get equipment
    };

    const ShowEquipment = () => {
        return(
            <>
            <div>
                    End 1:
                    {score.map((arrowScore, index) => (
                        <input
                            key={index}
                            type="number"
                            value={arrowScore}
                            onChange={e => setScore(score.map((s, i) => i === index ? Number(e.target.value) : s))}
                            placeholder={`Arrow ${index + 1}`}
                        />
                    ))}
                    <button className= "btn btn-primary px-2 mx-2" onClick={handleInsertEnd}>Insert</button>
                    <hr className="my-6" />
                </div>

                <div>
                    End 2:
                    {score.map((arrowScore, index) => (
                        <input
                            key={index}
                            type="number"
                            value={arrowScore}
                            onChange={e => setScore(score.map((s, i) => i === index ? Number(e.target.value) : s))}
                            placeholder={`Arrow ${index + 1}`}
                        />
                    ))}
                    <button className= "btn btn-primary px-2 mx-2" onClick={handleInsertEnd}>Insert</button>
                    <hr className="my-6" />
                </div>

                <div>
                    End 3:
                    {score.map((arrowScore, index) => (
                        <input
                            key={index}
                            type="number"
                            value={arrowScore}
                            onChange={e => setScore(score.map((s, i) => i === index ? Number(e.target.value) : s))}
                            placeholder={`Arrow ${index + 1}`}
                        />
                        
                    ))}
                    <button className= "btn btn-primary px-2 mx-2" onClick={handleInsertEnd}>Insert</button>
                    <hr className="my-6" />
                </div>

                <div>
                    End 4:
                    {score.map((arrowScore, index) => (
                        <input
                            key={index}
                            type="number"
                            value={arrowScore}
                            onChange={e => setScore(score.map((s, i) => i === index ? Number(e.target.value) : s))}
                            placeholder={`Arrow ${index + 1}`}
                        />
                    ))}
                    <button className= "btn btn-primary px-2 mx-2" onClick={handleInsertEnd}>Insert</button>
                    <hr className="my-6" />
                </div>

                <div>
                End 5:
                    {score.map((arrowScore, index) => (
                        <input
                            key={index}
                            type="number"
                            value={arrowScore}
                            onChange={e => setScore(score.map((s, i) => i === index ? Number(e.target.value) : s))}
                            placeholder={`Arrow ${index + 1}`}
                        />
                    ))}
                    <button className= "btn btn-primary px-2 mx-2" onClick={handleInsertEnd}>Insert</button>
                    <hr className="my-6" />

                </div>

                <div>
                End 6:
                    {score.map((arrowScore, index) => (
                        <input
                            key={index}
                            type="number"
                            value={arrowScore}
                            onChange={e => setScore(score.map((s, i) => i === index ? Number(e.target.value) : s))}
                            placeholder={`Arrow ${index + 1}`}
                        />
                    ))}
                    <button className= "btn btn-primary px-2 mx-2" onClick={handleInsertEnd}>Insert</button>
                    <hr className="my-6" />
                </div>
                </>
        )
    }

    return (
        <div className="container">
            <h1 className="my-4 d-flex justify-content-center">End</h1>

            <div>
                <h2>Insert End</h2>
                <div className="form-group ">
                    <label>Round:</label>
                    <select
                    className="form-control"
                    value={roundID}
                    onChange={setRoundID}
                    >
                    <option value="">Select Competition</option>
                    {/* Map and render competition options */}
                    </select>
                </div>

                <div className="form-group ">
                    <label>Round:</label>
                    <select
                    className="form-control"
                    value={archerID}
                    onChange={setArcherID}
                    >
                    <option value="">Select Competition</option>
                    {/* Map and render competition options */}
                    </select>
                </div>

                <div>
                <h2>Archer Equipment</h2>
                    <input type="number" value={archerID} onChange={e => setArcherID(e.target.value)} placeholder="Archer ID" />
                    <button onClick={handleEquipment}>Get Equipment</button>
                </div>

                <hr className="my-6" />

                
            </div>

            <div>
                <ShowEquipment/>
            </div>

        </div>
    );
};

export default Ends;
