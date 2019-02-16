import React from 'react';
import {
  MDBBtn,
} from 'mdbreact';
import {getAsync} from "../../tool/api-helper";

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
          width: '700px',
          height:'50px',
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
  
  async componentDidMount() {
    if (this.props.id) {
      this.setState({
        backend: await getAsync(`/companies/${this.props.id}`)
      });
    } else {
      this.setState({
        backend: await getAsync(`/companies/1`)
      });
    }
  }
  
  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <div>
          <h4><strong>公司详情</strong></h4>
        </div>
        <div style={this.state.contentStyle}>
          <p>
            {this.state.backend.content.note}
          </p>
        </div>
        <span>
          {Object.keys(this.state.contentStyle).length === 0 ? '' : '...'}
        </span>
        <br/>
        <MDBBtn flat style={{width: '100%'}} onClick={this.handleInputClick}>See More</MDBBtn>
      </div>
    ):null;
  }
}

export default CoDetail;
