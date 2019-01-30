import React from 'react';
import {
  MDBCol,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBSelect,
  MBDIcon,
  MDBRow,
  MDBSelectInput,
  MDBSelectOptions,
  MDBSelectOption,
  MDBCollapse,
  MDBCardBody,
  MDBInput,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBFormInline,
  MDBBtn
} from 'mdbreact';

export class SAVU extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      radio: 2,
      options: [
        {
          checked: false,
          disabled: false,
          icon: null,
          value: "全部"
        },
        {
          checked: false,
          disabled: false,
          icon: null,
          value: "文章"
        },
        {
          checked: false,
          disabled: false,
          icon: null,
          value: "视频"
        },
        {
          checked: false,
          disabled: false,
          icon: null,
          value: "用户"
        }
      ]
    };
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  toggle() {
    this.setState({collapse: !this.state.collapse});
  }

  onClick = (nr) => {
    this.setState({
      radio: nr
    });
  }

  render() {
    return (
      <MDBCard className="card-body px-3 pb-3" block>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="2">
              <MDBSelect
                multiple
                color="primary"
                options={this.state.options}
                selected="搜索范围"
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBInput label="搜索"/>
            </MDBCol>
            <MDBCol md="2">
              <br/>
              <MDBBtn
                outline
                color="primary"
                rounded
                size="sm"
                type="submit"
              >
                搜索
              </MDBBtn>
            </MDBCol>


          </MDBRow>

          <p>
            <MDBCollapse isOpen={this.state.collapse} style={{height: "3em"}}
                         style={{scrollMarginBottom: "200em"}}>
              <hr/>
              <h6>高级选项</h6>
              <MDBRow>
                <MDBCol md="6">
                  <div>
                    {/* Material unchecked */}
                    <MDBInput label="Filled-in unchecked" type="checkbox" id="checkbox1"/>

                    {/* Material checked */}
                    <MDBInput label="Filled-in unchecked" checked type="checkbox" id="checkbox2"/>

                    {/* Material unchecked disabled */}
                    <MDBInput label="Filled-in unchecked" disabled type="checkbox" id="checkbox3"/>

                    {/* Material checked disabled */}
                    <MDBInput label="Filled-in unchecked" checked disabled type="checkbox" id="checkbox4"/>
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <MDBInput
                    gap
                    onClick={() => this.onClick(1)}
                    checked={this.state.radio === 1}
                    label="Default unchecked"
                    type="radio"
                    id="radio1"
                  />
                  <MDBInput
                    gap
                    onClick={() => this.onClick(2)}
                    checked={this.state.radio === 2}
                    label="Default checked"
                    type="radio"
                    id="radio2"
                  />
                  <MDBInput
                    gap
                    onClick={() => this.onClick(3)}
                    checked={this.state.radio === 3}
                    label="Default unchecked disabled"
                    disabled
                    type="radio"
                    id="radio3"
                  />
                  <MDBInput
                    gap
                    onClick={() => this.onClick(3)}
                    checked={this.state.radio === 2}
                    label="Default checked disabled"
                    disabled
                    type="radio"
                    id="radio3"
                  />
                </MDBCol>
              </MDBRow>
            </MDBCollapse>
          </p>
        </MDBCardBody>
      </MDBCard>
    );
  }
}
