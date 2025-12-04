import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Componente Home', () => {
  it('renderiza mensaje de bienvenida', () => {
    render(<Home />);
    
    expect(screen.getByText('Bienvenido a la Aplicación de Demostración')).toBeInTheDocument();
  });

  it('tiene instrucciones de navegación', () => {
    render(<Home />);
    
    expect(screen.getByText(/usa la navegación de arriba/i)).toBeInTheDocument();
  });

  it('menciona las secciones disponibles', () => {
    render(<Home />);
    
    const texto = screen.getByText(/directorio de usuarios o la lista de tareas/i);
    expect(texto).toBeInTheDocument();
  });
});