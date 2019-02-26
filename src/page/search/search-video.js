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
  MDBNavbarToggler,
  MDBNavLink
} from 'mdbreact';

import {VideoCard} from '../../general-component/video-card';

export class SearchVideoResult extends React.Component {
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
        id: 0,
        videoList: [
          {id: 1},
          {id: 2},
          {id: 3},
          {id: 4},
          {id: 5},
          {id: 6}
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
        {this.state.backend.videoList.map((item, index) => {
          return (
            <MDBContainer>
              <MDBRow key={index}>
                <MDBCol className="my-3">
                  <VideoCard/>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          );
        })}
      </div>
    ) : null;
  }
}
