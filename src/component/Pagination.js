import React, { Component } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import '../App.css';
import { Button } from '@material-ui/core'
// import DeleteOutline from '@mui/icons-material/DeleteOutline';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: true,
      offset: 0,
      data: [],
      perPage: 8,
      currentPage: 0
    }
    this.userDelete = this.userDelete.bind(this)
    this.handlePageClick = this.handlePageClick.bind(this);
  }
  getUsersData = () => {
    axios.get("https://633e9f7783f50e9ba3b47630.mockapi.io/user")
      .then(data => {
        if (data.status == 200) {
          this.setState({ users: data.data });
        }
      })
      .catch(error => {
        debugger
        console.log(error.message);
      });
  };
  componentDidMount() {
    this.getUsersData();
  }

  userDelete(id) {
    debugger
    axios({
      url: `https://633e9f7783f50e9ba3b47630.mockapi.io/user/${id}`,
      method: 'DELETE',
    }).then(data => {
      this.setState({
        users: data.data

      })

    })
  }
  receivedData() {
    axios
      .get(`https://633e9f7783f50e9ba3b47630.mockapi.io/user`)
      .then(res => {

        const data = res.data;
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = <table className='table table-success' >
          <thead>
            <tr className='table table-dark'>
              <th>Fname</th>
              <th>Lname</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Sports</th>
              <th>Action</th>
            </tr>
          </thead>
          {slice.map((user) => {
            return (
              <tbody>
                <tr class="table-warning">
                  <td >{user.fname}</td>
                  <td >{user.lname}</td>
                  <td >{user.email}</td>
                  <td >{user.number}</td>
                  <td> {user.sport}</td>
                  <td>

                    <Button variant="contained" color="success" className='m-2'> <Link to={{
                      pathname: `/user/${user.id}`,
                      state: { userId: user.id, isEdit: true },
                    }}> Edit</Link></Button>


                    <Button variant="contained" color="error" onClick={() => this.userDelete(user.id)}> Delete</Button>
                  </td>
                </tr>
              </tbody>
            )
          }
          )
          }
        </table>

        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          postData
        })
      });
  }
  handlePageClick(e) {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState({
      currentPage: selectedPage,
      offset: offset
    }, () => {
      this.receivedData()
    });

  };

  componentDidMount() {
    this.receivedData()
  }
  render() {
    const { data } = this.state;
    // let user=JSON.parse(localStorage.getItem('data'))
    return (
      <div>

        {this.state.postData}
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={8}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"} />

        <br />click here for open form--
        <Link to="/"> <Button variant="contained" color="primary" size="small"> Open </Button> </Link>

      </div>
    )
  }
}
export default Pagination