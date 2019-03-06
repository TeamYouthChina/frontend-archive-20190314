import React from 'react';
import {MDBIcon} from 'mdbreact';



export class IfCollect extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      collect:true
    };
    if(this.props.ifcollect){
      this.setState({
        collect:this.props.ifcollect
      });
    }
    else{
      this.setState({
        collect:true
      });
    }
  }
  
   isCollect = ()=>{
    this.setState({
      collect: !this.state.collect
    })
   }
 
render() {
  console.log(this.state.collect)
  return  (
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
          {this.state.collect? (<div><MDBIcon far icon="heart" className="red-text mr-2"/>已收藏</div>):
            (<div><MDBIcon far icon="heart" className="mr-2"/>收藏</div>)
          }
        </div>
      </div>
    ) ;


  }
}

