import React from 'react';
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCardTitle
} from 'mdbreact';
import {SeeMoreBtn} from './seemore-button';

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

    return (
      <div>
        <div>
          <p style={{...this.props.basicCHNFont, color: '#454F69', fontWeight: '500', fontSize: '18px'}}
             className="mt-2">了解公司
            <p className="mt-3" style={{
              fontWeight: 'normal',
              fontSize: '14px',
              height: '7.5rem',
              lineHeight: '1.5rem',
              overflow: 'hidden'
            }}>
              腾讯科技股份有限公司是中国规模最大的互联网公司，1998年11月由马化腾、张志东、陈一丹、许晨晔、曾李青5位创始人共同创立，总部位于深圳南山区腾讯大厦。腾讯业务拓展至社交、
              娱乐、金融、资讯、工具和平台等不同领域。目前，腾讯拥有中国国内使用人数最多的社交软件腾讯QQ和微信，以及中国国内最大的网络游戏社区腾讯游戏。在电子书领域 ，旗下有阅文集团，
              运营有QQ读书和微信读书。 腾讯于2004年6月16日在香港交易所挂牌上市，于2016年9月5日首次成为亚洲市值最高的上市公司，并于2017年11月21日成为亚洲首家市值突破5000亿美元的公司。
              2017年，腾讯首次跻身《财富》杂志世界500强排行榜，以228.7亿美元的营收位居478位。
            </p>
          </p>
        </div>
        <span>
          {Object.keys(this.state.contentStyle).length === 0 ? '' : '...'}
        </span>
        <br/>
        <div className="text-center">
          <SeeMoreBtn basicCHNFont={this.props.basicCHNFont} btnText={'了解更多'}/>
        </div>
      </div>
    );
  }
}

export default CoDetail;
