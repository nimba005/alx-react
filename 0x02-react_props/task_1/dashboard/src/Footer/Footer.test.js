// Similar structure as Header.test.js, but with different checks
test('renders the text "Copyright"', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.text()).toContain('Copyright');
});