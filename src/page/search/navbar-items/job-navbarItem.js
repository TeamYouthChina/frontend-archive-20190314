import React from 'react';

import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavItem
} from 'mdbreact';

export class JobNavbarItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
    };
  }
  
  render() {
    
    return (
      <div className="d-inline-flex">
        <MDBNavItem className="mx-2">
          <MDBDropdown>
            <MDBDropdownToggle nav>
              <div className="d-md-inline" style={{...this.props.basicCHNFont, color: '#31394D'}}>发步时间
                <MDBIcon icon="caret-down" style={{color: '#8D9AAF'}}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">最近发布</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">最近一周</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">最近一个月</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>

        <MDBNavItem className="mx-2">
          <MDBDropdown>
            <MDBDropdownToggle nav>
              <div className="d-md-inline" style={{...this.props.basicCHNFont, color: '#31394D'}}>实习时间
                <MDBIcon icon="caret-down" style={{color: '#8D9AAF'}}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">立即入职</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">一个月以内</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">一个月-三个月</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">三个月以上</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>

        <MDBNavItem className="mx-2">
          <MDBDropdown>
            <MDBDropdownToggle nav>
              <div className="d-md-inline" style={{...this.props.basicCHNFont, color: '#31394D'}}>工资
                <MDBIcon icon="caret-down" style={{color: '#8D9AAF'}}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">5000以下</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">5001-10000</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">10001-20000</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">20000以上</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>

        <MDBNavItem className="mx-2">
          <MDBDropdown>
            <MDBDropdownToggle nav>
              <div className="d-md-inline" style={{...this.props.basicCHNFont, color: '#31394D'}}>学历要求
                <MDBIcon icon="caret-down" style={{color: '#8D9AAF'}}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">大专</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">本科</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">硕士研究生</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">博士研究生</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>

        <MDBNavItem className="mx-2">
          <MDBDropdown>
            <MDBDropdownToggle nav>
              <div className="d-md-inline" style={{...this.props.basicCHNFont, color: '#31394D'}}>行业
                <MDBIcon icon="caret-down" style={{color: '#8D9AAF'}}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">互联网/智能科技</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">金融/咨询</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">汽车/机械/制造</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">地产/建筑</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">消费品</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">生物/医疗</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">能源</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
      </div>
    );
  }
}
