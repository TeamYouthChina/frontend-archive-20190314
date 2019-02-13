import React from 'react';
import {languageHelper} from '../../tool/language-helper';
import {MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow} from "mdbreact";

const basicFont = {
  fontFamily: 'IBM Plex Sans',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: 'normal',
}

export class PaginationUse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1, //当前页码
      groupCount: 5, //页码分组，显示7个页码，其余用省略号显示
      startPage: 1,  //分组开始页码
      totalPage: 1 //总页数
    }
    this.text = PaginationUse.i18n[languageHelper()];
  }

  createPage() {
    const {currentPage, groupCount, startPage} = this.state;
    const totalPage = this.props.pageConfig.totalPage
    let pages = []
    //上一页
    pages.push(
      <MDBPageItem className={currentPage === 1 ? 'disabled' : null} onClick={this.prePageHandeler.bind(this)} key={0}>
        <MDBPageNav className="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Previous</span>
        </MDBPageNav>
      </MDBPageItem>
    )

    if (totalPage <= 10) {
      /*总页码小于等于10时，全部显示出来*/
      for (let i = 1; i <= totalPage; i++) {
        pages.push(
          <MDBPageItem key={i} className={currentPage === i ? "active" : null} onClick={this.pageClick.bind(this, i)}>
            <MDBPageNav className="page-link">
              {i} <span className="sr-only">(current)</span>
            </MDBPageNav>
          </MDBPageItem>
        )
      }
    } else {
      /*总页码大于10时，部分显示*/

      //第一页
      pages.push(
        <MDBPageItem key={1} className={currentPage === 1 ? "active" : null} onClick={this.pageClick.bind(this, 1)}>
          <MDBPageNav className="page-link">
            1 <span className="sr-only">(current)</span>
          </MDBPageNav>
        </MDBPageItem>)

      let pageLength = 0;
      if (groupCount + startPage > totalPage) {
        pageLength = totalPage
      } else {
        pageLength = groupCount + startPage;
      }
      //前面省略号(当当前页码比分组的页码大时显示省略号)
      if (currentPage >= groupCount) {
        pages.push(
          <MDBPageItem key={-1} >
            <MDBPageNav className="page-link">
              ··· <span className="sr-only">(current)</span>
            </MDBPageNav>
          </MDBPageItem>)
      }
      //非第一页和最后一页显示
      for (let i = startPage; i < pageLength; i++) {
        if (i <= totalPage - 1 && i > 1) {
          pages.push(
            <MDBPageItem key={i} className={currentPage === i ? "active" : null} onClick={this.pageClick.bind(this, i)}>
              <MDBPageNav className="page-link">
                {i} <span className="sr-only">(current)</span>
              </MDBPageNav>
            </MDBPageItem>)
        }
      }
      //后面省略号
      if (totalPage - startPage >= groupCount + 1) {
        pages.push(<MDBPageItem key={-2} >
          <MDBPageNav className="page-link">
            ··· <span className="sr-only">(current)</span>
          </MDBPageNav>
        </MDBPageItem>)
      }
      //最后一页
      pages.push(
        <MDBPageItem key={totalPage} className={currentPage === totalPage ? "active" : null} onClick={this.pageClick.bind(this, totalPage)}>
          <MDBPageNav className="page-link">
            {totalPage} <span className="sr-only">(current)</span>
          </MDBPageNav>
        </MDBPageItem>
      )
    }
    //下一页
    pages.push(
      <MDBPageItem className={currentPage === totalPage ? 'disabled' : null} onClick={this.nextPageHandeler.bind(this)} key={totalPage + 1}>
        <MDBPageNav className="page-link" aria-label="Previous">
          <span aria-hidden="true">&raquo;</span>
          <span className="sr-only">next</span>
        </MDBPageNav>
      </MDBPageItem>
      )
    return pages;

  }

  pageClick(currentPage) {
    const {groupCount} = this.state
    const getCurrentPage = this.props.pageCallbackFn;
    //当 当前页码 大于 分组的页码 时，使 当前页 前面 显示 两个页码
    if (currentPage >= groupCount) {
      this.setState({
        startPage: currentPage - 2,
      })
    }
    if (currentPage < groupCount) {
      this.setState({
        startPage: 1,
      })
    }
    //第一页时重新设置分组的起始页
    if (currentPage === 1) {
      this.setState({
        startPage: 1,
      })
    }
    this.setState({
      currentPage
    })
    //将当前页码返回父组件
    getCurrentPage(currentPage)
  }

  prePageHandeler() {
    let {currentPage} = this.state
    if (--currentPage === 0) {
      return false
    }
    this.pageClick(currentPage)
  }

  //下一页事件
  nextPageHandeler() {
    let {currentPage} = this.state
    const {totalPage} = this.props.pageConfig;
    if (++currentPage > totalPage) {
      return false
    }
    this.pageClick(currentPage)
  }

  render() {
    const pageList = this.createPage();
    return (
      <MDBPagination circle>
        {pageList}
      </MDBPagination>
    )
  }
}

PaginationUse.i18n = [
  {
    related: '类似职位推荐',
  },
  {
    related: 'Related Work',
  },
];
