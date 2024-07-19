import React from 'react';
import cities from '../data';
import './CityList.css'; // Ensure CSS file is correctly named and located

const CityList = () => {
  return (
    <div className="city-list-container">
      <h1 className="home-heading">UNI-CONNECTS</h1>
      <div className="left-section">
        {/* Placeholder for left section content */}
      </div>
      <div className="city-grid">
        {cities.map((city, index) => (
          <div key={index} className="city-item">
            <a href={`/city/${city.name}`}>{city.name}</a>
          </div>
        ))}
      </div>
      <div className="right-section">
        {/* Placeholder for right section content */}
      </div>
    </div>
  );
};

export default CityList;
