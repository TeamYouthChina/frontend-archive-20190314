import React from 'react';

import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavItem
} from 'mdbreact';

const navyFont = {
  fontFamily: 'PingFang SC',
  fontStyle: 'normal',
  fontWeight: 'normal',
  lineHeight: 'normal',
  color: '#31394D'
};

const caretIconColor = {
  color: '#8D9AAF'
};

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
              <div className="d-md-inline" style={navyFont}>行业
                <MDBIcon icon="caret-down" style={caretIconColor}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={navyFont} href="#!">互联网</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">金融</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">通信</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">交通运输</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">教育</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>

        <MDBNavItem className="mx-2">
          <MDBDropdown>
            <MDBDropdownToggle nav>
              <div className="d-md-inline" style={navyFont}>公司地址
                <MDBIcon icon="caret-down" style={caretIconColor}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={navyFont} href="#!">北京</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">上海</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">广州</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">深圳</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>

        <MDBNavItem className="mx-2">
          <MDBDropdown>
            <MDBDropdownToggle nav>
              <div className="d-md-inline" style={navyFont}>公司类型
                <MDBIcon icon="caret-down" style={caretIconColor}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={navyFont} href="#!">行业巨头</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">初创公司</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">国有企业</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">事业单位</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>

        <MDBNavItem className="mx-2">
          <MDBDropdown>
            <MDBDropdownToggle nav>
              <div className="d-md-inline" style={navyFont}>公司规模
                <MDBIcon icon="caret-down" style={caretIconColor}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={navyFont} href="#!">100人以下</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">100-1000人</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">1000-10000人</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">10000人以上</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>

        <MDBNavItem className="mx-2">
          <MDBDropdown>
            <MDBDropdownToggle nav>
              <div className="d-md-inline" style={navyFont}>行业
                <MDBIcon icon="caret-down" style={caretIconColor}/>
              </div>
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem
                style={navyFont} href="#!">互联网/智能科技</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">金融/咨询</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">汽车/机械/制造</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">地产/建筑</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">消费品</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">生物/医疗</MDBDropdownItem>
              <MDBDropdownItem
                style={navyFont} href="#!">能源</MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBNavItem>
      </div>
    );
  }
}
