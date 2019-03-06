import React from 'react';
import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCardTitle
} from 'mdbreact';
import {SeeMoreBtn} from './seemore-button';
import {getAsync} from '../../../tool/api-helper';

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

  async componentDidMount() {
    this.setState({
      backend: await getAsync(`/companies/${this.props.id}`, true)
    });
  }

  render() {

    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
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
              {this.state.backend.content.note}
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
    ) : null;
  }
}

export default CoDetail;
