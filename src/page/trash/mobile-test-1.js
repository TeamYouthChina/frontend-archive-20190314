import React, {Component} from "react";
import {Redirect} from 'react-router-dom';

import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';
import {getAsync} from '../../tool/api-helper';
import BraftEditor from 'braft-editor';

import './mobile.css';

export class MobileTest1 extends React.Component {
  constructor(props) {
    super(props);
    this.text = MobileTest1.i18n[languageHelper()];
    this.state = {};
  }

  async componentDidMount() {
    this.setState({
      backend: await getAsync('/help')
    });
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (this.state.backend && this.state.backend.content) ? (
      <div className="mobile">
        <div
          dangerouslySetInnerHTML={{__html: BraftEditor.createEditorState(this.state.backend.content.categoryList[0].faqList[1].answer.richText).toHTML()}}
        />
        <div
          dangerouslySetInnerHTML={{__html: BraftEditor.createEditorState(this.state.backend.content.categoryList[0].faqList[0].answer.richText).toHTML()}}
        />
      </div>

    ) : null;
  }
}

MobileTest1.i18n = [
  {},
  {}
];
