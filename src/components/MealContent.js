import React from 'react'
import {useSearch} from '../context/SearchContext';
import {useQuery, QueryClient, QueryClientProvider,} from 'react-query';
import MealList from './MealList'

const queryClient = new QueryClient();

const MealContent = () => {

  const {inputText} = useSearch();

  if(inputText === "") return <div className = "search-term"></div>

  return (
    <QueryClientProvider client ={queryClient}>
      <SearchMeals initialIsOpen={false}/> 
    </QueryClientProvider>
  );
}

const SearchMeals =()=> {

  const {inputText} = useSearch();

  const {data, isLoading, error} = useQuery([inputText], fetchMeal);

  if(isLoading) return <span>Loading....</span>

  if(error) return <span>Ooops! Error</span>

  if(data.length === 0 || data.meals === null){
    return <div>No Data</div>
  }

  return(
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <MealList meals = {data.meals}/>
    </div>
  );
}

async function fetchMeal(inputText){

  let text = inputText.queryKey[0];

  if(text !==""){

    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`);
    const data = await response.json();

    return data;
  }

  return [];
}

export default MealContent;
