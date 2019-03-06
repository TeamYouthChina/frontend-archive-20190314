import React from 'react';
import {
  MDBBtn,
} from 'mdbreact';
import {getAsync} from "../../tool/api-helper";

export class CoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }


  async componentDidMount() {
    if (this.props.id) {
      this.setState({
        backend: await getAsync(`/companies/${this.props.id}`, true)
      });
    } else {
      this.setState({
        backend: await getAsync(`/companies/1`, true)
      });
    }
  }

  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <div>
          <p
            style={{
              fontFamily: 'PingFang SC',
              lineHeight: 'normal',
              fontSize: '18px',

              color: '#454F69'
            }}
          >公司概况</p>
        </div>
        <div>
          <p>
            {this.state.backend.content.note}
          </p>
        </div>
      </div>
    ) : null;
  }
}

