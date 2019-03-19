import React from 'react'
import { connect } from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavLeft,
  NavRight,
  NavSearch,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "./style";
import { actionCreators }  from './store'

class Header extends React.Component {

  getListArea () {
    const { isFocused, list, totalPage, page, mouseIn, handleEnter, handleLeave, handleChangePage } = this.props;
    // toJS 方法把一个 immutable 对象转为一个普通的 JS 对象
    const JSlist = list.toJS();
    const pageList = [];

    // 一开始没有发 ajax 请求数据是默认数据，JSlist 是空，这时执行这段代码就会有问题
    // 所以加一个判断，如果 JSlist.length !== 0 也就是 ajax 请求数据成功之后再执行就没问题了
    if (JSlist.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={JSlist[i]}>{JSlist[i]}</SearchInfoItem>
        )
      }
    }

    if (isFocused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => {handleChangePage(page, totalPage, this.spinIcon)}}>
              <span ref={(icon) => {this.spinIcon = icon}} className='iconfont spin'>&#xe648;</span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render () {
    const { isFocused, handleInputFocus, handleInputBlur, list } = this.props;
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavLeft>
            <NavItem className='active'>首页</NavItem>
            <NavItem>下载App</NavItem>
            <SearchWrapper>
              <NavSearch
                className={isFocused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
              <i
                className={isFocused ? 'focusedIcon iconfont zoom' : 'iconfont zoom'}
              >
                &#xe615;
              </i>
              {this.getListArea()}
            </SearchWrapper>
          </NavLeft>
          <NavRight>
            <NavItem className='iconfont'>&#xe602;</NavItem>
            <NavItem>登录</NavItem>
            <Button className='reg'>注册</Button>
          </NavRight>
        </Nav>
        <Button>
          <i className='iconfont quill-pen'>&#xe616;</i>
          写文章
        </Button>
      </HeaderWrapper>
    )
  }
}

// 这个state其实就是reducer里面返回的prevState
const mapStateToProps = (state) => {
  return {
    isFocused: state.getIn(['header', 'isFocused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    totalPage: state.getIn(['header', 'totalPage']),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus (list) {
      // 第一个派发的 action 是一个函数，用来进行异步操作
      ( list.size === 0 ) && dispatch(actionCreators.getList());
      dispatch(actionCreators.inputFocusAction())
    },
    handleInputBlur () {
      dispatch(actionCreators.inputBlurAction())
    },
    handleEnter () {
      dispatch(actionCreators.mouseEnter())
    },
    handleLeave () {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage (page, totalPage, spinDOM) {
      let originAngle = spinDOM.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spinDOM.style.transform = `rotate(${originAngle + 360}deg)`;
      if (page < totalPage) {
        dispatch(actionCreators.pageChange(page + 1))
      } else if ( page === totalPage) {
        dispatch(actionCreators.pageChange(1))
      }
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header)