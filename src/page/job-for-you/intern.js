import React from 'react';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {JobPushed} from './job-pushed';

import {languageHelper} from '../../tool/language-helper';

import {
  MDBRow,
  MDBCol,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBJumbotron
} from 'mdbreact';

export class Intern extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backend: null,
      selectedTab: 1
    };

    this.text = Intern.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData = {
      content: {
        jobIdList: [
          "id1",
          "id2",
          "id3"
        ]
      },
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
        <div className="h3 font-weight-light mb-4">{this.text.intern}</div>
        <JobPushed/>
      </div>
    ) : null;
  }
}

Intern.i18n = [
  {
    intern: '实习'
  },
  {
    intern: 'intern'
  }
];
