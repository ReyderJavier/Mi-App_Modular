import { render } from '@testing-library/react';
import IconMoon from './IconMoon';

describe('Componente IconMoon', () => {
  it('se renderiza sin errores', () => {
    render(<IconMoon />);
  });

  it('acepta prop size', () => {
    const { container } = render(<IconMoon size={32} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '32');
    expect(svg).toHaveAttribute('height', '32');
  });

  it('tiene tamaño por defecto de 24', () => {
    const { container } = render(<IconMoon />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '24');
    expect(svg).toHaveAttribute('height', '24');
  });
});