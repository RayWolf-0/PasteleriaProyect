import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { CarritoProvider } from '../auth/CarritoContext';
import Carrito from './carrito';

describe('Componente: Carrito', () => {
  it('Muestra el título cuando el carrito está vacío', () => {
    render(
      <MemoryRouter>
        <CarritoProvider>
          <Carrito />
        </CarritoProvider>
      </MemoryRouter>
    );

    // Verifica que aparezca el título del carrito vacío
    const titulo = screen.getByRole('heading', { name: /Tu carrito está vacío/i });
    expect(titulo).toBeInTheDocument();
  });
});


