import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { AuthContext } from '../auth/AuthContext';

// 1. test para usuarios no logueados
// Esta función envuelve el componente con los providers que necesita (Router y Auth)
const renderWithProviders = (component, { authValue = {} } = {}) => {
  // Valores por defecto para el contexto de autenticación (usuario no logueado)
  const defaultAuthValue = {
    isAuthenticated: false,
    user: null,
    logout: () => {}, 
  };

  return render(
    <AuthContext.Provider value={{ ...defaultAuthValue, ...authValue }}>
      <MemoryRouter>
        {component}
      </MemoryRouter>
    </AuthContext.Provider>
  );
};



describe('Header - Usuario No Autenticado', () => {
  beforeEach(() => {
    renderWithProviders(<Header />);
  });

  it('Debería mostrar el nombre principal de la pastelería', () => {
    expect(screen.getByText(/Pastelería Mil Sabores/i)).toBeInTheDocument();
  });

  it('Debería mostrar el logo con su texto alternativo', () => {
    expect(screen.getByRole('img', { name: /logo pastelería/i })).toBeInTheDocument();
  });

  it('Debería mostrar los links de navegación para visitantes', () => {
    // Links que siempre son visibles
    expect(screen.getByRole('link', { name: /inicio/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /blogs y noticias/i })).toBeInTheDocument();

    // Links para usuarios no logueados
    expect(screen.getByRole('link', { name: /login/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /registro/i })).toBeInTheDocument();

    // Verificamos que los links de usuario logueado NO están
    expect(screen.queryByRole('link', { name: /perfil/i })).toBeNull();
    expect(screen.queryByRole('link', { name: /administrador/i })).toBeNull();
    expect(screen.queryByRole('button', { name: /salir/i })).toBeNull();
  });

  it('Debería tener el link de "Blogs y Noticias" apuntando a la ruta interna correcta', () => {
    const noticiasLink = screen.getByRole('link', { name: /blogs y noticias/i });
    expect(noticiasLink.getAttribute('href')).toBe('/noticias');
  });

  it('Debería mostrar la barra de búsqueda y su botón', () => {
    expect(screen.getByRole('searchbox')).toBeInTheDocument(); // El input tiene role 'searchbox'
    expect(screen.getByRole('button', { name: /buscar/i })).toBeInTheDocument();
  });
});



describe('Header - Usuario "user" Autenticado', () => {
  beforeEach(() => {
    // user
    const authValue = {
      isAuthenticated: true,
      user: { role: 'user', name: 'Juan' },
    };
    renderWithProviders(<Header />, { authValue });
  });

  it('Debería mostrar los links específicos para el rol "user"', () => {
    expect(screen.getByRole('link', { name: /perfil/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /carrito/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /pedido/i })).toBeInTheDocument();
  });

  it('Debería mostrar el botón de "Salir" y no los de "Login" y "Registro"', () => {
    expect(screen.getByRole('button', { name: /salir/i })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /login/i })).toBeNull();
    expect(screen.queryByRole('link', { name: /registro/i })).toBeNull();
  });
});



describe('Header - Usuario "admin" Autenticado', () => {
  beforeEach(() => {
    // admin
    const authValue = {
      isAuthenticated: true,
      user: { role: 'admin', name: 'Admin' },
    };
    renderWithProviders(<Header />, { authValue });
  });

  it('Debería mostrar el link de "Administrador"', () => {
    expect(screen.getByRole('link', { name: /administrador/i })).toBeInTheDocument();
  });

  it('No debería mostrar los links del rol "user" como Perfil o Carrito', () => {
    expect(screen.queryByRole('link', { name: /perfil/i })).toBeNull();
    expect(screen.queryByRole('link', { name: /carrito/i })).toBeNull();
  });
});