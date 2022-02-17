import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import OpenSign from './OpenSign';
import Parade from './Parade';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/parade/i);
  expect(linkElement).toBeInTheDocument();
});

test('should switch value of boolean prop on button click', () => {
  let isOpen = false;
  render(<OpenSign isOpen={isOpen} setIsOpen={() => {isOpen = !isOpen;}} />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(isOpen).toBe(true);
  fireEvent.click(button);
  expect(isOpen).toBe(false);
});

test('should add a 🦍 to end of array on button click', () => {
  let parade = ['🦍', '🦒', '🦓'];
  render(<Parade paradeArr={parade} setParade={() => {parade.push('🦍');}} />);
  const button = screen.getByText('Gorilla');
  fireEvent.click(button);
  expect(parade).toStrictEqual(['🦍', '🦒', '🦓', '🦍']);
});