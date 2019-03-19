import styled from 'styled-components'
import lodoPic from '../../images/logo.png'

export const HeaderWrapper = styled.div`
  height: 58px;
  border-bottom: 1px solid #F0F0F0;
  display: flex;
  padding: 0 125px;
  align-items: center;
  justify-content: space-between;
`
export const Logo = styled.a.attrs({
  href: '/' /*跳转回到根路径*/
})`
  height: 100%;
  vertical-align: middle;
  width: 100px;
  display: block;
  background: url(${lodoPic}) center center no-repeat;
  background-size: cover;
  margin-right: 40px;
`
export const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 100%;
  margin: 0 auto;
  font-family: 微软雅黑;
`

export const NavItem = styled.div`
  padding: 0 15px;
  color: #333333;
  font-size: 17px;
  &.active{
    color: #ea6f5a;
  }
`
export const NavLeft = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`
export const NavRight = styled(NavLeft)`
  color: #969696
`;

export const SearchWrapper = styled.div`
  position: relative;
  .zoom{
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #999999;
    width: 30px;
    height: 30px;
    border-radius: 50px;
    text-align: center;
    line-height: 30px;
    font-size: 120%;
    &.focusedIcon{
      background-color: #666666;  
      color: #ffffff; 
    }
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: '搜索',
  type: 'text'
})`
  width: 160px;
  height: 38px;
  padding: 0 40px 0 20px;
  border-radius: 19px;
  border: none;
  background-color: #eeeeee;
  font-family: 微软雅黑;
  font-size: 15px;
  margin-left: 20px;
  color: #777777;
  transition: all .2s linear;
  &.focused{
    width: 240px;
  }
  &::placeholder {
  color: #999999
  }
`

export const Button = styled.div`
    text-align: center;
    width: 120px;
    height: 40px;
    line-height: 38px;
    margin: 8px 15px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
    vertical-align: middle;
    box-sizing: border-box;
    &.reg{
      background-color: transparent;
      border: 1px solid #ea6f5a;
      color: #ea6f5a;
    }
    .quill-pen {
      margin-right: 6px;
    }
`;

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 50px;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  border-radius: 4px;
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 14px;
  color: #969696;
  line-height: 20px;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  user-select: none;
  .spin{
    user-select: none;
    display: inline-block;
    margin-right: 6px;
    font-size: 13px;
    transition: all .3s linear;
    transform: rotate(0);
    transform-origin: center center;
  }
`
export const SearchInfoItem = styled.a`
  font-size: 12px;
  padding: 0 5px;
  line-height: 20px;
  border: 1px solid #dddddd;
  color: #969696;
  border-radius: 3px;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover{
    color: #333;
    border-color: #b4b4b4;
    box-shadow: 0 0 1px #b4b4b4;
  }
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`