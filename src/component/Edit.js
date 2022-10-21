import React, { Component } from 'react'
export default class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            user: { id: null, fname: '', lname: '', email: '', number: '' },
            user1: (localStorage.getItem("data") == null) ? [] : JSON.parse(localStorage.getItem("data")),
            edit:false,
            form:true
        }
    }
    handleNum1(evt) {
        //  debugger
        let user1 = this.state.user
    
        user1[evt.target.name] = evt.target.value;
        this.setState({ user: user1,
          form:true
        });
      }
      userUpdate() {
  
        let user = this.state.user;
        let arr = JSON.parse(localStorage.getItem("data"))
        arr.map((item) => {
          if (item.id === user.id) {
            item['fname'] = user.fname
            item['lname'] = user.lname
            item['email'] = user.email
            item['number'] = user.number
          }
          return item
        })
        localStorage.setItem("data", JSON.stringify(arr))
        this.setState({
          user: { id: null, fname: '', lname: '', email: '', number: '' },
          form:false
        })
        alert('Data Updating')
      }
    
      submit(e) {
        
    
        e.preventDefault();
        //  debugger;
    
        let user = this.state.user;
        user['id'] = Math.floor(Math.random() * 100)
    
        if (localStorage.getItem("data") == null) {
          let arr = [];
          arr.push(user);
          localStorage.setItem("data", JSON.stringify(arr))
        }
        else {
    
          let arr = JSON.parse(localStorage.getItem("data"))
          arr.push(user);
          localStorage.setItem("data", JSON.stringify(arr))
    
        }
    
        this.setState({
          user1: (this.state.user1).concat(user),
          user: { id: null, fname: '', lname: '', email: '', number: '' },
          form:false
        })
        alert("Form Submit")
      };
    
  render() {
    const {fname,lname,email,number}=this.props.data;

    return (
      <div>
         <h1> Form</h1>    
              <form >
  
                <input type="text" name="fname" value={fname}
                  onChange={(ms)=>this.handleNum1(ms)}
                  placeholder='Fname'
                  required /><br />
  
                <input type="text" name="lname" value={lname}
                  onChange={(ms)=>this.handleNum1(ms)}
                  placeholder='Lname' required /><br />
  
                <input type="email" name="email" value={email}
                  onChange={(ms)=>this.handleNum1(ms)}
                  placeholder='Email' required /><br />
  
                <input type="number" name="number" value={number}
                  onChange={(ms)=>this.handleNum1(ms)}
                  placeholder='Phone' required /><br />
  
                {/* <input type="submit" onClick={this.submitt}/> */}
                <button type='button' onClick={this.userUpdate(ms) }>
                 Update
                </button><br /><br />
              </form>
      </div>
    )
  }
}
