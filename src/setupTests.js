/* global jest */
/* global expect */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as matchers from 'jest-a11y/lib/matchers';
import 'jest-axe/extend-expect';

expect.extend(matchers);

Enzyme.configure({ adapter: new Adapter() });

global.requestAnimationFrame = function (cb) {
  cb(0);
};
global.window.cancelAnimationFrame = function () {};
global.createSpyObj = (baseName, methodNames) => {
  const obj = {};

  for (let i = 0; i < methodNames.length; i += 1) {
    obj[methodNames[i]] = jest.fn();
  }

  return obj;
};
global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {},
});
