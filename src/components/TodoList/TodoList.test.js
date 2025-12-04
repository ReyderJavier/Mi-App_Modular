import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

// Mock simple ANTES de importar
jest.mock('../../firebaseConfig', () => ({ 
  db: {} 
}));

jest.mock('firebase/firestore', () => ({
  collection: jest.fn(),
  addDoc: jest.fn(),
  deleteDoc: jest.fn(),
  doc: jest.fn(),
  onSnapshot: jest.fn(() => jest.fn()), // ← importante: devuelve función
  serverTimestamp: jest.fn(),
  query: jest.fn(),
  orderBy: jest.fn(),
}));

describe('TodoList - Test simple', () => {
  it('renderiza título', () => {
    render(<TodoList />);
    expect(screen.getByText('Lista de Tareas')).toBeInTheDocument();
  });
});