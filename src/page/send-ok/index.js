import React from 'react';
import {Redirect} from 'react-router-dom';

import {Header} from '../../general-component/header/header';
import {Footer} from '../../general-component/footer';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';

export class SendOK extends React.Component {
  constructor(props) {
    super(props);
    this.text = SendOK.i18n[languageHelper()];
  }

  async componentDidMount() {

  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (
      <div>
        <Header/>

        <Footer/>
      </div>
    );
  }
}

SendOK.i18n = [
  {},
  {}
];
