// src/setupTests.js
import jasmineDom from '@testing-library/jasmine-dom';
import { cleanup } from '@testing-library/react';

beforeAll(() => {
  // Registra todos los matchers: toBeInTheDocument, toHaveTextContent, etc.
  // eslint-disable-next-line no-undef
  jasmine.addMatchers(jasmineDom);
});

afterEach(() => {
  cleanup();
});

// (Opcional) Si tus componentes usan fetch:
// import 'whatwg-fetch';