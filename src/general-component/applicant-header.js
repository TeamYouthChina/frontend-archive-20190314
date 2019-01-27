import React from 'react';
import {languageHelper} from '../tool/language-helper';


export class ApplicantHeader extends React.Component {
  constructor(props) {
    super(props);
    this.text = ApplicantHeader.i18n[languageHelper()];
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

ApplicantHeader.i18n = [
  {},
  {}
];
