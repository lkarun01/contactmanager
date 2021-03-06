import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Contacts from "./components/contatcs/Contacts";
import AddContact from "./components/contatcs/AddContact";
import EditContact from "./components/contatcs/EditContact";
import Header from "./components/layout/Header";
import About from "./components/pages/about";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "./context";
import NotFound from "./components/pages/notfound";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/contacts/add" component={AddContact} />
                <Route
                  exact
                  path="/contacts/edit/:id"
                  component={EditContact}
                />
                <Route exact path="/about" component={About} />
                <Route exact component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
