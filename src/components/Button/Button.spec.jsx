import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '.';

//query o elemento pode não estar na tela, ele não vai levantar um erro.
//get ele levanta um erro se não existir o elemento

describe('<Button />', () => {
  it('should render the button with the text "load more" ', () => {
    render(<Button> load more </Button>);
    expect.assertions(1);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument(button);
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button onClick={fn}> load more </Button>);
    const button = screen.getByRole('button', { name: /load more/i });
    fireEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    render(<Button disabled={true}> load more </Button>);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('should be enabled when disabled is false', () => {
    render(<Button disabled={false}> load more </Button>);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).not.toBeDisabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(
      <Button disabled={false} onClick={fn}>
        {' '}
        load more{' '}
      </Button>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
