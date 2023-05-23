import './App.css';

import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super(); // underline constructor method

    this.state = {
      monsters: [],
      searchField: ''
    };
    // console.log('constructor')
  }  
  componentDidMount() {
    // console.log('componentDiMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(()=> {
      return {monsters: users}
    },
    () => {
      // console.log(this.state);
    }
    )
    );
  }

  onSearchChange = (event)=>{
          // console.log({starringArray: this.state.monsters});
          const searchField = event.target.value.toLocaleLowerCase();
          
          this.setState(() => {
            return { searchField };
          });
          };
  

  render() {
    // console.log('render');
    const { monsters, searchField} = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
          });

    return (
      <div className="App">
        <h1 className='app-title'> Monster Board </h1>
        <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='search-box'/>
       <CardList monsters={filteredMonsters}/>

      </div>
    );
      }
    }
export default App;
