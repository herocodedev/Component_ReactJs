import "./App.css";
import React from "react";
// import ReactDom from "react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "" };
    this.textInput = React.createRef();
  }

  focusTextInput = () => {
    this.textInput.current.focus();
  };

  componentDidMount() {
    this.textInput.current.focus();
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <button onClick={this.focusTextInput}>Clear</button>
      </div>
    );
  }
}

export default App;
