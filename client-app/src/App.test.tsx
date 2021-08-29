import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('contains a welcome header', () => {
    render(<App />);
    const welcomeElement = screen.getByTestId("welcome-container");
    expect(welcomeElement).toHaveTextContent(/welcome/i)
});
