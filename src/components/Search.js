import React from 'react'
import {useSearch} from '../context/SearchContext';

export const SearchInput = () => {

  const {setInputText } = useSearch();
  let text = React.createRef();

  const handleClick =()=>{
    setInputText(text.current.value);
  }

  return(
    <div className = "search-container">
      <div className="form-group">
        <input className = "form-field" type="text" placeholder="search" ref={text}/>
        <span onClick ={handleClick}>Search</span>
      </div>
    </div>
  );
}

export const SearchTerm =()=>{
  const {inputText} = useSearch();
  if(inputText === "") return <div className = "search-term"> <p></p></div>
  return(
    <div className = "search-term">
      <p>Search Results For: {inputText}</p>
    </div>
  );
}
