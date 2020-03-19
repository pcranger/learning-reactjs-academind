import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'; //import anyname from filename 

class App extends Component{
    state = {
      persons: [
        {name: 'Max', age: 28},
        {name: 'Manu' ,age : 29},
        {name: 'Steph' ,age : 26}
      ],
      otherState: 'some other value'
    }

    switchNameHandler  = () =>{
      // console.log('Was clicked!');
      // don't change name like this: this.state.persons[0].name = 'Maximilian';
      this.setState({
        persons: [
        {name: 'Maximilian', age: 28},
        {name: 'Manu' ,age : 29},
        {name: 'Steph' ,age : 26}
      ] })
    }

  render() {
    return(
      <div className="App">
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}>My Hobbies: Racing</Person>
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
    </div>  
    )
  }
}

export default App;
