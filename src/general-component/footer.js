import React from 'react';
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from 'mdbreact';

export class Footer extends React.Component {
  render() {
    return (
      <footer
        className="page-footer font-small py-2"
        style={{
          background: '#31394D',
        }}
      >
        <div style={{backgroundColor: '#31394D'}}
             className="footer-copyright text-center py-3">
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a href=""> YouthChina.com </a>
        </div>
      </footer>
    );
  }
}
