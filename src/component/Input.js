import React, { Component } from 'react'
import { Button } from '@material-ui/core'
import Select from 'react-select';


class Input extends Component {
  constructor(props) {
    super(props);
   
  }
  
  render() {
    const { fname, lname, email, number,multiValue } = this.props.data;
    return (
      <div >
        <h1> Form</h1>
        <form  >
          <div className='form-group' >
            <input
              type="text"
              name="fname"
              value={fname}
              onChange={(ms) => this.props.handel(ms)}
              placeholder='Fname'
              required />
            <br />
          </div>

          <div className='form-group' >
            <input
              type="text"
              name="lname"
              value={lname}
              onChange={(ms) => this.props.handel(ms)}
              placeholder='Lname'
              required />
            <br />
          </div>

          <div className='form-group' >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(ms) => this.props.handel(ms)}
              placeholder='Email'
              required />
            <br />
          </div>

          <div className='form-group' >
            <input
              type="text"
              name="number"
              value={number}
              onChange={(ms) => this.props.handel(ms)}
              placeholder='Phone'
              required />
            <br />
          </div>

          <div className="row" >
            <Select
              name="Sport"
              placeholder="Sport"
              value={multiValue}
              options={this.props.filterOptions}
              onChange={this.props.handleMultiChange}
              isMulti
            />
          </div>
          <br /><br />
          <Button variant="contained" color="primary" onClick={this.props.isEdit ? (ms) => this.props.userUpdate(ms) : (ms) => this.props.submit(ms)}>{this.props.isEdit ? "Update" : "Submit"}</Button><br />
          <br />
          <br />

        </form>
      </div>
    )
  }
}
export default Input