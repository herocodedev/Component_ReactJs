import "./App.css";
import React from "react";
// import ReactDom from "react-dom";
import Person from "./Person";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {peopleUnder50: [],peopleAbove50:[]};
  }

  getData = () => {
    fetch("https://randomuser.me/api/?results=5")
      .then(res => res.json())
      .then(result => {
        console.log(result)
      })
      .catch(err => console.log(err))
  };
  render() {
    return (
      <div className="App">
          <button onClick={() => this.getData()}>Lấy Dữ Liệu</button>
          <p>Những người có độ tuổi trên 50</p>
          <div className="MyBox" style={{width:'400px'}}>
            {this.state.peopleAbove50.map((value, index) => {
              return <Person key={index} data={value} />;
            })}
          </div>
          <br />
          <p>Những người có độ tuổi dưới 50</p>
          <div className="MyBox" style={{width:'400px'}}>
            {this.state.peopleUnder50.map((value, index) => {
              return <Person key={index} data={value} />;
            })}
          </div>
      </div>
    );
  }
}

export default App;
