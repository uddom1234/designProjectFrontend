import React, { useState, useEffect } from 'react';

const Ends = () => {
    const [archerID, setArcherID] = useState("");
    const [roundID, setRoundID] = useState('');
    const [round, setRound] = useState([]);
    const [equipment, setEquipment] = useState([]);
    const [archer, setArcher] = useState()

    const [equipmentID, setEquipmentID] = useState("");
    const [selected, setSelected] = useState(false)

    const handleSelectRound = (event) => {
        setRoundID(event.target.value);
    };

    useEffect(() => {
        fetch('http://localhost:4000/api/selectRound').then(res => {
        return res.json();
    }).then(data => {
        console.log(data)
        setRound(data);
    });
    }, [roundID])

    
    const handleChooseArcher = (selectedArcherID) => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ archerID: selectedArcherID })
          };
        try {
            if(selectedArcherID) {
                fetch('http://localhost:4000/api/chooseArcher', requestOptions)
                .then(response => response.json())
                .then(data => {
                  console.log(data);
                  setArcherID(data[0].archerID);
                  setArcher(data); // Update this line
                });
            
              fetch('http://localhost:4000/api/equipment', requestOptions)
                .then(response => response.json())
                .then(data => {
                  console.log(data);
                  setEquipment(data);
                });
            }
        }
        catch {
            alert('error')
        }


      

      };

      const insertScore = (score) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ archerID: archer[0].archerID, roundID: roundID, equipmentID: equipmentID, score: score })
          };

        fetch('http://localhost:4000/api/insertEnd', requestOptions)
          .then(response => alert('Successfully added'))
          .catch(err => alert('Error'))
      }
      

    const handleEquipment = (event) => {
        setEquipmentID(event.target.value);
    };

    const handleDone = () => {
        if (archerID, roundID, equipmentID) {
            setSelected(!selected)
        }
    }

    const EndsInput = ({ endNumber, score, setScore }) => {
        return (
            <div>
                {`End ${endNumber}:`}
                {score.map((arrowScore, index) => (
                    <input
                        key={index}
                        type="number"
                        value={arrowScore}
                        onChange={e => setScore(score.map((s, i) => i === index ? Number(e.target.value) : s))}
                        placeholder={`Arrow ${index + 1}`}
                    />
                ))}
                <button className="btn btn-primary px-2 mx-2" onClick={() => {insertScore(score)}}>Insert</button>
                <hr className="my-6" />
            </div>
        )
    }

    const ShowEquipment = ({archerID}) => {
        const [scores, setScores] = useState(Array(6).fill([0, 0, 0, 0, 0, 0]));

        return(
            <>
                        {scores.map((score, index) => (
                        <EndsInput 
                            endNumber={index + 1} 
                            score={score} 
                            setScore={newScore => setScores(scores.map((s, i) => i === index ? newScore : s))} 
                        />
                    ))}
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
                    onChange={handleSelectRound}
                    >
                    <option value="">Select Round</option>
                    {round.map((id) => (
                        <option key={id} value={id.roundTypeID}>{id.roundTypeName}</option>
                    ))}
                    {/* Map and render competition options */}
                    </select>
                </div>

                <div className="form-group flex-row">
                    <label>Archer:</label>
                    <input
                        type="number"
                        value={archerID}
                        placeholder={`1024`}
                        className="form-control"
                        onChange={(e) => setArcherID(e.target.value)}
                    />
                    <button className="my-2 btn btn-primary px-2" 
                        onClick={() => handleChooseArcher(archerID)}

                    >Select Archer</button>

                </div>

                <div className="form-group ">
                    <label>Equipment:</label>
                    <select
                    className="form-control"
                    value={equipmentID}
                    onChange={handleEquipment}
                    >
                    <option value="">Select Equipment</option>
                    {equipment.map((id) => (
                        <option key={id} value={id.equipmentTypeID}>{id.equipmentName}</option>
                    ))}
                    {/* Map and render competition options */}
                    </select>
                </div>


                <hr className="my-6" />

                <button className="my-6 btn btn-success" onClick={handleDone}>Done</button>

                <hr className="my-6" />
            </div>

            <div>
            {archer && selected && <h1>Welcome {archer[0].firstName}</h1>}
                {selected && <ShowEquipment archerID={archer[0].archerID}/>}
            </div>

        </div>
    );
};

export default Ends;
