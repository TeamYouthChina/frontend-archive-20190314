import React from 'react';
import {Loading} from '../component/loading';

export const WithLoading = (Component) => (props) => {
  class HOC extends React.Component {
    componentDidMount() {
      this.props.
    }

    render() {
      return (
        state.isLoading ? <Loading/> : <Component
          {...props}
        />
      );
    }
  }

  return HOC;
};
