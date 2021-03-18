import React, { Component } from 'react';
import './App.css';
import CardList from'./components/cardlist/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[],
      searchFields: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }

  handleChange = e => {this.setState({searchFields: e.target.value});}

  render(){
    const { searchFields, monsters } = this.state;
    const filteredMonsters = monsters.filter(monster =>{
      return monster.name.toLowerCase().includes(searchFields.toLowerCase());
    });
    return(
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          type='search' 
          placeholder='search monsters' 
          handleChange={this.handleChange}
        />
        <CardList monsters= {filteredMonsters}/>
      </div>
    );
  }
}


export default App;
