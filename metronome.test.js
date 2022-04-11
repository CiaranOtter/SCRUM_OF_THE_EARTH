import React from 'react';
// import renderer from 'react-test-renderer';

import App from './musician/App';

// describe('<App />', () => {
//   it('has 1 child', () => {
//     const tree = renderer.create(<App />).toJSON();
//     expect(tree.children.length).toBe(1);
//   });
// });

test('should test Header component', () => {
    const wrapper = shallow(<SafeAreaView />);
    expect(wrapper).toMatchSnapshot();
   });