import { render } from '@testing-library/svelte';
import Repl from '../Repl.svelte';

describe('Repl', () => {
  it('should render', () => {
    const { container } = render(Repl, {
      props: {
        context: {
          projects: [
            {
              files: []
            }
          ]
        }
      }
    });
    expect(container).toBeDefined();
  });
});
