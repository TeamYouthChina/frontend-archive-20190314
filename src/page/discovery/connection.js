import React from 'react';
import {languageHelper} from '../../tool/language-helper';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBSpinner,
  MDBAvatar, MDBBtn, MDBCard
} from 'mdbreact';
import {ApplicantCard} from '../../general-component/applicant-card/applicant-card';
import {getAsync} from '../../tool/api-helper';
import {ArticleCard} from '../article/article-card';
import classes from '../../general-component/applicant-card/applicant-card.module.css';

export class Connection extends React.Component {
  constructor(props) {
    super(props);
    this.text = Connection.i18n[languageHelper()];
    this.state = {};
  }

  /*
    async componentDidMount() {
      const result = await getAsync(`/discovery/users`)
      console.log(result)
      if (result && result.status && result.status.code === 2000) {
        let mockData =
          {
            content: result.content,
            status: {
              code: result.status.code
            }
          };
        this.setState(() => {
          return {backend: mockData};
        });
      } else {
        let mockData = {
          status: result.status
        }
        this.setState(() => {
          return {backend: mockData};
        });
      }
    }
  */
  render() {
    {/*
    let toShow = <div>No Such Data</div>;
    if (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) {
      const cards = this.state.backend.content.users.map((e, i) => (
        <ApplicantCard id={e.id}/>
      ))
      toShow =
        <MDBContainer fluid>
          <MDBRow style={{margin: '1rem 0rem'}}>
            {cards}
          </MDBRow>
        </MDBContainer>
    }
  */
    }
    {/*
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        <MDBRow left>
          {
            this.state.backend.content.users.map((e, i) => (
              <MDBCol size={4}  style={{marginTop: 20, marginBottom: 20}}>
                <ApplicantCard id={e.id}/>
              </MDBCol>
            ))
          }
        </MDBRow>
      </MDBContainer>
    ) :
      // a spinner displayed when data is loading
      <div className="my-5 text-center">
        <MDBSpinner/>
      </div>;
    */
    }
    return (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        <MDBRow left>
          <MDBCol size={4} style={{marginTop: 20, marginBottom: 20}}>
            <MDBCard className={classes.card}>

              <div className={classes.avatar}>
                <MDBAvatar
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
                  style={{width: '104px', height: '104px'}}
                />
              </div>
              <div className={classes.name}>齐昊</div>
              <div className={classes.position}>职道负责人</div>
              <div className={classes.diploma}>
                乔治华盛顿大学
              </div>

              <div className={classes.friend}>
                2位共同好友
              </div>
              <div className={classes.btn}>
                <MDBBtn flat className={classes.btn_flat}>
                  <p className={classes.btn_font}>加为好友</p>
                </MDBBtn>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol size={4} style={{marginTop: 20, marginBottom: 20}}>
            <MDBCard className={classes.card}>

              <div className={classes.avatar}>
                <MDBAvatar
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
                  style={{width: '104px', height: '104px'}}
                />
              </div>
              <div className={classes.name}>齐昊</div>
              <div className={classes.position}>职道负责人</div>
              <div className={classes.diploma}>
                乔治华盛顿大学
              </div>

              <div className={classes.friend}>
                2位共同好友
              </div>
              <div className={classes.btn}>
                <MDBBtn flat className={classes.btn_flat}>
                  <p className={classes.btn_font}>加为好友</p>
                </MDBBtn>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol size={4} style={{marginTop: 20, marginBottom: 20}}>
            <MDBCard className={classes.card}>

              <div className={classes.avatar}>
                <MDBAvatar
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
                  style={{width: '104px', height: '104px'}}
                />
              </div>
              <div className={classes.name}>齐昊</div>
              <div className={classes.position}>职道负责人</div>
              <div className={classes.diploma}>
                乔治华盛顿大学
              </div>

              <div className={classes.friend}>
                2位共同好友
              </div>
              <div className={classes.btn}>
                <MDBBtn flat className={classes.btn_flat}>
                  <p className={classes.btn_font}>加为好友</p>
                </MDBBtn>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol size={4} style={{marginTop: 20, marginBottom: 20}}>
            <MDBCard className={classes.card}>

              <div className={classes.avatar}>
                <MDBAvatar
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
                  style={{width: '104px', height: '104px'}}
                />
              </div>
              <div className={classes.name}>齐昊</div>
              <div className={classes.position}>职道负责人</div>
              <div className={classes.diploma}>
                乔治华盛顿大学
              </div>

              <div className={classes.friend}>
                2位共同好友
              </div>
              <div className={classes.btn}>
                <MDBBtn flat className={classes.btn_flat}>
                  <p className={classes.btn_font}>加为好友</p>
                </MDBBtn>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol size={4} style={{marginTop: 20, marginBottom: 20}}>
            <MDBCard className={classes.card}>

              <div className={classes.avatar}>
                <MDBAvatar
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
                  style={{width: '104px', height: '104px'}}
                />
              </div>
              <div className={classes.name}>齐昊</div>
              <div className={classes.position}>职道负责人</div>
              <div className={classes.diploma}>
                乔治华盛顿大学
              </div>

              <div className={classes.friend}>
                2位共同好友
              </div>
              <div className={classes.btn}>
                <MDBBtn flat className={classes.btn_flat}>
                  <p className={classes.btn_font}>加为好友</p>
                </MDBBtn>
              </div>
            </MDBCard>
          </MDBCol>
          <MDBCol size={4} style={{marginTop: 20, marginBottom: 20}}>
            <MDBCard className={classes.card}>
              <div className={classes.avatar}>
                <MDBAvatar
                  tag="img"
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  className="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
                  style={{width: '104px', height: '104px'}}
                />
              </div>
              <div className={classes.name}>齐昊</div>
              <div className={classes.position}>职道负责人</div>
              <div className={classes.diploma}>
                乔治华盛顿大学
              </div>
              <div className={classes.friend}>
                2位共同好友
              </div>
              <div className={classes.btn}>
                <MDBBtn flat className={classes.btn_flat}>
                  <p className={classes.btn_font}>加为好友</p>
                </MDBBtn>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

Connection.i18n = [
  {},
  {}
];
