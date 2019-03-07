import React from 'react';
import {Loading} from '../component/loading';

export const WithLoading = (Component) => (props) => {
  return (
    props.isLoading ? <Loading/> : <Component
      {...props}
    />
  );
};
