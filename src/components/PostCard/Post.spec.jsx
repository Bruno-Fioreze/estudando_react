import { render, screen, fireEvent } from '@testing-library/react';
import { PostCard } from "."
import { postCardPropsMock } from './mock';

//query o elemento pode não estar na tela, ele não vai levantar um erro.
//get ele levanta um erro se não existir o elemento

const props = postCardPropsMock

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        const { debug } = render(<PostCard {...props} />);
        expect(
            screen.getByRole('img', { name: 'title'})
        ).toBeInTheDocument()
        debug();
    }); 

    it('should render PostCard correctly', () => {
        const { debug } = render(<PostCard {...props} />);
        expect(
            screen.getByRole('img', { name: 'title'})
        ).toHaveAttribute('src', 'img.png');

        expect(
            screen.getByRole('heading', { name: 'title'})
        ).toBeInTheDocument()

        expect(
            screen.getByText('body')
        ).toBeInTheDocument()

        debug();
    }); 

    it('should match snapshot', () => {
        const { container} = render(<PostCard {...props} />);
        expect(container.firstChild).toMatchSnapshot()
    });

});


