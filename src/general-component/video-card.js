import React from 'react';
import {languageHelper} from '../tool/language-helper';


export class VideoCard extends React.Component {
  constructor(props) {
    super(props);
    this.text = VideoCard.i18n[languageHelper()];
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

VideoCard.i18n = [
  {},
  {}
];
