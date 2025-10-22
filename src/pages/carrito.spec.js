import React from 'react';
import { render, screen } from '@testing-library/react';
import Carrito from './carrito'

describe('Componente: Carrito', () => {
    /* beforeEach(() => {
        render(<Carrito />);
    }); */

    //Test 1: Comprobamos que el titulo principan exista
    it('Titulo principal Carrito', () => {
        render(<Carrito />);
        const heading = screen.getByRole('heading', { name: /Carrito de Compras/i });
        expect(heading).toBeInTheDocument();
    })

        //Test 1: Comprobamos que el segundo titulo exista
    it('Titulo de pedido', () => {
        render(<Carrito />);
        const heading = screen.getByRole('heading', { name: /Resumen del Pedido/i });
        expect(heading).toBeInTheDocument();
    })



})