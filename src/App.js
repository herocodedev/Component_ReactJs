import "./App.css";
import React from "react";
import ReactDom from "react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [],flag:1, data1:''};
  }

  addTaskHandler = () => {
    const item = 'Set Item...'
    this.state.data.push(item)
    let newData = this.state.data
    this.setState({data: newData})
  }

  forceUpdateHandler = () =>{
    this.forceUpdate()
  }

  

  findDomNodeHandler = () => {
    const textEl = document.querySelector('.text')
    if(this.state.flag===1){
      ReactDom.findDOMNode(textEl).style.color = 'green'
      this.setState({flag:0})
    }else{
      ReactDom.findDOMNode(textEl).style.color = 'red'
      this.setState({flag:1})
    }
  }

  updateState = (e) => {
    this.setState({data1: e.target.value})
  }

  clearInput = () => {
    this.setState({data1:''})
    ReactDom.findDOMNode(this.refs.myInput).focus()
  }

  render() {
    return(
      <div>
        <button onClick = {() => this.addTaskHandler()}>Thêm Task</button>
        <div>
          {this.state.data.map((val) => {
            return val
          })}
        </div>
        <button onClick = {() => this.forceUpdateHandler()}>Random Number</button>
        <div>{Math.random()}</div>

        <button onClick = {() => this.findDomNodeHandler()}>Đổi Màu Chữ</button>
        <div className="text">Node</div>
        <br />
        <br />

        <input value = {this.state.data1} onChange = {(e) => this.updateState(e)} ref = "myInput" />
        <button onClick = {() => this.clearInput()}>Clear</button>
        <h1>{this.state.data1}</h1>
      </div>
    )
  }
}

export default App