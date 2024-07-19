import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CityList from './components/CityList';
import CityPage from './components/CityPage';
import ChatRoom from './components/ChatRoom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CityList />} />
        <Route exact path="/city/:cityName" element={<CityPage />} />
        <Route exact path="/city/:cityName/:option" element={<ChatRoom />} />
      </Routes>
    </Router>
  );
};

export default App;
