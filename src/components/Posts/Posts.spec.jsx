import { render, screen } from '@testing-library/react';
import { Posts } from '.';

const props = {
  posts: [
    { id: 1, title: 'title 1', body: 'body1', cover: 'im1g.png' },
    { id: 2, title: 'title 2', body: 'body2', cover: 'im2g.png' },
    { id: 3, title: 'title 3', body: 'body3', cover: 'im4g.png' }
  ]
};

describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Posts {...props} />);
    expect(screen.getAllByRole('heading', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole('img', { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/title/i)).toHaveLength(3);
  });
  it('should match snapshot', () => {
    const { container } = render(<Posts {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
