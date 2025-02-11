import * as React from "react"
import { useState } from "react"
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset"
import "./App.css"
import Header from "./components/Header/Header"
import Instructions from "./components/Instructions/Instructions"
import Chip from "./components/Chip/Chip"
import NutritionalLabel from "./components/NutritionalLabel/NutritionalLabel"

// don't move this!
export const appInfo = {
  title: `Fast Food Feud 🍔!`,
  tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
  description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
  dataSource: `All data pulled from the MenuStat.org interactive online database.`,
  instructions: {
    start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
    onlyCategory: `Now select a fast food restaurant from the list above!`,
    onlyRestaurant: `Now select a category from the list on the left!`,
    noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
    allSelected: `Great choice! Amazing what a little knowledge can do!`,
  },
}
// or this!
const { data, categories, restaurants } = createDataSet()

export function App() {

  const [clickedCategory, setClickedCategory] = useState();
  const [clickedRestaurant, setClickedRestaurant] = useState();
  const [clickedItem, setClickedItem] = useState();





  let selectedMenu = data.filter((item) => {
      return (item.restaurant === clickedRestaurant && item.food_category === clickedCategory)
    });






  function handleCategoryClick(label) {
    setClickedCategory(label);

  }
  function handleRestaurantClick(label) {
    setClickedRestaurant(label);

  }

  function handleItemClick(label) {
    let item = data.find(item => item.item_name === label);
    //console.log('iteeee', item.item_name, 'labeeel', label);
    setClickedItem(item);
  }





  return (
    <main className="App">
      {/* CATEGORIES COLUMN */}
      <div className="CategoriesColumn col">
        <div className="categories options">
          <h2 className="title">Categories</h2>
          {/* YOUR CODE HERE */}
          {categories.map(category => {
            const active = (clickedCategory === category) ? true : false;
            return (<Chip key={category} label={category} isActive={active} handleClick={handleCategoryClick}>{category}</Chip>);
          })}
        </div>
      </div>

      {/* MAIN COLUMN */}
      <div className="container">
        {/* HEADER GOES HERE */}
        <Header title={appInfo.title} tagline={appInfo.tagline} description={appInfo.description} />
        {/* RESTAURANTS ROW */}
        <div className="RestaurantsRow">
          <h2 className="title">Restaurants</h2>
          <div className="restaurants options">

            {/* YOUR CODE HERE */}
            {restaurants.map(restaurant => {
              const active = (clickedRestaurant === restaurant) ? true : false;
              return (<Chip key={restaurant} label={restaurant} isActive={active} handleClick={handleRestaurantClick}>{restaurant}</Chip>);
            })}
          </div>
        </div>

        {/* INSTRUCTIONS GO HERE */}
        <Instructions instructions={appInfo.instructions.start}></Instructions>
        {/* MENU DISPLAY */}
        <div className="MenuDisplay display">
          <div className="MenuItemButtons menu-items">
            <h2 className="title">Menu Items</h2>
            {/* YOUR CODE HERE */}
            {selectedMenu.map((item) => {
              const active = (clickedItem === item) ? true : false;
              return (<Chip key={item.item_name} isActive={active} label={item.item_name} handleClick={handleItemClick}></Chip>)
            })}
          </div>

          {/* NUTRITION FACTS */}
          <div className="NutritionFacts nutrition-facts">
            {/* YOUR CODE HERE */}
            {clickedItem && <NutritionalLabel item={clickedItem}></NutritionalLabel>}
          </div>
        </div>

        <div className="data-sources">
          <p>{appInfo.dataSource}</p>
        </div>
      </div>
    </main>
  )
}

export default App
