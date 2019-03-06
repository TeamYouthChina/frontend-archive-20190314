import React from 'react';
import {Loading} from '../component/loading';

export const WithLoading = (Component) => (isLoading, ...rest) => {
  class HOC extends React.Component {
    render() {
      return (
        isLoading ? <Loading/> : <Component
          {...this.props}
        />
      );
    }
  }
  return HOC;
};
