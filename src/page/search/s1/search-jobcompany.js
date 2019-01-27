import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCol,
  MDBCollapse,
  MDBSelect,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBSelectInput,
  MDBSelectOption,
  MDBSelectOptions
} from 'mdbreact';

class SJobCompamy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      radio: 2
    };
    this.onClick = this.onClick.bind(this);

    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
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

  getValueOfSelectOne(value) {
    console.log(value);
  }

  onClick(nr) {
    this.setState({
      radio: nr
    });
  }

  render() {
    return (
      <MDBCard className="card-body px-3 pb-3" block>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md="6" style={{marginTop: '0.55em'}}>
              <form className="form-inline mt-4 mb-4">
                <MDBIcon icon="search"/>
                <input
                  className="form-control form-control-sm ml-3 w-75"
                  type="text"
                  placeholder="搜索公司、工作"
                  aria-label="Search"
                />
              </form>
            </MDBCol>
            <MDBCol md="6">
              <MDBSelect multiple getValue={value => this.getValueOfSelectOne(value)}>
                <MDBSelectInput selected="城市/省"/>
                <MDBSelectOptions search>
                  <MDBSelectOption>全国</MDBSelectOption>
                  <MDBSelectOption>北京</MDBSelectOption>
                  <MDBSelectOption>上海</MDBSelectOption>
                  <MDBSelectOption>广东</MDBSelectOption>
                  <MDBSelectOption>深圳</MDBSelectOption>
                </MDBSelectOptions>
              </MDBSelect>
              <label>城市/省</label>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="2" style={{marginLeft: '2em'}}>
              <MDBSelect multiple getValue={value => this.getValueOfSelectOne(value)}>
                <MDBSelectInput selected="城市/省"/>
                <MDBSelectOptions search>
                  <MDBSelectOption>互联网/IT</MDBSelectOption>
                  <MDBSelectOption>金融</MDBSelectOption>
                  <MDBSelectOption>房地产</MDBSelectOption>
                  <MDBSelectOption>销售</MDBSelectOption>
                  <MDBSelectOption>管理</MDBSelectOption>
                </MDBSelectOptions>
              </MDBSelect>
              <label>行业领域</label>
            </MDBCol>
            <MDBCol md="2" style={{marginLeft: '2em'}}>
              <MDBSelect getValue={value => this.getValueOfSelectOne(value)}>
                <MDBSelectInput selected="实习"/>
                <MDBSelectOptions search>
                  <MDBSelectOption>实习</MDBSelectOption>
                  <MDBSelectOption>兼职</MDBSelectOption>
                  <MDBSelectOption>全职</MDBSelectOption>

                </MDBSelectOptions>
              </MDBSelect>
              <label>岗位</label>
            </MDBCol>
            <MDBCol md="5" className="offset-md-1 px-5" style={{marginTop: '2.2em'}}>
              <MDBCardText>
                热门搜索
                <a href="#!" style={{marginLeft: '1.25rem'}}>Java</a>
                <a href="#!" style={{marginLeft: '1.25rem'}}>C++</a>
                <a href="#!" style={{marginLeft: '1.25rem'}}>其他</a>
              </MDBCardText>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="2" className="offset-md-10">
              <div onClick={this.toggle}><u>高级搜索</u></div>
            </MDBCol>
          </MDBRow>
          <p>
            <MDBCollapse
              isOpen={this.state.collapse}
              style={{
                height: '3em',
                scrollMarginBottom: '200em'
              }}
            >
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

export {SJobCompamy};
