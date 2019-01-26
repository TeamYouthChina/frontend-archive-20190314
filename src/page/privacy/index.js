import React, {Component} from "react";
import {Redirect} from 'react-router-dom';

import {
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBContainer,
  MDBScrollspyBox, MDBScrollspyText,
  MDBListGroup, MDBListGroupItem,
  MDBTooltip, MDBSwitch
} from 'mdbreact';

import {Header} from '../../general-component/header';
import {Footer} from '../../general-component/footer';
import {languageHelper} from '../../tool/language-helper';
import {removeUrlSlashSuffix} from '../../tool/remove-url-slash-suffix';

export class Privacy extends React.Component {
  constructor(props) {
    super(props);
    this.text = Privacy.i18n[languageHelper()];
    this.state = {
      active: 0,
      sections: [],
      switch1: false,
      switch2: false
    };

    this.scrollSpyText = React.createRef();
  }

  componentDidMount() {
    let sections = this.scrollSpyText.current.getElementsByTagName("h4");
    this.setState({sections});
  }

  handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const sections = this.state.sections;
    const lastIndex = sections.length - 1;

    for (let i = 0; i < lastIndex; i++) {
      if ((scrollTop > sections[i].offsetTop - 20) && (scrollTop < sections[i +
      1].offsetTop - 20)) {
        this.setState({active: i});
      }
    }
    ;
    if (scrollTop > sections[lastIndex].offsetTop - 20)
      this.setState({active: lastIndex});
  }

  handleSwitchChange = nr => () => {
    let switchNumber = `switch${nr}`;
    this.setState({
      [switchNumber]: !this.state[switchNumber]
    });
  }

  render() {
    const pathname = removeUrlSlashSuffix(this.props.location.pathname);
    if (pathname) {
      return (<Redirect to={pathname}/>);
    }
    return (
      <MDBContainer
        fluid
        style={{padding: 0}}
      >
        <Header/>
        <MDBRow>
          <MDBCol md="10" className="offset-md-1 pt-3">
            <MDBScrollspyBox>
              <MDBRow>
                <MDBCol md="3">
                  <MDBListGroup>
                    <MDBListGroupItem href="#section1" active={this.state.active === 0}>section1</MDBListGroupItem>
                    <MDBListGroupItem href="#section2" active={this.state.active === 1}>section2</MDBListGroupItem>
                    <MDBListGroupItem href="#section3" active={this.state.active === 2}>section3</MDBListGroupItem>
                    <MDBListGroupItem href="#section4" active={this.state.active === 3}>section4</MDBListGroupItem>
                    <MDBListGroupItem href="#section5" active={this.state.active === 4}>section5</MDBListGroupItem>
                    <MDBListGroupItem href="#section6" active={this.state.active === 5}>section6</MDBListGroupItem>
                    <MDBListGroupItem href="#section7" active={this.state.active === 6}>section7</MDBListGroupItem>
                    <MDBListGroupItem href="#section8" active={this.state.active === 7}>section8</MDBListGroupItem>
                    <MDBListGroupItem href="#section9" active={this.state.active === 8}>section9</MDBListGroupItem>
                    <MDBListGroupItem href="#section10" active={this.state.active === 9}>section10</MDBListGroupItem>
                  </MDBListGroup>
                </MDBCol>
                <MDBCol>
                  <MDBScrollspyText onScroll={this.handleScroll} scrollSpyRef={this.scrollSpyText}
                                    style={{height: '100%', width: '100%'}}>
                    <h4 id="section1">section1</h4>
                    <MDBRow between>
                      <MDBCol md="8">
                        <p>
                          This is a simple hero unit, a simple Jumbotron-style component for
                          calling extra attention to featured content or information.
                          <br/>
                        <small>
                          It uses utility classes for typgraphy and spacing to space content out
                          within the larger container.
                        </small></p>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBSwitch checked={this.state.switch1} onChange={this.handleSwitchChange(1)}/>
                        <MDBSwitch disabled />
                      </MDBCol>
                    </MDBRow>
                    <hr/>
                    <MDBRow between>
                      <MDBCol md="8">
                        <p>
                          This is a simple hero unit, a simple Jumbotron-style component for
                          calling extra attention to featured content or information.
                          <br/>
                          <small>
                            It uses utility classes for typgraphy and spacing to space content out
                            within the larger container.
                          </small></p>
                      </MDBCol>
                      <MDBCol md="2">
                        <MDBSwitch checked={this.state.switch2} onChange={this.handleSwitchChange(2)}/>
                      </MDBCol>
                    </MDBRow>
                    <hr/>

                    
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
                    <h4 id="section2">section2</h4>
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
                    <h4 id="section3">section3</h4>
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
                    <h4 id="section4">section4</h4>
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
                    <h4 id="section5">section5</h4>
                    <p>
                      Veniam marfa mustache skateboard, adipisicing fugiat velit
                      pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero.
                      Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed
                      cosby sweater food truck, mcsweeney's quis non freegan vinyl.
                      Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation
                      quis gentrify. Brooklyn adipisicing craft beer vice keytar
                      deserunt.
                    </p>
                    <h4 id="section6">section6</h4>
                    <p>
                      Veniam marfa mustache skateboard, adipisicing fugiat velit
                      pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero.
                      Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed
                      cosby sweater food truck, mcsweeney's quis non freegan vinyl.
                      Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation
                      quis gentrify. Brooklyn adipisicing craft beer vice keytar
                      deserunt.
                    </p>
                    <h4 id="section7">section7</h4>
                    <p>
                      Veniam marfa mustache skateboard, adipisicing fugiat velit
                      pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero.
                      Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed
                      cosby sweater food truck, mcsweeney's quis non freegan vinyl.
                      Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation
                      quis gentrify. Brooklyn adipisicing craft beer vice keytar
                      deserunt.
                    </p>
                    <h4 id="section8">section8</h4>
                    <p>
                      Veniam marfa mustache skateboard, adipisicing fugiat velit
                      pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero.
                      Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed
                      cosby sweater food truck, mcsweeney's quis non freegan vinyl.
                      Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation
                      quis gentrify. Brooklyn adipisicing craft beer vice keytar
                      deserunt.
                    </p>
                    <h4 id="section9">section9</h4>
                    <p>
                      Veniam marfa mustache skateboard, adipisicing fugiat velit
                      pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero.
                      Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed
                      cosby sweater food truck, mcsweeney's quis non freegan vinyl.
                      Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation
                      quis gentrify. Brooklyn adipisicing craft beer vice keytar
                      deserunt.
                    </p>
                    <h4 id="section10">section10</h4>
                    <p>
                      Veniam marfa mustache skateboard, adipisicing fugiat velit
                      pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero.
                      Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed
                      cosby sweater food truck, mcsweeney's quis non freegan vinyl.
                      Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation
                      quis gentrify. Brooklyn adipisicing craft beer vice keytar
                      deserunt.
                    </p>
                  </MDBScrollspyText>
                </MDBCol>
              </MDBRow>
            </MDBScrollspyBox>
          </MDBCol>
        </MDBRow>
        <Footer/>
      </MDBContainer>
    );
  }
}

Privacy.i18n = [
  {},
  {}
];




