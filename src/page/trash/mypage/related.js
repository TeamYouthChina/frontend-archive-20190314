import React from 'react';
import {languageHelper} from '../../../tool/language-helper';
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCard,
  MDBCardBody,
  MDBCardText,
} from 'mdbreact';
//import {JobCardSquare} from '../../general-component/job-card-square';
//import {YouShi} from './youshi';
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
          <MDBRow>
          <MDBCol size='8'>
          <h4><strong>{this.text.related}</strong></h4>
          </MDBCol>
          <MDBCol>
           <div>
           <h6><strong>{this.text.addnew}</strong></h6>
           </div>
          </MDBCol>
          <MDBCol>
          <button type="button" className="close" aria-label="Close">
            <span aria-hidden="true"><MDBIcon icon="edit" /></span>
          </button>
          </MDBCol>
          </MDBRow>
        </div>
        <div style={this.state.contentStyle}>
          <MDBRow>
            {this.state.backend.relatedWork.map((item) => {
              return (
                <MDBCol size="12" key={item}>
                <MDBCard
                   style={{
                       margin: '10px',
                       height: '5rem'
                         }}
                          >
        <MDBCardBody>
            <MDBCardText>JAVA</MDBCardText>
        </MDBCardBody>
         </MDBCard>
                </MDBCol>
              );
            })}
          </MDBRow>
        </div>
        <br/>
        <MDBBtn flat style={{width: '100%'}} onClick={this.handleInputClick}>See More</MDBBtn>
      </div>
    ) : null;
  }
}

RelatedPosition.i18n = [
  {
    related: '优势标签',
    addnew:'Add a new skill',
  },
  {
    related: 'Related Work',
  },
  
];

export default RelatedPosition;
