import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      sex: '',
      email: ''
    };
    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleSex = this.handleSex.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstName(e) {
    this.setState({firstName: e.target.value});
  }

  handleLastName(e) {
    this.setState({lastName: e.target.value});
  }

  handleAge(e) {
    this.setState({age: e.target.value});
  }

  handleSex(e) {
    this.setState({sex: e.target.value});
  }

  handleEmail(e) {
    this.setState({email: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>
                First Name
                <input type='text' value={this.state.firstName} onChange={this.handleFirstName} />
              </label>
            </div>
            <div>
              <label>
                Last Name
                <input type='text' value={this.state.lastName} onChange={this.handleLastName} />
              </label>
            </div>
            <div>
              <label>
                Age
                <input type='number' value={this.state.age} onChange={this.handleAge} />
              </label>
            </div>
            <div>
              <label>
                Sex
                <select>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Email
                <input type='email' value={this.state.email} onChange={this.handleEmail} />
              </label>
            </div>
            <input type="submit" value="Submit" />
          </form>
    );
  }
}

export default Form;
