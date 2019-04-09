/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

/*
  In this exercises, you'll will make a reactive grocery list.

  Task 1: Fill the `return` of `GroceryList` render method. It should return
        a list of `GroceryListItem`. You need to display the groceries names
        using `this.props` in `GroceryListItem`. We already prepared the variable
        `groceriesComponents` inside `render` method containing a list of these items for you.


  Task 2: Create an input box and a button. User should be able to add more grocery items and click
          the `Add` button to add it to the list displaying the item.

  Task 3: Create a button to clear the whole list.

  Task 4: Clicking on a grocery item should change its color to red. Clicking again should change
          it back to black. Red means the item has been purchased.

*/

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [
        { name: 'Apples', purchased: false },
        { name: 'KitKat', purchased: false },
        { name: 'Red Bull', purchased: false },
      ],
      value: '',
    };

    this.toggleClass = this.toggleClass.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearList = this.clearList.bind(this);
  }
  toggleClass(name) {
    const listItemIndex = this.state.groceries.findIndex(item => item.name === name);
    const listItem = this.state.groceries[listItemIndex];
    listItem.purchased = !listItem.purchased;
    const newList = [...this.state.groceries];
    newList[listItemIndex] = listItem;

    this.setState({ groceries: newList });
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      groceries: [...this.state.groceries, { name: this.state.value }],
    });
  }
  clearList() {
    this.setState({ groceries: [] });
  }
  render() {
    const { groceries } = this.state;
    /*
      Properties are a way to pass parameters to your React components.
      We mentioned this in the third exercise. Properties are to React
      components what attributes are to HTML elements.

      Below you can see how to pass properties to child components.
      We have defined a `grocery` property for each `GroceryListItem`.
    */
    const groceriesComponents = groceries.map((
      item,
      i, // eslint-disable-line no-unused-vars
    ) => (
      <GroceryListItem
        key={item.name}
        grocery={item}
        id={item.name}
        purchased={item.purchased}
        className={this.props.purchased ? 'link--active' : ''}
        onClick={this.toggleClass}
      />
    ));
    // Hint: Don't forget about putting items into `ul`
    return (
      <div>
        <ul>{groceriesComponents}</ul>
        <form onSubmit={this.handleSubmit}>
          Add To List
          <input id="add" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </form>
        <button onClick={this.clearList}>Clear List</button>
      </div>
    );
  }
}

// Render grocery name from component's properties.
// If you have a problem, check `this.props` in the console.
/* eslint-disable react/no-multi-comp, no-useless-constructor */
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li
        onClick={() => this.props.onClick(this.props.id)}
        className={this.props.purchased ? 'link--active' : ''}
      >
        {this.props.grocery.name}
      </li>
    );
  }
}

// Do prop validation here using the package `prop-types`
GroceryListItem.propTypes = {
  grocery: PropTypes.object,
  id: PropTypes.string,
  purchased: PropTypes.bool,
  onClick: PropTypes.func,
};
export default GroceryList;
