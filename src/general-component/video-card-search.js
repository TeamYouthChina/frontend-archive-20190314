import React from 'react';
import {
  MDBCard,
  Iframe,
  MDBRow,
  MDBCol,
  MDBContainer
} from 'mdbreact';

import {languageHelper} from '../tool/language-helper';

export class VideoCardSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backend: null
    };

    this.text = VideoCardSearch.i18n[languageHelper()];
  }

  componentDidMount() {
    let mockData =
      {
        heading: 'Heading',
        username: 'Username',
        numberofviews: 'Number of Views',
        timeofpublication: 'Time of Publication',
        content: 'Roboto has a dual nature. It has a mechanical skeleton and the forms are largely geometric. At the same time, the font features friendly and open curves. While some grotesques distort their letterforms to force a rigid rhythm, Roboto doesn’t compromise, allowing letters to be settled into their natural width. This makes for a more natural reading rhythm more commonly found in humanist and serif types.',
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
      <MDBCard news style={{boxShadow: 'none'}}>
        <MDBRow between>

          <MDBCol md="6" lg="4" middle>
            {/*<div className="embed-responsive embed-responsive-16by9" style={{width: '400px'}}>*/}
            {/*<Iframe*/}
            {/*className="embed-responsive-item" src="https://www.youtube.com/embed/tvTRZJ-4EyI"*/}
            {/*allowFullScreen>*/}
            {/*</Iframe>*/}
            {/*</div>*/}
            <div className="text-center p-3">
              <Iframe src="http://player.youku.com/embed/XMTQ0NDAyNzc5Mg=="/>
            </div>
          </MDBCol>

          <MDBCol md="6" lg="8" className="pl-3 pl-md-1 pr-3 py-3">
            <div>
              <div className="social-meta ml-4 ml-md-0" style={{color: '#454F69'}}>
                <MDBRow
                  style={{...this.props.basicCHNFont, fontWeight: '500', fontSize: '18px'}}>
                  东航企业形象宣传片（3分58秒）
                </MDBRow>
                <MDBRow className="mb-2" style={{...this.props.basicCHNFont, fontSize: '16px'}}>
                  齐昊 • 9527 次观看 • 一个月前
                </MDBRow>
                <MDBRow>
                  <p className=" mr-4 mb-0" style={{
                    ...this.props.basicCHNFont,
                    fontSize: '14px',
                    //define maximum lines can be displayed.
                    height: '7.5rem',
                    lineHeight: '1.5rem',
                    overflow: 'hidden'
                  }}>
                    东航企业形象宣传片（3分58秒）
                    <a href="http://www.ceair.com/">http://www.ceair.com/</a>
                  </p>
                </MDBRow>
              </div>
            </div>
          </MDBCol>

        </MDBRow>
      </MDBCard>
    ) : null;
  }
}

VideoCardSearch.i18n = [
  {},
  {},
];

