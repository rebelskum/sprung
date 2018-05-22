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
        <div>
          <form className="form container" onSubmit={this.handleSubmit}>
            <div>
              <label className="label">
                First Name
                <input className="text-input" type='text' value={this.state.firstName} onChange={this.handleFirstName} />
              </label>
            </div>
            <div>
              <label className="label">
                Last Name
                <input className="text-input" type='text' value={this.state.lastName} onChange={this.handleLastName} />
              </label>
            </div>
            <div>
              <label className="label">
                Age
                <input className="text-input" type='number' value={this.state.age} onChange={this.handleAge} />
              </label>
            </div>
            <div>
              <label className="label">
                Sex
                <select className="text-input">
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </label>
            </div>
            <div>
              <label className="label">
                Email
                <input className="text-input" type='email' value={this.state.email} onChange={this.handleEmail} />
              </label>
            </div>
          </form>
        </div>
    );
  }
}

export default Form;
