import React, { Component } from 'react';
import Form from "./components/Form"
import List from "./components/List"
import { Provider } from "react-redux"
import store from "./store"
import './App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Form />
          <List />
        </div>
      </Provider>
    );
  }
}

export default App;
