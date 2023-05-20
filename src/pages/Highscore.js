import React, { useState, useEffect } from 'react';

const Highscore = () => {
  const [selectedCompetition, setSelectedCompetition] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [allCategory, setAllCategory] = useState([])
  const [allCompetition, setAllCompetition] = useState([])
  const [highscore, setAllHighscore] = useState([])
  useEffect(() => {

    fetch('http://localhost:4000/highscore/allCompetition').then(res => {
      return res.json();
    }).then(data => {
      setAllCompetition(data);
    });
  }, [])

  const handleCompetitionChange = async (event) => {
    setSelectedCompetition(allCompetition[event.target.value]);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ categoryID: allCompetition[event.target.value].categoryID })
    };
    fetch('http://localhost:4000/highscore/allCategory', requestOptions).then(res => {
      return res.json();
    }).then(data => {
        setSelectedCategory(data[0]);
        
    });
  };

  const handleCalculateClick = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ categoryID: selectedCompetition.categoryID, competitionID: selectedCompetition.competitionID })
    };
    fetch('http://localhost:4000/highscore/highscore', requestOptions).then(res => {
      return res.json();
    }).then(data => {
        console.log(data)
        setAllHighscore(data)
        
    });
  };

  return (
    <div className="container my-2">
      <h1 className="my-4 d-flex justify-content-center">High Score</h1>
      
      <div className="form-group ">
        <label>Competition:</label>
        <select
          className="form-control"
          value={selectedCompetition}
          onChange={handleCompetitionChange}
        >
          <option value="">Select Competition</option>
          {allCompetition.map((competition, index) => (
            <option key={index} value={index}>
              {competition.competitionName} -- {competition.competitionType}
            </option>          
          ))}
        </select>
        <div className="form-group my-2">
          <label>Category: {selectedCategory.equipmentName} - {selectedCategory.age} - {selectedCategory.gender}</label>
          
        </div>
      </div>


      <div class="d-flex justify-content-center my-2">
        <button className="btn btn-success" onClick={handleCalculateClick}>
            Show High Score
        </button>
      </div>

      {/* Display high scores */}
      <div className="mt-4 ">
        {highscore.map((archer, index) => {
          return(
            <div class="border p-2">
              <h1>{index+1}. {archer.firstName} {archer.firstName} -- {archer.TotalScore}</h1>

            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Highscore;
