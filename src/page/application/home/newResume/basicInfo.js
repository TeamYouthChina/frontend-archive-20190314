import React from 'react';
import {languageHelper} from '../../../../tool/language-helper';
import {MDBRow, MDBCol, MDBInput, MDBBtn,MDBAvatar} from "mdbreact";


const basicFontStyle = {
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: 600,
  lineHeight: 'normal',
}

export class BasicInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: null,
      photo: "",
      name: "",
      birthday: "",
      sex: "",
      email: "",
      tele: ""
    };
    this.text = BasicInfo.i18n[languageHelper()];
  }

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({[event.target.name]: event.target.value});
  };
  
  
  async componentDidMount() {
    // const result = await getAsync(`/question/${this.props.match.params.questionId}`)
    // const result = await getAsync('/question/0100')
    let mockData =
      {
        id: 123,
        resumeTitle: {
          id: '123',
          name: '郭益豪',
          img: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg',
          description: ['美国乔治华盛顿大学,', '数据科学家'],
          work: '张三技术总监',
          counts: 86
        },
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {backend: mockData};
    });

  }


  render() {
    return (
      <div
        style={{backgroundColor: '#FFFFFF', boxShadow: '1px 1px 20px rgba(0, 0, 0, 0.08)', padding: '25px 30px'}}>
        <MDBRow>
          <MDBCol size="2"><strong style={{fontSize: '18px', ...basicFontStyle}}>基本信息</strong></MDBCol>
          <MDBCol size="10"><span style={{float: 'right', fontSize: '14px', ...basicFontStyle}}>完成</span></MDBCol>
        </MDBRow>
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow style={{padding: '0 16px'}}>


            <div style={{width:'93%'}}>
              <MDBInput
                value={this.state.photo}
                name="照片"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label="照片"
                required
                className='myResumeInput'
              >
                <div className="valid-feedback">you can use this photo</div>
                <div className="invalid-feedback">upload a valid photo</div>
              </MDBInput>
            </div>
            <MDBAvatar>
              <img
                style={{width: '65px', background: '#F4F4F4'}}
                src='https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg'
                alt=""
                className="rounded-circle"
              />
            </MDBAvatar>



          </MDBRow>
          <MDBRow style={{padding: '0 16px'}}>
            <div style={{width: '100%'}}>
              <MDBInput
                value={this.state.name}
                name="name"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterEmailEx2"
                label="名字"
                style={{width: '100%'}}
                required
              >
                <div className="valid-feedback">you can use this name</div>
                <div className="invalid-feedback">enter a valid name</div>
              </MDBInput>
            </div>
          </MDBRow>
          <MDBRow style={{padding: '0 16px'}}>
            <div style={{width: '100%'}}>
              <MDBInput
                value={this.state.birthday}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterConfirmEx3"
                name="birthday"
                style={{width: '100%'}}
                label="生日"
              >
                {/*<small id="emailHelp" className="form-text text-muted">*/}
                {/*We'll never share your email with anyone else.*/}
                {/*</small>*/}
                <div className="valid-feedback">you can use this birthday</div>
                <div className="invalid-feedback">enter a valid birthday</div>
              </MDBInput>
            </div>
          </MDBRow>
          <MDBRow style={{padding: '0 16px'}}>
            <div style={{width: '100%'}}>
              <MDBInput
                value={this.state.sex}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="sex"
                style={{width: '100%'}}
                label="性别"
                required
              >
                <div className="valid-feedback">useful sex</div>
                <div className="invalid-feedback">enter a valid sex</div>
              </MDBInput>
            </div>
          </MDBRow>
          <MDBRow style={{padding: '0 16px'}}>
            <div style={{width: '100%'}}>
              <MDBInput
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="materialFormRegisterPasswordEx4"
                name="email"
                label="工作邮件"
                style={{width: '100%'}}
                required
              >
                <div className="valid-feedback">valid email</div>
                <div className="invalid-feedback">enter a valid email</div>
              </MDBInput>
            </div>
          </MDBRow>
          <MDBRow style={{padding: '0 16px'}}>
            <div style={{width: '100%'}}>
              <MDBInput
                value={this.state.tele}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="tele"
                label="电话号码"
                style={{width: '100%'}}
                required
              >
                <div className="valid-feedback">valid telephone number</div>
                <div className="invalid-feedback">enter a valid telephone number</div>
              </MDBInput>
            </div>
          </MDBRow>
        </form>
      </div>
    )

  }
}

BasicInfo.i18n = [
  {
    applyBefore: '申请截止'
  },
  {
    applyBefore: 'Apply Before'
  },
];
