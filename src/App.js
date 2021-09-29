import './App.css';
import Home from './Component/Home';
//import {createStore} from 'redux';
import {Provider} from 'react-redux';
//import {reducer} from './reducer';
import store from './Store';
//import Footer from './Component/Footer/Footer';
//import Header from './Component/Header/Header'
import Cart from './Component/Cart/Cart';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import WishList from './Component/WishLIst/WishList'

 function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/">
             <Home/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>
            <Route path="/WishList">
              <WishList/>
            </Route>
        </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
