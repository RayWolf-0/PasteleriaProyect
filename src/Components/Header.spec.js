import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import { AuthContext } from '../auth/AuthContext';

// Función helper para envolver el componente con los providers necesarios
const renderWithProviders = (component, { authValue = {} } = {}) => {
  // Valores por defecto (usuario no logueado)
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

// 1. Test para usuarios NO logueados (Visitantes)
describe('Header - Usuario No Autenticado', () => {
  beforeEach(() => {
    renderWithProviders(<Header />);
  });

  it('Debería mostrar el nombre principal de la pastelería', () => {
    // Usamos toBeTruthy para máxima compatibilidad con Karma/Jasmine
    expect(screen.getByText(/Pastelería Mil Sabores/i)).toBeTruthy();
  });

  it('Debería mostrar el logo con su texto alternativo', () => {
    expect(screen.getByRole('img', { name: /logo pastelería/i })).toBeTruthy();
  });

  it('Debería mostrar los links de navegación para visitantes', () => {
    // Links públicos
    expect(screen.getByRole('link', { name: /inicio/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /blogs y noticias/i })).toBeTruthy();
    
    // Links de autenticación
    expect(screen.getByRole('link', { name: /login/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /registro/i })).toBeTruthy();

    // Verificar que NO están los links protegidos
    expect(screen.queryByRole('link', { name: /perfil/i })).toBeNull();
    expect(screen.queryByRole('link', { name: /administrador/i })).toBeNull();
    expect(screen.queryByRole('button', { name: /salir/i })).toBeNull();
  });

  it('Debería tener el link de "Blogs y Noticias" apuntando a la ruta interna correcta', () => {
    const noticiasLink = screen.getByRole('link', { name: /blogs y noticias/i });
    expect(noticiasLink.getAttribute('href')).toBe('/noticias');
  });

  it('Debería mostrar la barra de búsqueda y su botón', () => {
    expect(screen.getByRole('searchbox')).toBeTruthy();
    expect(screen.getByRole('button', { name: /buscar/i })).toBeTruthy();
  });
});

// 2. Test para usuarios logueados con rol "cliente"
describe('Header - Usuario "cliente" Autenticado', () => {
  beforeEach(() => {
    const authValue = {
      isAuthenticated: true,
      // CORRECCIÓN CLAVE: Usamos 'cliente' para coincidir con tu Header.jsx
      user: { role: 'cliente', name: 'Juan' }, 
    };
    renderWithProviders(<Header />, { authValue });
  });

  it('Debería mostrar los links específicos para el rol "cliente"', () => {
    expect(screen.getByRole('link', { name: /perfil/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /carrito/i })).toBeTruthy();
    expect(screen.getByRole('link', { name: /pedido/i })).toBeTruthy();
  });

  it('Debería mostrar el botón de "Salir" y no los de "Login" y "Registro"', () => {
    expect(screen.getByRole('button', { name: /salir/i })).toBeTruthy();
    // No deberían estar los de acceso
    expect(screen.queryByRole('link', { name: /login/i })).toBeNull();
    expect(screen.queryByRole('link', { name: /registro/i })).toBeNull();
  });
});

// 3. Test para usuarios logueados con rol "admin"
describe('Header - Usuario "admin" Autenticado', () => {
  beforeEach(() => {
    const authValue = {
      isAuthenticated: true,
      user: { role: 'admin', name: 'Admin' },
    };
    renderWithProviders(<Header />, { authValue });
  });

  it('Debería mostrar el link de "Administrador"', () => {
    expect(screen.getByRole('link', { name: /administrador/i })).toBeTruthy();
  });

  it('No debería mostrar los links del rol "cliente" como Perfil o Carrito', () => {
    expect(screen.queryByRole('link', { name: /perfil/i })).toBeNull();
    expect(screen.queryByRole('link', { name: /carrito/i })).toBeNull();
  });
});