import { render, screen } from '@testing-library/react';
import Error404 from './Error404';

// Mock de react-router-dom
jest.mock('react-router-dom', () => ({
  Link: ({ to, children, ...props }) => (
    <a href={to} {...props}>{children}</a>
  ),
}));

describe('Componente Error404', () => {
  it('muestra mensaje de error 404', () => {
    render(<Error404 />);
    
    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Error 404 página no encontrada')).toBeInTheDocument();
  });

  it('tiene enlace para volver al inicio', () => {
    render(<Error404 />);
    
    const homeLink = screen.getByText('Volver al inicio');
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });
});