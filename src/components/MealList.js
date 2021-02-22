import React from 'react'

const MealList = ({meals}) => {

  console.log(meals)

  return (
    <div>
      {meals.map((m)=>(
        <MealCard 
         key = {m.idMeal} 
         name = {m.strMeal}
         imgsrc = {m.strMealThumb}
         cuisine ={m.strArea}
        />
      ))}
    </div>
  )
}

const MealCard = ({name, imgsrc, cuisine}) =>{

  return(
    <div className="meal-card">
      <div className="meal-card-group">
        <div>
          <img className = "meal-img" src = {imgsrc}/>
        </div>

        <div className ="meal-text-group">
          <div className ="meal-name">
            <h1>
              {name}
            </h1>
          </div>
          <hr className ="meal-header-line"/>
          <div className ="meal-details">
            {cuisine}
          </div>   
        </div>
      </div>
    </div>
  );

}

export default MealList;
