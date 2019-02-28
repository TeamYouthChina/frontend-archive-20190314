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

import {CompanyCard} from '../../general-component/company-card/company-card';

export class SearchCompanyResult extends React.Component {
  constructor(props) {

    super(props);

    this.state = {
      backend: null,
      collapseID: ''
    };

  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }
  
  componentWillMount() {
    let mockData =
      {
        id: 0,
        companyList: [
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
        {this.state.backend.companyList.map((item, index) => {
          return (
            
            <MDBRow className="mx-5" center key={index}>
              <MDBCol className="my-3">
                <CompanyCard id={item.id}/>
              </MDBCol>
            </MDBRow>
          );
        })}
      </div>
    ) : null;
  }
}
