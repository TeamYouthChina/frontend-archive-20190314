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
  MDBBtn,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBNavLink
} from 'mdbreact';

import {VideoCard} from '../../general-component/video-card';
import {VideoCardSearch} from "../../general-component/video-card-search";

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
        {/*郭亦豪说删掉*/}
        {/*<div className="mt-5">*/}
          {/*<MDBRow className="ml-0 p-0">*/}
            {/*<MDBCol className="d-flex align-items-center justify-content-end ml-2" size="2">*/}
              {/*<p className="m-0" style={{...this.props.basicCHNFont, color: '#8D9AAF', fontSize: '14px'}}>*/}
                {/*{this.state.backend.videoList.length}个结果*/}
              {/*</p>*/}
            {/*</MDBCol>*/}
            {/*<MDBCol className="ml-md-auto mr-4" size="3">*/}
              {/*<MDBBtn color="white" href="/video/create" className="py-3 px-5" style={{boxShadow: 'none'}}>*/}
                {/*<p className="m-0" style={{...this.props.basicCHNFont, color: '#4F65E1', fontSize: '14px'}}>*/}
                  {/*<MDBIcon icon="cloud-upload"/> 上传视频*/}
                {/*</p>*/}
              {/*</MDBBtn>*/}
            {/*</MDBCol>*/}
          {/*</MDBRow>*/}
        {/*</div>*/}
        
        <MDBRow className="mt-2 mb-4" center>
          {this.state.backend.videoList.map((item, index) => {
            return (
              <MDBCol className="mx-1 my-3 pt-3" size="11" key={index}>
                <VideoCardSearch basicCHNFont={this.props.basicCHNFont}/>
              </MDBCol>
            );
          })}
        </MDBRow>
      </div>
    ) : null;
  }
}
