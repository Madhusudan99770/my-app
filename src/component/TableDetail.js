import React, { Component } from 'react'
import axios from "axios";
import {Link} from "react-router-dom"

class TableDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
    users:[],
    isEdit:true
    }
    // this.userEdit = this.userEdit.bind(this);
    this.userDelete = this.userDelete.bind(this)
  }
  // userEdit(user) {
  //   this.setState(
  //     {
  //       user: user,
  //       edit: true,
  //     }
  //   )}

  getUsersData = () => {
    axios.get("https://633e9f7783f50e9ba3b47630.mockapi.io/user")
      .then((data) => {
         this.setState({ users: data});
        }
      )   
  };
  componentDidMount() {
    this.getUsersData();
  }
    userDelete(id) {
    // debugger
      axios({
        url: `https://633e9f7783f50e9ba3b47630.mockapi.io/user/${id}`,
        method: 'DELETE',
        })  .then(data =>{
        this.setState ({users:data.data})

       })
       
  }
  render() {
    const {users} = this.state;
    // let user=JSON.parse(localStorage.getItem('data'))
    return (
      <div>
        <table className='table table-success' >
          <thead>
            <tr className=''>
              <th>Fname</th>
              <th>Lname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          { users.map((user) => {
            return (
              <tbody>
                <tr>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.email}</td>
                  <td>{user.number}</td>
                  <td>
                    <Link className='btn btn-success' to={{
                      pathname: `/user/${user.id}`,
                      state: { userId: user.id , isEdit:true},
                    }}> Edit</Link>
                    
                    <button className='btn btn-danger' onClick={() => this.userDelete(user.id)}> Delete</button>
                  </td>
                </tr>
              </tbody>
            )
          }
          )
          }
        </table>
        
       click here for open form
        <Link to="/">  Open  </Link>

      </div>
    )
  }
}
export default TableDetail