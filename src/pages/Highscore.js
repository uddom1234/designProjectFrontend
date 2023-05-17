import React, { useState } from 'react';

const Highscore = () => {
  const [selectedCompetition, setSelectedCompetition] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCompetitionChange = (event) => {
    setSelectedCompetition(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleCalculateClick = () => {
    // Perform API request with selectedCompetition and selectedCategory
    // Update state or handle response accordingly
  };

  return (
    <div className="container my-2">
      <h1 className="my-4 d-flex justify-content-center">High Score Calculator</h1>

      <div className="form-group ">
        <label>Competition:</label>
        <select
          className="form-control"
          value={selectedCompetition}
          onChange={handleCompetitionChange}
        >
          <option value="">Select Competition</option>
          {/* Map and render competition options */}
        </select>
      </div>

      <div className="form-group my-2">
        <label>Category:</label>
        <select
          className="form-control"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Select Category</option>
          {/* Map and render category options */}
        </select>
      </div>
      <div class="d-flex justify-content-center my-2">
        <button className="btn btn-primary " onClick={handleCalculateClick}>
            Calculate High Score
        </button>
      </div>



      {/* Display high scores */}
      <div className="mt-4">
        {/* Map and render high score results */}
      </div>
    </div>
  );
};

export default Highscore;
