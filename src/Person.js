import React from "react";
class Person extends React.Component{
    constructor(props){
        super(props)
        this.state = {data: props.data}
    }
    render(){
        return (
            <div>
               <h1>Tên: {this.state.data.name.first} -- Tuổi: {this.state.data.dob.age}</h1>
            </div>
         )
    }
}

export default Person;
