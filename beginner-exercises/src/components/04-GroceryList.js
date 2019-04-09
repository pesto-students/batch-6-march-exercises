/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';


class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
      newItem: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearList = this.clearList.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(prevState => ({
      groceries: [...prevState.groceries, this.state.newItem],
      newItem: '',
    }));
  }

  handleChange(event) {
    this.setState({
      newItem: event.target.value,
    });
  }

  clearList() {
    this.setState({
      groceries: [],
    });
  }

  render() {
    const { groceries } = this.state;

    const groceriesComponents = groceries.map(item => ( // eslint-disable-line no-unused-vars
      // eslint-disable-next-line react/jsx-filename-extension
      <GroceryListItem grocery={item.name} />
    ));
    return (
      <div>
        <ul>
          {groceriesComponents}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new">
            Add Items
            <input type="text" id="new" onChange={this.handleChange} value={this.state.newItem} />
          </label>
          <input type="submit" value="submit" />
          <button type="button" onClick={this.clearList}>Clear List</button>
        </form>
      </div>
    );
  }
}


/* eslint-disable react/no-multi-comp, no-useless-constructor */
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: true,
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.setState({
      color: !this.state.color,
    });
  }

  render() {
    const styleObj = {
      color: this.state.color ? 'black' : 'red',
    };
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <li onClick={this.changeColor} style={styleObj}>
        {this.props.grocery}
      </li>
    );
  }
}

// Do prop validation here using the package `prop-types`
GroceryListItem.propTypes = {
  // eslint-disable-next-line react/require-default-props
  grocery: PropTypes.string,
};

export default GroceryList;
