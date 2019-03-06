import React from 'react';

import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavItem
} from 'mdbreact';

export class CompanyNavbarItem extends React.Component {
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
              <div className="d-md-inline" style={{...this.props.basicCHNFont, color: '#31394D'}}>行业
                <MDBIcon icon="caret-down" style={{color: '#8D9AAF'}}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">互联网</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">金融</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">通信</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">交通运输</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">教育</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>

        <MDBNavItem className="mx-2">
          <MDBDropdown>
            <MDBDropdownToggle nav>
              <div className="d-md-inline" style={{...this.props.basicCHNFont, color: '#31394D'}}>公司地址
                <MDBIcon icon="caret-down" style={{color: '#8D9AAF'}}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">北京</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">上海</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">广州</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">深圳</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>

        <MDBNavItem className="mx-2">
          <MDBDropdown>
            <MDBDropdownToggle nav>
              <div className="d-md-inline" style={{...this.props.basicCHNFont, color: '#31394D'}}>公司类型
                <MDBIcon icon="caret-down" style={{color: '#8D9AAF'}}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">行业巨头</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">初创公司</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">国有企业</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">事业单位</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>

        <MDBNavItem className="mx-2">
          <MDBDropdown>
            <MDBDropdownToggle nav>
              <div className="d-md-inline" style={{...this.props.basicCHNFont, color: '#31394D'}}>公司规模
                <MDBIcon icon="caret-down" style={{color: '#8D9AAF'}}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">100人以下</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">100-1000人</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">1000-10000人</MDBDropdownItem>
              <MDBDropdownItem
                style={{...this.props.basicCHNFont, color: '#31394D'}}
                href="#!">10000人以上</MDBDropdownItem>
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
