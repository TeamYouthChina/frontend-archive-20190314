import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBBtn,
  MDBRow,
  MDBCol,
} from 'mdbreact';
import {JobCardSquare} from '../../general-component/job-card-square';

class RelatedPosition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentStyle: {
        height: '260px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        OTextOverflow: 'ellipsis',
        TextOverflow: 'ellipsis'
      },
      backend: null
    };
    this.handleInputClick = this.handleInputClick.bind(this);
    this.text = RelatedPosition.i18n[languageHelper()];
  }

  handleInputClick() {

    if (Object.keys(this.state.contentStyle).length === 0) {

      this.setState({
        contentStyle: {
          height: '260px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          OTextOverflow: 'ellipsis',
          TextOverflow: 'ellipsis'
        }
      });
    } else {
      this.setState({
        contentStyle: {}
      });
    }
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        name: 'New Frontier Data',
        relatedWork: [
          {
            id1: {
              content: '123'
            }
          },
          {
            id2: {
              content: '123'
            }
          },
          {
            id3: {
              content: '123'
            }
          },
          {
            id4: {
              content: '123'
            }
          },
          {
            id5: {
              content: '123'
            }
          },
        ],
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
      <div style={{padding: '1rem'}}>
        <div>
          <h4><strong>{this.text.related}</strong></h4>
        </div>
        <div style={this.state.contentStyle}>
          {this.state.backend.relatedWork.map((item) => {
            return (
              <MDBCol size="4" key={item}>
                <JobCardSquare></JobCardSquare>
              </MDBCol>
            );
          })}
        </div>
        <br/>
        <MDBBtn flat style={{width: '100%'}} onClick={this.handleInputClick}>See More</MDBBtn>
      </div>
    ) : null;
  }
}

RelatedPosition.i18n = [
  {
    related: '类似职位推荐',
  },
  {
    related: 'Related Work',
  },
];

export default RelatedPosition;
