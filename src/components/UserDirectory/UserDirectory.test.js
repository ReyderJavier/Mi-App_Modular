import { render, screen, waitFor } from '@testing-library/react';
import UserDirectory from './UserDirectory';

// Mock simple de fetch
global.fetch = jest.fn();

describe('Componente UserDirectory', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('muestra mensaje de carga', () => {
    // Mock que nunca resuelve para mostrar "cargando"
    fetch.mockImplementation(() => new Promise(() => {}));
    
    render(<UserDirectory />);
    expect(screen.getByText(/cargando usuarios/i)).toBeInTheDocument();
  });
});