import React from 'react';
import { render, screen } from '@testing-library/react';
import { CarritoProvider } from '../auth/CarritoContext';
import Indice from './indice';

describe('Indice (Card)', () => {
  const renderWithProvider = () => {
    return render(
      <CarritoProvider>
        <Indice />
      </CarritoProvider>
    );
  };

  it('Busca que se renderizan 6 cards de producto', () => {
    renderWithProvider();
    const cards = screen.getAllByTestId('producto');
    expect(cards.length).toBe(6);
  });

  it('Busca 6 títulos (h5) de producto', () => {
    renderWithProvider();
    const titles = screen.getAllByRole('heading', { level: 5 });
    expect(titles.length).toBe(6);
  });

  it('Busca un producto específico por su título', () => {
    renderWithProvider();
    expect(
      screen.getByRole('heading', { name: 'Bombones de chocolate', level: 5 })
    ).toBeInTheDocument();
  });
});

describe('Elementos del Indice', () => {
  const renderWithProvider = () => {
    return render(
      <CarritoProvider>
        <Indice />
      </CarritoProvider>
    );
  };

  it('Busca título de productos', async () => {
    renderWithProvider();
    const titulo = await screen.findByText(/Nuestros Productos/i);
    expect(titulo).toBeInTheDocument();
  });
});
