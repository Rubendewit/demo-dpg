import { render } from '@test/utils';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('should render Spinner', () => {
    const { queryByTestId } = render(<Spinner />);
    expect(queryByTestId('spinner')).toBeInTheDocument();
  });
});
