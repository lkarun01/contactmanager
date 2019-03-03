import React, { Component } from "react";

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(c => c.id !== action.payload)
      };
      case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Lalanke Karu",
        email: "lalanke@gmail.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Karen Smith",
        email: "ksmith@gmail.com",
        phone: "666-555-5555"
      },
      {
        id: 3,
        name: "Senara Kylie",
        email: "senarak@gmail.com",
        phone: "666-666-5555"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
