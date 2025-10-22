import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogyNoticias from './BlogsyNoticias';

describe('Componente: BlogsyNoticias', () => {

  beforeEach(() => {
    render(<BlogyNoticias />);
  });

  // Test 1: Verifica que el título principal exista.
  it('Debería renderizar el título principal "Blogs y Noticias"', () => {

    const heading = screen.getByRole('heading', { name: /Blogs y Noticias/i });
    expect(heading).toBeInTheDocument();
  });

  // Test 2: buscamos la url correcta
  it('Debería renderizar un iframe con el título y la fuente correctos', () => {

    const iframe = screen.getByTitle('Blogs y Noticias');
    
    // Verificamos que el elemento exista.
    expect(iframe).toBeInTheDocument();
    
    // url
    expect(iframe).toHaveAttribute('src', 'https://elpais.com/noticias/pasteleria/');
  });

  // Test 3: Verifica que el texto de ayuda esté presente.
  it('Debería mostrar el mensaje de ayuda para el usuario', () => {
    const fallbackText = screen.getByText(/si no carga la página presione el boton/i);
    expect(fallbackText).toBeInTheDocument();
  });

  // Test 4: Verifica que el enlace externo esté correctamente configurado.
  it('Debería mostrar un enlace externo a la página de noticias', () => {
    const externalLink = screen.getByRole('link', { name: /Abrir Noticias/i });

    // Verificamos que el enlace exista.
    expect(externalLink).toBeInTheDocument();
    
    // url
    expect(externalLink).toHaveAttribute('href', 'https://elpais.com/noticias/pasteleria/');
  });

});