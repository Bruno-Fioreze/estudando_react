import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

describe('<Posts />', () => {
  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput onChange={fn} value={'testando'} type="search" />);
    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('testando');
  });

  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput onChange={fn} type="search" />);
    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'o valor';
    userEvent.type(input, value);
    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it('should match snapshot', () => {
    const { container } = render(<TextInput />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
