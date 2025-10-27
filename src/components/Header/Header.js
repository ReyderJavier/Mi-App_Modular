import React from "react";
import './Header.css';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  return (
    <header className="app-header">
        <div className="header-izquierdo">
          <img src="/logo192.png" alt="Logo de la app" className="logo" />

            <h1>Mi App</h1>
        </div>
        <div className="heaeder-centro">
            <nav>
            {/* Usamos <Link> en lugar de <a href=""> */}
            <Link to="/">Inicio</Link>
            <Link to="/tareas">Tareas</Link>
            <Link to="/directorio">Directorio</Link>
            </nav>
        </div>
        <div className="header-derecho">
            <ThemeSwitcher/>
        </div>
    </header>
  );
};

export default Header;



