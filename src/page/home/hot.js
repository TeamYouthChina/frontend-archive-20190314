import React from 'react';

import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTabPane,
  MDBTabContent,
  MDBNav
} from 'mdbreact';

import {JobListHome} from './job-list-home';

export class Hot extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#FAFBFD'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 1224,
          }}
        >
          <div>
            <JobListHome
              title="IT / Internet"
              jobIdList={null}
              searchRequestBody={null}
            />
            <JobListHome
              title="金融"
              jobIdList={null}
              searchRequestBody={null}
            />
            <JobListHome
              title="工业"
              jobIdList={null}
              searchRequestBody={null}
            />
          </div>
        </div>
      </div>
    );
  }
}
