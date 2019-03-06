import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer,MDBRow, MDBCol} from 'mdbreact';
import Lightbox from "react-image-lightbox";
import "./photo.css";

const images = [
  "http://47.254.46.117:5000/tencent/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190227014313.png",
  "http://47.254.46.117:5000/tencent/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190227014330.png",
  "http://47.254.46.117:5000/tencent/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190227014337.png",
  "http://47.254.46.117:5000/tencent/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190227014345.png",
  "http://47.254.46.117:5000/tencent/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190227014351.png",
  "http://47.254.46.117:5000/tencent/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190227014356.png",
  "http://47.254.46.117:5000/tencent/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190227014313.png",
  "http://47.254.46.117:5000/tencent/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190227014330.png",
  "http://47.254.46.117:5000/tencent/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190227014337.png",
];

const smallImages = [
  "http://47.254.46.117:5000/tencent/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190227014313.png",
  "http://47.254.46.117:5000/tencent/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190227014330.png",
  "http://47.254.46.117:5000/tencent/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190227014337.png",
  "http://47.254.46.117:5000/tencent/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190227014345.png",
  "http://47.254.46.117:5000/tencent/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190227014351.png",
  "http://47.254.46.117:5000/tencent/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190227014356.png",
  "http://47.254.46.117:5000/tencent/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190227014313.png",
  "http://47.254.46.117:5000/tencent/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190227014330.png",
  "http://47.254.46.117:5000/tencent/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190227014337.png",
];
export class Photo extends React.Component {
  constructor(props) {
    super(props);
    this.text = Photo.i18n[languageHelper()];

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <MDBContainer>
        <div className="mdb-lightbox no-margin">
          <MDBRow>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[0]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 0, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[1]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 1, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[2]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 2, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[3]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 3, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[4]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 4, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[5]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 5, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[6]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 6, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[7]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 7, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
            <MDBCol md="4">
              <figure>
                <img
                  src={smallImages[8]}
                  alt="Gallery"
                  className="img-fluid"
                  onClick={() =>
                    this.setState({ photoIndex: 8, isOpen: true })
                  }
                />
              </figure>
            </MDBCol>
          </MDBRow>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            imageTitle={photoIndex + 1 + "/" + images.length}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </MDBContainer>
    );
  }
}

Photo.i18n = [
  {},
  {}
];
