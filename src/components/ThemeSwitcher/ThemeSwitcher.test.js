import { render, screen, fireEvent } from '@testing-library/react';
import ThemeSwitcher from './ThemeSwitcher';
import React from 'react';

// Mock simple
const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: jest.fn(),
});

describe('Componente ThemeSwitcher', () => {
  it('tiene un botón para cambiar tema', () => {
    const toggleTheme = jest.fn();
    
    render(
      <ThemeContext.Provider value={{ theme: 'light', toggleTheme }}>
        <ThemeSwitcher />
      </ThemeContext.Provider>
    );
    
    const boton = screen.getByRole('button');
    expect(boton).toBeInTheDocument();
  });
});