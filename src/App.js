import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddNewFoodForm from './components/AddNewFoodForm';
import Search from './components/Search';
class App extends Component {

  state = {
    foods: foods,
    showAddNewFoodForm: false

  }

  addNewFood = () => {
    this.setState({
      showAddNewFoodForm: !this.state.showAddNewFoodForm
    });
  }

  filterFoods = (text) => {
    const newFood = foods.filter((food) => {
      console.log(text);
      return food.name.includes(text);
    })

    this.setState({foods:newFood});
  };

render() {
  return (
    <div className="App">
    <h1>Nutrition App</h1>
    <button onClick={()=> this.addNewFood()}>Add New Food</button>
    {this.state.showAddNewFoodForm && (
      <AddNewFoodForm />
    )}
    <Search filterFoods={this.filterFoods} />
    {this.state.foods.map((food, i) => {
      return(
      <FoodBox name={food.name} calories={food.calories} image={food.image} quantities={food.quantities} />
    )
    })};
     </div>
  );
}
};

export default App;
