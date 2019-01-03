import React from 'react';
import {languageHelper} from '../tool/language-helper';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from 'mdbreact';


export class ArticleCard extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = ArticleCard.i18n[languageHelper()];
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'Xiao Ming',
        content: 'this is a article',
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
      <MDBCard
        style={{
          height: '16rem',
          margin: '10px'
        }}>
        <MDBCardBody
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <MDBCardTitle
              style={{
                fontSize: '1rem'
              }}
            >
              {this.state.backend.name}
            </MDBCardTitle>
            <MDBCardText
              style={{
                fontSize: '0.8rem',
                marginLeft:'10px',
              }}
            >
              {this.state.backend.content}
            </MDBCardText>
          </div>
          
        </MDBCardBody>
      </MDBCard>
    ) : null;
  }
}

ArticleCard.i18n = [
  {
    friends: '位共同好友',
    influence: '影响力'
  },
  {
    applyBefore: 'common friends',
    influence: 'power?'
  },
];
