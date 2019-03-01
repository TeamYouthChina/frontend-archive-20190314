import React from 'react';
import {languageHelper} from "../../../tool/language-helper";
import {
  MDBCard,
  MDBAvatar,
  MDBIcon,
  MDBProgress,
  MDBRow

} from "mdbreact";
import classes from './apptitle.module.css'
export class AppTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
      firstTime: 1,
      selectType: 1,
      influence:68,
      description:['1','2'],
      resumeTitle:{
        id:'123',
        name:'Alice',
        img:'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg',
        description:['美国乔治华盛顿大学,','数据科学家'],
        work:'张三技术总监',
        counts:86,
        location:'华盛顿，美国'

      },
    };
    this.text = AppTitle.i18n[languageHelper()];
  }


  render() {
    const {img, name, description, work,influence} = this.props.data || this.state.resumeTitle

    return (
      <MDBCard
        style={{
          orderRadius: '0px',
          boxShadow: 'none',
          borderRadius: '2px',
          display: 'flex',
          flexDirection: 'row',
          height: '12.125rem',
          background: '#4F65E1',
          alignItems:'center'
        }}
      >
        <MDBCard
          style={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'row',
            boxShadow: 'none',
            height:'8.375rem',
            background: '#5A70E2',
            borderRadius: '2px',
            marginLeft:'6rem',
            alignItems:'center',
            justifyContent:'center'
          }}>
          <div
            style={{
              width:'6rem',
              height:'6rem',

            }}
          >
            <MDBAvatar
              tag="img"
              src='https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg'
              className="rounded-circle img-fluid"
              alt="Sample avatar"

            />
          </div>
          <div  style={{
            marginLeft:'2.75rem',
          }}>
            <div
              style={{
                fontFamily: 'PingFang SC',
                lineHeight:' normal',
                fontSize: '1.5rem',
                color: '#FFFFFF'
              }}
            >
              {name}
            </div>
            <div
              style={{
                fontFamily: 'PingFang SC',
                lineHeight:' normal',
                fontSize: '0.875rem',
                color: ' #B8C2F7'
              }}
            >
              {work}
            </div>
            <div
              style={{
                fontFamily: 'PingFang SC',
                lineHeight:' normal',
                fontSize: '0.875rem',
                color: ' #B8C2F7'
              }}
            >
              <MDBIcon icon="map-marker" className="mr-1"/>
              {this.state.resumeTitle.location}
            </div>
          </div>
        </MDBCard>

        <MDBCard
          style={{
            flexGrow: 2,
            flexDirection: 'row',
            boxShadow: 'none',
            height:'8.375rem',
            background: '#5A70E2',
            borderRadius: '2px',
            marginLeft:'1rem',
            marginRight:'6rem',
            alignItems:'center',
            justifyContent:'center'
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems:'flex-end',
              }}
            >
              <div
                style={{
                  fontFamily: 'PingFang SC',
                  lineHeight:' normal',
                  fontSize: '1.125rem',
                  color: '#FFFFFF'
                }}
              >影响力 1909</div>
              <div
                style={{
                  display: 'flex',
                  width: '3.1875rem',
                  height: '1.25rem',
                  marginLeft: '1.25rem',
                  background: '#687EEE',
                  borderRadius: '7.5px',
                  alignItems:'center',
                  justifyContent:'center',
                  fontFamily: 'PingFang SC',
                  lineHeight:' normal',
                  fontSize: '0.75rem',
                  color: '#FAFBFD'
                }}
              >Lv. 6</div>
            </div>
            <div
              style={{
                display: 'flex',
                alignItems:'flex-end',
                justifyContent:'space-between',
                fontFamily: 'PingFang SC',
                lineHeight:' normal',
                fontSize: '0.75rem',
                color: '#B8C2F7',
                marginTop:'0.85rem'
              }}
            >
              <div>1000</div>
              <div>2400</div>

            </div>
            <div
              style={{
                width:'38.5625rem',
                height:'1rem',

                borderRadius: '7.5px'
              }}
            >
              <MDBProgress value={50} />
            </div>
          </div>
        </MDBCard>
      </MDBCard>

    );

  }
}

AppTitle.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
