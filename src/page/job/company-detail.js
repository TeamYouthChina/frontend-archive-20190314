import React from 'react';
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCardTitle
} from 'mdbreact';

export class CoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentStyle: {
        width: '500px',
        height: '200px',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        OTextOverflow: 'ellipsis',
        TextOverflow: 'ellipsis'
      }
    };
    this.handleInputClick = this.handleInputClick.bind(this);
  }

  handleInputClick() {

    if (Object.keys(this.state.contentStyle).length === 0) {

      this.setState({
        // contentStyle: {
        //   width: '700px',
        //   height:'50px',
        //   overflow: 'hidden',
        //   whiteSpace: 'nowrap',
        //   OTextOverflow: 'ellipsis',
        //   TextOverflow: 'ellipsis'
        // }
      });
    } else {
      this.setState({
        contentStyle: {}
      });
    }
  }

  render() {
    const btnColor = '#E3E9EE';

    return (
      <div>
        <div>
          <p style={{...this.props.basicCHNFont, color: '#454F69', fontWeight: '500', fontSize: '18px'}}>了解公司
            <p className="mt-3" style={{fontWeight: 'normal', fontSize: '14px'}}>
              滴滴出行（www.didiglobal.com）是全球领先的一站式移动出行平台；为5.5亿用户提供出租车、快车、专车、豪华车、顺风车、公交、小巴、代驾、企业级、共享单车、共享电单车、共享汽车、外卖等全面的出行和运输服务，日订单已达3000万。在滴滴平台，超过3000万车主及司机获得灵活赚取收入的机会。
              滴滴出行致力于同城市、出租车行业及社群协作互补，通过智慧交通创新解决全球交通、环保和就业挑战。滴滴正同越来越多的汽车产业链企业建立合作联盟，携手打造汽车运营服务平台。在全球范围内，滴滴与Grab、Lyft、Ola、Uber、99、Taxify、Careem等七大移动出行企业构建了触达全球超过80%的人口、覆盖1000多座城市的合作网络。2018年，滴滴在墨西哥和澳大利亚上线了自有品牌的出行业务，并在日本与软银成立合资公司，提供网约出租车服务。滴滴始终致力于提升用户体验，创造社会价值，建设开放、高效、可持续的移动出行新生态。
            </p>
          </p>
        </div>
        <span>
          {Object.keys(this.state.contentStyle).length === 0 ? '' : '...'}
        </span>
        <br/>
        <div className="text-center">
          <MDBBtn
            rounded size="sm" style={{boxShadow: 'none', backgroundColor: '#E3E9EE'}} 
            color={btnColor} onClick={this.handleInputClick}>
            <p className="m-1" style={{...this.props.basicCHNFont, color: '#8D9AAF', fontSize: '16px'}}>了解更多</p></MDBBtn>
        </div>
      </div>
    );
  }
}

export default CoDetail;
