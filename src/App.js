// import logo from './logo.svg';

import './Component/App.css';
import React, {Component} from 'react'
import Functional from './Component/Functional';
import  ClassComponent  from './Component/ClassComponent';

class App extends Component{
  constructor(){
    super()
    this.state={
        hello:false,
        hello1:false
    }
}

showfun=()=>{
  this.setState({
    hello:!this.state.hello
  })
}
showcls=()=>{
  this.setState({
  hello1:!this.state.hello1
  })
  }
   render(){
     return(
       <div className='app'>
         <h1>Styling using functional and class component</h1>
      
         <div className='flex'>
         
         <button className='one' onClick={this.showcls}> to see styling on class component </button>
         <button className='two'  onClick={this.showfun}> to see styling on functional component </button>
         </div>
         <div className='comein'>
         {
           this.state.hello1?
           <Functional/>
           :null
         }
         {
           this.state.hello?
           <ClassComponent/>
           :null
         }
         </div>
         </div>
       
     )
   }
}
export default App;