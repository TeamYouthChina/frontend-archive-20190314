import React from 'react';
import {
  MDBBtn,
} from 'mdbreact';
import {getAsync} from "../../tool/api-helper";

export class CoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
    
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
        <div>
          <p>
            {this.state.backend.content.note}
          </p>
        </div>
       
        <MDBBtn flat block onClick={this.handleInputClick}>See More</MDBBtn>
      </div>
    ):null;
  }
}

