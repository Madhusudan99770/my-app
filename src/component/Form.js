import React, { Component } from 'react';
// import TableDetail from './TableDetail';
import Input from './Input';
import { Link } from "react-router-dom"
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { id: null, fname: '', lname: '', email: '', number: '',sport:''},
      // multiValue: [],
      filterOptions: [
        { value: "cricket", label: "Cricket" },
        { value: "football", label: "Football" },
        { value: "hockey", label: "Hockey" }
      ]
   
      // user1: (localStorage.getItem("data") == null) ? [] : JSON.parse(localStorage.getItem("data")),
      // edit: false,
      // isEdit:false
    }
    this.handleNum1 = this.handleNum1.bind(this);
    this.submit = this.submit.bind(this);
    // this.userEdit = this.userEdit.bind(this);
    this.userUpdate = this.userUpdate.bind(this);
    // this.userDelete = this.userDelete.bind(this)
    this.handleMultiChange = this.handleMultiChange.bind(this);
  }
  handleMultiChange(option) {
    this.setState({
      user: option
    });
  }
  handleNum1(evt) {
    debugger
    let user1 = this.state.user
    user1[evt.target.name] = evt.target.value;
    this.setState({
      user: user1,
      // form: true           
    });
  }
  componentDidMount() {
    let urlLength = window.location.pathname.split('/').length
    if (urlLength > 2) {
      let userId = window.location.pathname.split('/')[urlLength - 1]
      console.log(userId)
      if (userId) {
        axios.get(`https://633e9f7783f50e9ba3b47630.mockapi.io/user/${userId}`)
          .then(data => {
            if (data.status == 200) {
              this.setState({ user: data.data, isEdit:true });
            }
          })
          .catch(error => {
            console.log(error.message);
          });
      }
    }

  }

  // userDelete(ids) {
  //   let data = this.state.user1
  //   let remain = data.filter((item) => item.id !== ids)
  //   localStorage.setItem("data", JSON.stringify(remain));
  //   this.setState({
  //     data: remain,
  //     form: false
  //   })
  // }
  // userEdit(user) {
  //   this.setState(
  //     {
  //       user: user,
  //       edit: true,
  //       form: true
      
  //     }
  //   )
  // }
  userUpdate() {
    // e.preventDefault();
    let users = this.state.user;
    let urlLength = window.location.pathname.split('/').length
    if (urlLength > 2) {
      let userId = window.location.pathname.split('/')[urlLength - 1]
      console.log(userId)
      if(userId){
        axios({
          url: `https://633e9f7783f50e9ba3b47630.mockapi.io/user/${userId}`,
          method: "PUT",
          data: users,
        }).then(data=>{
          this.setState({
            users:data.data})
        })
      }
    }   
   // user1: (this.state.user1).concat(this.state.user),
   // users: { id: null, fname: '', lname: '', email: '', number: '' },

    // let user = this.state.user;
    // let arr = this.state.user1
    // arr.map((item) => {
    //   if (item.id === user.id) {
    //     item['fname'] = user.fname
    //     item['lname'] = user.lname
    //     item['email'] = user.email
    //     item['number'] = user.number
    //   }
    //   return item
    // })
    // localStorage.setItem("data", JSON.stringify(arr))
    // this.setState({
    //   user: { id: null, fname: '', lname: '', email: '', number: '' },
    //   form: false
    // })
  }
  submit(e) {
    e.preventDefault();
    debugger
    let user = this.state.user;
    axios({
      url: "https://633e9f7783f50e9ba3b47630.mockapi.io/user",
      method: "POST",
     
      data: user
    }).then((res) => {
      debugger
    })
      .catch((error) => {
        debugger
      })

    this.setState({
      // user1: (this.state.user1).concat(this.state.user),
      user: { id: null, fname: '', lname: '', email: '', number: '',sport:'' },

    })
  };

  render() {
    // let user = this.state.user1
    return (
      <div className="App">
        <center>
          <Input handel={this.handleNum1}
            data={this.state.user}
            isEdit={this.state.isEdit}
            userUpdate={this.userUpdate}
            submit={this.submit}
            multiValue={this.multiValue}
            handleMultiChange={this.handleMultiChange}
            filterOptions={this.state.filterOptions}
           
          />

          click here for open table 
          <Link to="/pagination"> <b>Open</b> </Link>

          {/* <TableDetail data={user}
            delete={this.userDelete}
            userEdit={this.userEdit} /> */}
        </center>
      </div>
    );
  }
}

export default Form;

