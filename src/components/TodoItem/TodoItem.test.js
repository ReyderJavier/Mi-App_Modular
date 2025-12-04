import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';


jest.mock('../Icons/IconTrash', () => () => <svg data-testid="trash-icon" />);

describe('Componente TodoItem', () => {
  const tareaMock = {
    id: 1,
    text: 'Tarea de prueba',
    isComplete: false,
  };

  const mockToggle = jest.fn();
  const mockDelete = jest.fn();

  it('renderiza el texto de la tarea correctamente', () => {
    render(
      <TodoItem 
        task={tareaMock} 
        onToggleComplete={mockToggle}
        onDeleteTask={mockDelete}
      />
    );
    
    expect(screen.getByText('Tarea de prueba')).toBeInTheDocument();
  });

  it('el checkbox refleja el estado de completado de la tarea', () => {
    const { rerender } = render(
      <TodoItem 
        task={{ ...tareaMock, isComplete: false }}
        onToggleComplete={mockToggle}
        onDeleteTask={mockDelete}
      />
    );
    
    expect(screen.getByRole('checkbox')).not.toBeChecked();

    rerender(
      <TodoItem 
        task={{ ...tareaMock, isComplete: true }}
        onToggleComplete={mockToggle}
        onDeleteTask={mockDelete}
      />
    );
    
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('llama a la función toggle cuando se hace clic en el checkbox', () => {
    render(
      <TodoItem 
        task={tareaMock}
        onToggleComplete={mockToggle}
        onDeleteTask={mockDelete}
      />
    );
    
    fireEvent.click(screen.getByRole('checkbox'));
    expect(mockToggle).toHaveBeenCalledWith(1);
  });

  it('llama a la función delete cuando se hace clic en el botón de eliminar', () => {
    render(
      <TodoItem 
        task={tareaMock}
        onToggleComplete={mockToggle}
        onDeleteTask={mockDelete}
      />
    );
    
    fireEvent.click(screen.getByRole('button'));
    expect(mockDelete).toHaveBeenCalledWith(1);
  });

  it('tiene clase "completed" cuando la tarea está completada', () => {
    render(
      <TodoItem 
        task={{ ...tareaMock, isComplete: true }}
        onToggleComplete={mockToggle}
        onDeleteTask={mockDelete}
      />
    );
    
    const elemento = screen.getByRole('listitem');
    expect(elemento).toHaveClass('completed');
  });
});