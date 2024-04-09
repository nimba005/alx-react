// Similar structure as Header.test.js, but with different checks
test('renders 2 input and 2 label tags', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('input')).toHaveLength(2);
  expect(wrapper.find('label')).toHaveLength(2);
});