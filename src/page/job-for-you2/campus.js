import React from 'react';

import {
  MDBRow,
  MDBCol,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBContainer,
  MDBBtn,
  MDBSpinner
} from 'mdbreact';
import {JobCardBar} from '../../general-component/job-card-bar/job-card-bar';
import {languageHelper} from '../../tool/language-helper';
import {getAsync} from '../../tool/api-helper';

export class Campus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backend:     null, // store all data fetched from backend
      updatedList: [],   // store partial job cards  
      page:        null  // store card numbers (every time it increases by 6)
    };

    this.text = Campus.i18n[languageHelper()];
  }

  async componentDidMount() {
    this.setState({
      backend: await getAsync(`/home/new`) //todo, 暂时全部按照主页API来
    });

    this.handleReadMore();
  }

  // handleReadMore = () => {
  //   const newPage = this.state.page + 6;
  //   this.setState({page: newPage}, () => {
  //     const updatedList = this.state.backend.content.jobList.slice(0, this.state.page);
  //     this.setState({updatedList: updatedList});
  //     console.log(this.state.page);
  //   });
  // };

  //function of readmore button, every time it will add additional 6 cards into the job list.
  handleReadMore = () => {
    const newPage = this.state.page + 6;
    this.setState({
      page: newPage,
      updatedList: this.state.backend.content.jobList.slice(0, newPage)
    });
  };

  render() {
    console.log('render()');

    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
        <div className="pt-4" style={{backgroundColor: '#F3F5F7'}}>
          <MDBContainer>
            <MDBRow center>
              {this.state.updatedList.map((item) => {
                return (
                  <MDBCol key={item.id} className="my-3 px-4 py-1" size="11">
                    <JobCardBar fulltext={item}/>
                  </MDBCol>
                );
              })}
            </MDBRow>

            <div className="text-center pb-5">
              <MDBBtn
                rounded
                size="sm"
                color="rgba-grey-strong"
                onClick={() => this.handleReadMore()}
                style={{
                  ...this.props.basicCHNFont,
                  boxShadow: 'none',
                  fontSize: '16px',
                  marginTop: '8px',
                  display: 'inline-block',
                  fontWeight: '300',
                  color: '#454F69',
                  background: '#E3E9EE'
                }}
              >
                显示全部
              </MDBBtn>
            </div>
          </MDBContainer>
        </div>
      ) :
      // a spinner displayed when data is loading
      <div className="my-5 text-center">
        <MDBSpinner/>
      </div>;
  }
}

Campus.i18n = [
  {
    campus: '校园招聘'
  },
  {
    campus: 'campus'
  }
];
