import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {
  MDBScrollspyBox,
  MDBScrollspyText,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBCol,
} from 'mdbreact';
import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {CompanyCard} from '../../general-component/company-card';
import CoDetail from '../../general-component/company-detail';
import {CareerCard} from '../../general-component/career-card';




export class Company extends React.Component {
  constructor(props) {
    super(props);
    /*
    * */
    this.state = {
      backend: null,
      active: 0,
      sections: []
    };
    this.text = Company.i18n[languageHelper()];
    this.scrollSpyText = React.createRef();
  }

  componentWillMount() {
    let mockData =
      {
        id: 0,
        jobs:['1','2','3','5','6'],
        status: {
          code: 2000
        }
      };
    this.setState(() => {
      return {
        backend: mockData,
      };
    });
  }
  componentDidMount() {
    let sections = this.scrollSpyText.current.getElementsByClassName('contentHolder');
    this.setState({ sections });
  }


  handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const sections = this.state.sections;
    const lastIndex = sections.length - 1;
    for (let i = 0; i < lastIndex; i++) {
      if ((scrollTop > sections[i].offsetTop + 90) && (scrollTop < sections[i + 1].offsetTop + 90)) {
        this.setState({ active: i });
      }
    };

    if (scrollTop > sections[lastIndex].offsetTop + 90) this.setState({ active: lastIndex });
  }




  render() {
    return (this.state.backend && this.state.backend.status && this.state.backend.status.code === 2000) ? (
      <div>
        <MDBScrollspyBox>
          <MDBScrollspyText onScroll={this.handleScroll} scrollSpyRef={this.scrollSpyText} style={{height:'500px'}}>
            <Header/>
            <br/>
            <MDBRow>
              <MDBCol size="1"></MDBCol>
              <MDBCol size="10">
                <div className="contentHolder" id="section1" >
                  <p className='card-text'>公司详情</p>
                  <div style={{
                    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'
                  }}>

                    <CompanyCard></CompanyCard>
                  </div>
                </div>
                <div className="contentHolder" id="section2" >
                  <p className='card-text'>查看发表职位</p>
                  <div style={{
                    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'
                  }}>

                    {this.state.backend.jobs.map((item) => {
                      return(
                        <CareerCard key={item} idNum={item}></CareerCard>
                      );
                    })}
                  </div>
                </div>
                <div className="contentHolder" id="section3" >
                  <h4>3</h4>
                  <p>
                    Occaecat commodo aliqua delectus. Fap craft beer deserunt
                    skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea
                    sunt next level locavore single-origin coffee in magna veniam.
                    High life id vinyl, echo park consequat quis aliquip banh mi
                    pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim
                    messenger bag. Cred ex in, sustainable delectus consectetur fanny
                    pack iphone.
                  </p>
                  <p>
                    Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
                    enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
                    rights whatever. Anim keffiyeh carles cardigan. Velit seitan
                    mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
                    shorts, williamsburg hoodie minim qui you probably haven't heard
                    of them et cardigan trust fund culpa biodiesel wes anderson
                    aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh
                    artisan ullamco consequat.
                  </p>
                </div>
                <div className="contentHolder" id="section4" >
                  <h4>4</h4>
                  <p>
                    Veniam marfa mustache skateboard, adipisicing fugiat velit
                    pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero.
                    Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed
                    cosby sweater food truck, mcsweeney's quis non freegan vinyl.
                    Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation
                    quis gentrify. Brooklyn adipisicing craft beer vice keytar
                    deserunt.
                  </p>
                  <p>
                    Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
                    enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
                    rights whatever. Anim keffiyeh carles cardigan. Velit seitan
                    mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
                    shorts, williamsburg hoodie minim qui you probably haven't heard
                    of them et cardigan trust fund culpa biodiesel wes anderson
                    aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh
                    artisan ullamco consequat.
                  </p>
                </div>
              </MDBCol>
              <MDBCol size="1"></MDBCol>
            </MDBRow>
            <Footer></Footer>

          </MDBScrollspyText>
          <div style={{position:'fixed',top:'100px',right:'20px'}}>
            <MDBListGroup>
              <MDBListGroupItem href="#section1" active={this.state.active === 0} style={{padding:'5px'}}>详情</MDBListGroupItem>
              <MDBListGroupItem href="#section2" active={this.state.active === 1} style={{padding:'5px'}}>职位</MDBListGroupItem>
              <MDBListGroupItem href="#section3" active={this.state.active === 2} style={{padding:'5px'}}>section3</MDBListGroupItem>
              <MDBListGroupItem href="#section4" active={this.state.active === 3} style={{padding:'5px'}}>section4</MDBListGroupItem>
            </MDBListGroup>
          </div>

        </MDBScrollspyBox>

      </div>

    ) : null;
  }
}

Company.i18n = [
  {
    detail: '公司详情',
    jobList: '查看发表的职位',
    comments: '评论      ',
    answer:'回答',
    benefit:'公司福利',
    condition:'工作环境',
    live:'公司live',
    picture:'公司照片',
    student:'在此公司实习过的学生'
  },
  {
    detail: 'Company detail',
    jobList: 'Jobs in list',
    comments: 'Comments',
    answer:'Reply',
    benefit:'Company Reward',
    condition:'Working Condition',
    live:'Company live',
    picture:'Company photo',
    student:'Students worked in here'
  },
];
