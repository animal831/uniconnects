import React from 'react';
import { Link, useParams } from 'react-router-dom';
import cities from '../data';
import './CityPage.css'; // Import your CSS for styling

const CityPage = () => {
  const { cityName } = useParams();
  const city = cities.find(c => c.name === cityName);

  if (!city) {
    return <h2>City not found</h2>;
  }

  return (
    <div className="city-page-container">
      <h1 className="city-name">{city.name}</h1>
      <ul className="options-list">
        {city.options.map((option, index) => (
          <li key={index} className="option-item">
            <Link to={`/city/${city.name}/${option}`} className="option-link">{option}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityPage;
