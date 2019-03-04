import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
  state = {
    name:'',
    email:'',
    phone:'',
    errors:{}
  }

  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if(name === ''){
      this.setState({ errors:{name:'Name is required...'}});
      return;
    }

    if(email === ''){
      this.setState({errors:{email:'Email is required...'}});
      return;
    }
    if(phone === ''){
      this.setState({errors:{phone:'Phone is required...'}});
      return;
    }
    const newContact = {
      name,
      email,
      phone
    }

    axios.post('https://jsonplaceholder.typicode.com/users', newContact)
      .then(res => dispatch({type: 'ADD_CONTACT', payload:res.data}));
    

    // Clear the fields
    this.setState({
      name:'',
      email:'',
      phone:'',
      errors:{}
    });

    this.props.history.push("/");
  }

  onChange = e => this.setState({[e.target.name] : e.target.value});


  render() {
    const {name, email, phone, errors} = this.state;

    return(
      <Consumer>
        {
          value => {
            const { dispatch } = value;

            return(
              <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup 
                    label="Name" 
                    value={name} 
                    name="name" 
                    placeholder="Enter Name..." 
                    onChange={this.onChange}
                    errors={errors.name}
                  />

                  <TextInputGroup 
                    label="Email" 
                    value={email}
                    type="email" 
                    name="email" 
                    placeholder="Enter Email..." 
                    onChange={this.onChange}
                    errors={errors.email}
                  />
                  <TextInputGroup 
                    label="Phone" 
                    value={phone} 
                    name="phone" 
                    placeholder="Enter Phone..." 
                    onChange={this.onChange}
                    errors={errors.phone}
                  />
                  <input type="submit" value="Add Contact" className="btn btn-light btn-block" />
                </form>
              </div>
              </div>
            )
          }
        }
      </Consumer>
    )
  }
}

export default AddContact;
