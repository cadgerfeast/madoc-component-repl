// window.amdRequire
Object.defineProperty(window, 'amdRequire', {
  writable: true,
  value: () => null
});
// console
console.info = jest.fn();
console.warn = jest.fn();
console.error = jest.fn();
console.debug = jest.fn();
