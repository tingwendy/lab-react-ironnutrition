import React, {Component} from 'react';

class Search extends Component {
    state = {
        input: ''
    };

    handleChange = (e) => {
        const {value} = e.target
        this.setState({input: value})
    
    this.props.filterFood(value)
};
    render() {
        return (
            <div>
            <p>
                <input type="text" placeholder="Search" value={this.state.input}
                onChange={this.handleChange} />
            </p>
            </div>
        )
    }
}

export default Search;