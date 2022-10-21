import React, { Component } from 'react'
import axios from 'axios';

export default class Form1 extends Component {
    constructor(props){
        super(props)
        this.state={
          user:{id:null , fname:'',lname:'', email:'' , number:''}        
        }
        this.handelNum=this.handelNum.bind(this);
        this.submit=this.submit.bind(this);
    }
    handelNum(e){
        debugger
        let users= this.state.user
        users[e.target.name]=e.target.value
        this.setState({
            user:users
        })
    }

    submit(){
        debugger
        let users = this.state.user;
        axios({
          url: "https://633e9f7783f50e9ba3b47630.mockapi.io/user",
          method: "POST",
          data: users
        })
        this.setState({
            // user1: (this.state.user1).concat(this.state.user),
            user: { id: null, fname: '',lname:'',  email: '', number: '' },
      
          })
        
    }
    componentDidMount(){
      this.submit()
    }
  render() {
    const {fname,lname,email,number}=this.state
    return (
      <div><center>
        <h1>Form</h1>

        <form>
            <input type='text' name='fname' value={fname} placeholder='fname' onChange={this.handelNum}/> <br/>
            <input type='text' name='lname' value={lname} placeholder='lname' onChange={this.handelNum}/> <br/>

            <input type='email' name='email' value={email} placeholder='email' onChange={this.handelNum}/> <br/>
            <input type='text' name='number' value={number} placeholder='number' onChange={this.handelNum}/><br/>
            <button type="submit" onClick={(sub)=>this.submit(sub)}>Submit</button>

        </form></center>
        
      </div>
    )
  }
}
