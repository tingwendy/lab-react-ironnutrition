import React, {Component} from 'react';

class AddNewFoodForm extends Component {

    state = {
        name: '',
        calories: 0,
        image: '',
        quantities: 0
    }
    render() {
    return(
        <div>
        <form onSubmit = {this.handleFormSubmit}>
            <label> Name: </label>
            <input type = "text" name="name" value={this.state.name}/>

            <label>Calories: </label>
            <input type="number" name="calories" value={this.state.calories}/>

            <label>Image: </label>
            <input type="text" name="image" value={this.state.image} />

            <button> Submit</button>
        </form>
        </div>
    )
}
}

export default AddNewFoodForm;