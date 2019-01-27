import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer} from 'mdbreact';

export class Article extends React.Component {
  constructor(props) {
    super(props);
    this.text = Article.i18n[languageHelper()];
  }

  render() {
    return (
      <MDBContainer fluid>

      </MDBContainer>
    );
  }
}

Article.i18n = [
  {},
  {}
];
