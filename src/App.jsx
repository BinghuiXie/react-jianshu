import React, { Component, Fragment } from 'react';
import Header from './common/header'
import CreateGlobalStyle from './style'
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalIconStyle from './images/iconfont/iconfont'
import store from './store/index'
import { Provider } from 'react-redux'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <CreateGlobalStyle /> {/*全局样式下面不能包含任何的子元素*/}
          <GlobalIconStyle />
          <Header />
          <BrowserRouter>
            <div>
              <Route path="/" exact component={Home}></Route>
              <Route path="/detail" exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
