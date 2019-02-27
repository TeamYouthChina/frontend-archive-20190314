import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {MDBContainer,MDBRow, MDBCol} from 'mdbreact';
import Lightbox from "react-image-lightbox";
import "./photo.css";

const images = [
  "https://mdbootstrap.com/img/Others/documentation/img%20(145)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(150)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(152)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(42)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(151)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(40)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(148)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(147)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(149)-mini.jpg"
];

const smallImages = [
  "https://mdbootstrap.com/img/Others/documentation/img%20(145)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(150)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(152)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(42)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(151)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(40)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(148)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(147)-mini.jpg",
  "https://mdbootstrap.com/img/Others/documentation/img%20(149)-mini.jpg"
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
