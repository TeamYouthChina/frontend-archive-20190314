import React from 'react';
import {Link} from 'react-router-dom'
import {languageHelper} from '../../../tool/language-helper';
import {
  MDBBadge,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBAvatar,
} from 'mdbreact';

const basicFont = {
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
}

export class AnswerQShort extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      selectType: 1,
      showText:false,
    }
    this.text = AnswerQShort.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
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
      <div style={{width: '100%'}}>
        <MDBRow style={{marginLeft:'0px'}}>
          <MDBCol size="12">
            <p style={{color: '#3E4850', fontSize: '18px', ...basicFont}}>{this.props.content.title}</p>

            <p style={{color: '#62686C', fontSize: '14px', ...basicFont}}>{this.props.content.descrption}</p>
          </MDBCol>
        </MDBRow>
      </div>
    ) : null;
  }
}

AnswerQShort.i18n = [
  {
    focusNum: '关注者',
    readingNum: '浏览次数',
  },
  {
    focusNum: 'focus number',
    readingNum: 'reading number'
  },
];
