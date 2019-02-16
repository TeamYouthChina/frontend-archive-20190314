import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink
} from 'mdbreact';

import {CollectionCompany} from './collection-company';
import {CollectionJob} from './collection-job';
import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {ResumeTitle} from "../../general-component/resumeTitle";


export class Collection extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      activeItemPills: 1
    };
    this.text = Collection.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'Summer 2019 Tech Internship',
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });
  }
  
  togglePills = tab => () => {
    if (this.state.activePills !== tab) {
      this.setState({
        activeItemPills: tab
      });
    }
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <Header/>
        <MDBRow>
         
          <MDBCol size="10" className="offset-md-1">
            <p>
                <MDBNav pills color="mdb-color">
                  <MDBNavItem>
                    <MDBNavLink to={`${this.props.match.url}/company`} className={this.state.activeItemPills==="1" ? "active" : "" } onClick={this.togglePills("1")}>
                      {this.text.company}
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to={`${this.props.match.url}/job`} className={this.state.activeItemPills==="2" ? "active" : "" } onClick={this.togglePills("2")}>
                      {this.text.job}
                    </MDBNavLink>
                  </MDBNavItem>
                </MDBNav>
            </p>
        <p>
          <Switch>
          <Route
            path={`${this.props.match.url}/job`}
            component={routeProps => <CollectionJob {...routeProps} />}
          />
          <Route
            path={`${this.props.match.url}/company`}
            component={routeProps => <CollectionCompany {...routeProps} />}
          />
          <Redirect to={`${this.props.match.url}/company`}/>
        </Switch>
            </p>
          </MDBCol>
        </MDBRow>
        
        <Footer/>
      </div>
    ) : null;
  }
}

Collection.i18n = [
  {
    company: '关注公司',
    job: '关注职位'
  },
  {
    company: 'Company',
    job: 'Job'
  },
];
