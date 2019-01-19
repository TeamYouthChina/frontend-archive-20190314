import React from 'react';
import {
  MDBCol, MDBRow,
  MDBCard,
  MDBView,
  MDBMask,
  MDBBtn
} from 'mdbreact';

export class ArticleCard1 extends React.Component {
  render() {
    return (
      <MDBCard>
        <MDBRow>
          <MDBCol lg="5" xl="4">
            <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight"/>
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7" xl="8">
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>Title of the news</strong>
            </h3>
            <p className="dark-grey-text">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus et aut
              officiis debitis cum soluta nobis est eligendi placeat facere
              aut rerum.
            </p>
            <p>
              by <a href="#!" className="font-weight-bold">Jessica Clark</a>, 19/04/2018
            </p>
            <MDBBtn color="primary" size="md">
              Read More
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    );
  }


}


ArticleCard1.i18n = [
  {
    scale: '公司规模',
    employ: '招聘职位数量',
  },
  {
    scale: 'Company Scale',
    employ: 'Employ Number',
  },
];
