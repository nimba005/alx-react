import React, { Component } from 'react';

const WithLogging = ({ WrapperComponent }) => {
  const getDisplayName = (WrapperComponent) => WrapperComponent.displayName || WrapperComponent.name || 'Component';

  WithLogging.displayName = `WithLogging(${getDisplayName(WrapperComponent)})`;

  return class extends Component {
    componentDidMount() {
      console.log(`Component ${getDisplayName(WrapperComponent)} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${getDisplayName(WrapperComponent)} is going to unmount`);
    }

    render() {
      return <WrapperComponent {...this.props} />;
    }
  };
};

export default WithLogging;