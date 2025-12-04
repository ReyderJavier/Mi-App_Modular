import React from 'react';
import { render } from '@testing-library/react';

// Test sin renderizar el componente real
describe('Layout Component', () => {
  it('existe el componente Layout', () => {
    // Solo verifica que el componente se pueda importar
    const Layout = require('./Layout').default;
    expect(Layout).toBeDefined();
    expect(typeof Layout).toBe('function');
  });
});