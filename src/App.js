import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from "./components/Products";
import { Provider } from "react-redux";
import React from "react";
import store from "./store";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header>
            <a href="/">React Shopping Cart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter></Filter>
                <Products></Products>
              </div>
              <div className="sidebar">
                <Cart></Cart>
              </div>
            </div>
          </main>
          <footer>All right, is reserved!</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
