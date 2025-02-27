import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import Home from '../pages/Home'; // Adjust the import path as necessary

// Mock the logo import with default export
vi.mock('../assets/logo.png', () => ({
    default: 'mocked-logo.png'
}));

vi.mock('react-router-dom', async () => {
    const actual = await vi.importActual('react-router-dom');
    return {
        ...actual,
        useNavigate: () => vi.fn(),
        Link: ({ children }) => <a>{children}</a>, // Mock Link component
    };
});

describe('Home Page Unit Tests', () => {
    test('should display the main button', () => {
        render(<Home />);
        const headingElement = screen.getByText(/Begin Journey/i);
        expect(headingElement).toBeInTheDocument();
    });

    test('should display the image', () => {
        render(<Home />);
        const imageElement = screen.getByAltText('');
        expect(imageElement).toHaveAttribute('src', 'mocked-logo.png');
    });

    test('should display the footer', () => {
        render(<Home />);
        const footerElement = screen.getByRole('footer'); // Assuming the footer has a role of 'contentinfo'
        expect(footerElement).toBeInTheDocument();
    });

    // test('should display the navigation bar', () => {
    //     render(<Home />);
    //     const navElement = screen.getByRole('navigation'); // Assuming the nav has a role of 'navigation'
    //     expect(navElement).toBeInTheDocument();
    // });
});