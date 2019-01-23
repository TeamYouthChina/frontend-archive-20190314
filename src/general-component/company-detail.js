import React from 'react';
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCardTitle
} from 'mdbreact';

class CoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentStyle: {
        width: '500px',
        height:'200px',
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
        contentStyle: {
          width: '500px',
          height:'200px',
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

  render() {
    return (
      <div style={{padding: '1rem'}}>
        <div>
          <h4><strong>公司详情</strong></h4>
        </div>
        <div style={this.state.contentStyle}>
          <p>省略我吧！
          省略我吧！
          省略我吧！
          省略我吧！
          省略我吧！
          省略我吧！
          省略我吧！
          省略我吧！
          省略我吧！
          省略我吧！
          省略我吧！ 
            省略我吧
          </p>
        </div>
        <span>
          {Object.keys(this.state.contentStyle).length === 0 ? '' : '...'}
        </span>
        <br/>
        <MDBBtn flat style={{width: '100%'}} onClick={this.handleInputClick}>See More</MDBBtn>
      </div>
    );
  }
}

export default CoDetail;
