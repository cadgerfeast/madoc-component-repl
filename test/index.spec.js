const component = require('../index');

describe('index.js', () => {
  it('should have Repl tag', () => {
    expect(component.tag).toEqual('Repl');
  });
});
