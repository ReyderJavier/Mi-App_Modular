import { render } from '@testing-library/react';
import IconSun from './IconSun';

describe('Componente IconSun', () => {
  it('se renderiza sin errores', () => {
    render(<IconSun />);
  });

  it('acepta prop size', () => {
    const { container } = render(<IconSun size={48} />);
    const svg = container.querySelector('svg');
    expect(svg).toHaveAttribute('width', '48');
    expect(svg).toHaveAttribute('height', '48');
  });
});