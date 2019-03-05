import React from 'react';
import {MDBIcon} from 'mdbreact';



export class IfCollect extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      collect:true
    };
   
  }
   isCollect = ()=>{
    this.setState({
      collect: !this.state.collect
    })
   }
  render() {

    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <div
          style={{
            fontFamily: 'PingFang SC',
            lineHeight: 'normal',
            fontSize: '0.875rem',
            color: '#8D9AAF',
          }}
          className="ml-3"
          /*onClick={()=>{
            this.setState({
              collect: !this.state.collect
            });
          }}*/
          onClick={this.isCollect}
        >
          {this.state.collect? (<div><MDBIcon far icon="heart" className="red mr-2"/>已收藏</div>):
            (<div><MDBIcon far icon="heart" className="mr-2"/>收藏</div>)
          }
        </div>
      </div>
    ) : null;


  }
}

