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
import {Header} from '../../general-component/header/header';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';



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
    return (
      <div>
        <MDBRow className="mx-4">
          <MDBCol>
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
      </div>
    ) ;
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
