// jest-dom adds custom jest matchers for asserting on DOM nodes.
import "@testing-library/jest-dom";

// jsdom implements neither of these, and both are used at render time
// (react-responsive reads matchMedia; ScrollToTop calls scrollTo).
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

window.scrollTo = () => {};
