import React, {  useState, memo, createContext, useContext } from 'react'

const SearchContext = createContext();

export function SearchProvider({children}) {
  const [inputText, setInputText] = useState("");
  return (<SearchContext.Provider value={{inputText, setInputText}}>{children}</SearchContext.Provider>);
}

//custom hook
export function useSearch(){
  return useContext(SearchContext);
}