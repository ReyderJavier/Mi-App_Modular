import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

describe('Componente Welcome', () => {
  it('renderiza mensaje de bienvenida por defecto', () => {
    render(<Welcome nombre="Usuario" />);
    
    expect(screen.getByText('Bienvenido Usuario!')).toBeInTheDocument();
  });

  it('renderiza mensaje especial para desarrollador', () => {
    render(<Welcome nombre="desarrollador" />);
    
    expect(screen.getByText('Hola desarrollador eres un crack')).toBeInTheDocument();
  });

  it('renderiza mensaje especial insensible a mayúsculas/minúsculas', () => {
    render(<Welcome nombre="DESARROLLADOR" />);
    
    expect(screen.getByText('Hola desarrollador eres un crack')).toBeInTheDocument();
  });

  it('siempre muestra párrafo descriptivo', () => {
    render(<Welcome nombre="Cualquiera" />);
    
    expect(screen.getByText('Este es un componente modularizado.')).toBeInTheDocument();
  });
});