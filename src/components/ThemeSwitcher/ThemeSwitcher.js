import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import IconMoon from '../Icons/IconMoon'; // <-- Importar
import IconSun from '../Icons/IconSun';   // <-- Importar
import './ThemeSwitcher.css'; // Crearemos este archivo

const ThemeSwitcher = () => {
  // 3. Usamos el hook useContext para consumir el contexto
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="theme-switcher">
      Cambiar a Modo {theme === 'light' ? 'Oscuro' : 'Claro'}
    </button>
  );
};

export default ThemeSwitcher;