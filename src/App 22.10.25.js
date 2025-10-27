import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Welcome from './components/Welcome/Welcome';
import ThemeContext from './context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
// Importar el Layout y las Páginas
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import TodoList from './components/TodoList/TodoList';
import UserDirectory from './components/UserDirectory/UserDirectory';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Welcome nombre="Reyder" />
        <Welcome nombre="Desarrollador" />
        <TodoList />
        <UserDirectory />
      </main>
    </div>
  );
}

export default App;


/* 
import React, { useContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import UserDirectory from './components/UserDirectory/UserDirectory';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher'; // Importamos el interruptor
import ThemeContext from './context/ThemeContext'; // Importamos el contexto

function App() {
  const { theme } = useContext(ThemeContext); // Consumimos el contexto

  // Añadimos una clase 'dark' al div principal si el tema es oscuro
  return (
    <div className={`App ${theme}`}>
      <Header />
      // <ThemeSwitcher /> {/* Añadimos el interruptor */
     // <main>
      //  <UserDirectory />
      //</main>
    //</div>
  //);
//}

//export default App;
//*/