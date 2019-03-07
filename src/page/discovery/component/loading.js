import {MDBSpinner} from 'mdbreact';
import React from 'react';

export const Loading = () => {
  return (
    <div className="my-5 d-flex align-items-center justify-content-center" style={{height: '400px'}}>
      <MDBSpinner/>
    </div>);
};
