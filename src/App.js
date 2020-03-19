import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'; //import anyname from filename 

const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu' ,age : 29},
      {name: 'Steph' ,age : 26}
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personsState,otherState);

  const switchNameHandler  = () =>{
    // console.log('Was clicked!');
    // don't change name like this: this.state.persons[0].name = 'Maximilian';
    setPersonsState({ //hook will overwrite personsState with setPersonsState
      persons: [
      {name: 'Maximilian', age: 28},
      {name: 'Manu' ,age : 29},
      {name: 'Steph' ,age : 26}
    ]
  });
  }

    return(
      <div className="App">
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name = {personsState.persons[0].name} age = {personsState.persons[0].age}/>
        <Person name = {personsState.persons[1].name} age = {personsState.persons[1].age}>My Hobbies: Racing</Person>
        <Person name = {personsState.persons[2].name} age = {personsState.persons[2].age}/>
    </div>  
    )
  }


export default App;

