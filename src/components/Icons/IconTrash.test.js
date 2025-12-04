import { render } from '@testing-library/react';
import IconTrash from './IconTrash';

describe('Componente IconTrash', () => {
  it('se renderiza sin errores', () => {
    render(<IconTrash />);
  });

  it('tiene tamaño por defecto de 18', () => {
    const { container } = render(<IconTrash />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '18');
    expect(svg).toHaveAttribute('height', '18');
  });

  it('acepta tamaño personalizado', () => {
    const { container } = render(<IconTrash size={24} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
  });
});