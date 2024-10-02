import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileView from './components/ProfileView';
import EditView from './components/EditView';

test('renders ProfileView', () => {
  render(<ProfileView />);
  const linkElement = screen.getByText(/ProfileView/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders EditView', () => {
  render(<EditView />);
  const linkElement = screen.getByText(/EditView/i);
  expect(linkElement).toBeInTheDocument();
});
