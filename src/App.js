import React, { Component } from "react";
import "./App.css";
import Contacts from "./components/contatcs/Contacts";
import AddContact from "./components/contatcs/AddContact";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
          <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
