import './App.scss';
import MealContent from './components/MealContent';
import {SearchProvider} from './context/SearchContext';
import {SearchInput, SearchTerm} from './components/Search';
import React, {Component, memo} from 'react'

class App extends Component {

  render(){
    return (
      <div className="App">
        <SearchProvider>
          <SearchContent/>
        </SearchProvider>
      </div>
    );
  }
}

const SearchContent = memo(() =>{

  return(
    <div className ="app">
      <div className = "search-box">
        <header className = "header">
          <h2>
            Meal Search
          </h2>
        </header>
        <SearchInput/>
        {/* <SearchTerm/> */}

      </div>
      <section className ="meal-section">
        <div className ="meal-container">
          <MealContent/>
        </div>
      </section>



    </div>


  );
})

export default App;
