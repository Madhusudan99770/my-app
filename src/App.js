// import React from 'react'
// import './App.css'
// import Form from './component/Form'
// import TableDetail from './component/TableDetail'
// import Pagination from './component/Pagination';
// import Dropdawn from './component/Dropdawn';
// import Form1 from './component/Form1';
// import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

// const App = () => {
//   return (
//     <div>
//     <Router>
//       <Routes>
//         <Route exact path="/" element={<Form/>}/>
//         <Route exact path="/user/:id" element={<Form/>}/>
//         <Route path='/table' element={<TableDetail/>}/>
//         <Route path='/pagination' element={<Pagination/>}/>
//         <Route path='/dropdawn' element={<Dropdawn/>}/>
//         {/* <Route path='/' element={<Form1/>}/> */}
//       </Routes>
//     </Router>
    
   
//     </div>
//   )
// }

// export default App;


import React from "react";
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { change: true };
  }
  render() {
    return (
      <div>
      <br/><center>
             <button 
          onClick={() => {
            this.setState({ change:false });
          }}
        >
          Click !
        </button></center>
 
        {this.state.change ? (
          <h1>Welcome to GeeksforGeeks</h1>
        ) : (
          <h1>A Computer Science Portal for Geeks</h1>
        )}
      </div>
    );
  }
}
 
export default App;









