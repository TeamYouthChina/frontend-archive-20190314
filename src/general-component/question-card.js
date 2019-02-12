import React from 'react';
import {
  MDBCard,
  MDBIcon,
  MDBRow,
  MDBCol
} from 'mdbreact';

import {languageHelper} from '../tool/language-helper';

const basicFontStyle={
  fontFamily:'IBM Plex Sans',
  fontStyle:'normal',
  fontWeight:600,
  lineHeight:'normal',
}

export class QuestionCard extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null
    };
    this.text = QuestionCard.i18n[languageHelper()];
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
      <MDBCard style={{marginTop:'10px'}}>
        <div style={{padding:'30px 15px'}}>
          <h5>
            <p style={{fontSize:'18px',color:'#3E4850',...basicFontStyle}}>问题1： Our global teams are constantly iterating, solving problems, and working together to
              empower people around the world to build community and connect in meaningful ways.</p>
          </h5>
          <MDBRow style={{margin:'10px 0px',padding:'1px, 5px'}}>
            <strong>王某某:</strong>
            <span style={{fontSize:'14px',color:'#62686C',...basicFontStyle}}>在诺基亚实习的一周受益匪浅！在诺基亚实习的一周受益匪浅！在诺基亚实习的一周受益匪浅！在诺基亚实习的一周受益匪浅！在诺基亚实习的一周受益匪浅！在诺基亚实习的一周受益匪浅！</span>
          </MDBRow>
          <MDBRow>
            <MDBCol size="2">
              1000天前发布
            </MDBCol>
            <MDBCol size="6">
              
            </MDBCol>
            <MDBCol size="4">
              <span style={{marginRight:'10px',float:'right'}}>收藏</span>
              <span style={{marginRight:'10px',float:'right'}}>109K条赞同</span>
              <span style={{marginRight:'10px',float:'right'}}>109K条评论</span>
            </MDBCol>
          </MDBRow>
        </div>
      </MDBCard>
    ) : null;
  }
}

QuestionCard.i18n = [
  {},
  {},
];
