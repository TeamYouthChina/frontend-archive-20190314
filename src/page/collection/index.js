import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import {
  MDBBtn,
  MDBCol,
  MDBRow,
} from 'mdbreact';

import {CollectionCompany} from './collection-company';
import {CollectionJob} from './collection-job';
import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';


export class Collection extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {};
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

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <Header/>
        <MDBRow>
          <MDBCol size="1"></MDBCol>
          <MDBCol size="11">
            <MDBRow>
              <MDBCol size="12">
                <MDBBtn
                  style={{padding: '10px'}}
                  href={`${this.props.match.url}/job`}
                >
                  {this.text.job}
                </MDBBtn>
                <MDBBtn
                  style={{padding: '10px'}}
                  href={`${this.props.match.url}/company`}
                >
                  {this.text.company}
                </MDBBtn>
                <Switch>
                  <Route
                    path={`${this.props.match.url}/job`}
                    component={routeProps => <CollectionJob {...routeProps} />}
                  />
                  <Route
                    path={`${this.props.match.url}/company`}
                    component={routeProps => <CollectionCompany {...routeProps} />}
                  />
                  <Redirect to={`${this.props.match.url}/job`}/>
                </Switch>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <MDBRow>

        </MDBRow>
        <Footer/>
      </div>
    ) : null;
  }
}

Collection.i18n = [
  {
    company: '关注职位',
    job: '关注公司'
  },
  {
    company: 'Company',
    job: 'Job'
  },
];
