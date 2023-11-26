import {NavLink} from 'react-router-dom';
import React from 'react';

const Toolbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">БГП № 11</span>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Главная</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacts">Контакты</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/note">Запись на прием</NavLink>
            </li>
          </ul>
      </div>
    </nav>
  );
};

export default Toolbar;