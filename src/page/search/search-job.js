import React from 'react';

import {
  MDBRow,
  MDBCol,
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler
} from 'mdbreact';

import {SearchJobCards} from './search-job-cards';
import {JobCardSquare} from '../../general-component/job-card-square/job-card-square';

export class SearchJobResult extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      backend: null,
      collapseID: ''
    };

  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({collapseID: (prevState.collapseID !== collapseID ? collapseID : '')}));
  }

  componentWillMount() {
    let mockData =
      {
        jobList: [
          {id: 1},
          {id: 1},
          {id: 1},
          {id: 1},
          {id: 1},
          {id: 1},
          {id: 1},
          {id: 1},
          {id: 1}
        ],
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <MDBRow className="my-3" center>
          {this.state.backend.jobList.map((item, index) => (
            <MDBCol className="mx-1 my-3" size="11" md="5" xl="3" key={index}>
              <JobCardSquare id={item.id}/>
            </MDBCol>
          ))}
        </MDBRow>
      </div>
    ) : null;
  }
}
