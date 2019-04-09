
import PropTypes from 'prop-types';
import React from 'react';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      groceries: [
        { name: 'Apples', purchased: false },
        { name: 'KitKat', purchased: false },
        { name: 'Red Bull', purchased: false }],
    };

    this.handleItemChange = this.handleItemChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  handleItemChange(event) {
    this.setState({ newItem: event.target.value });
  }

  handleAdd(event) {
    event.preventDefault();
    const { groceries, newItem } = this.state;
    groceries.push({ name: newItem });
    this.setState({ groceries, newItem: '' });
  }

  clearAll() {
    this.setState({ groceries: [] });
  }

  itemClicked(index) {
    const { groceries } = this.state;
    groceries[index].purchased = !groceries[index].purchased;
    this.setState({ groceries });
  }

  render() {
    const { groceries } = this.state;
    const groceriesComponents = groceries.map((item, index) => (
      <GroceryListItem
        grocery={item}
        key={item}
        itemClicked={() => this.itemClicked(index)}
      />
    ));

    return (
      <div>
        <form onSubmit={this.handleAdd}>
          <input
            type="text"
            name="item"
            placeholder="Grocery"
            value={this.state.newItem}
            onChange={this.handleItemChange}
          />
          <input type="submit" value="Add" />
        </form>
        <div>
          <button onClick={this.clearAll}>Clear</button>
        </div>
        <ul>
          {groceriesComponents}
        </ul>
      </div>
    );
  }
}

/* eslint-disable react/no-multi-comp, no-useless-constructor */
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      color: this.props.grocery.purchased ? 'red' : 'black',
      cursor: 'pointer',
    };
    return (
      <li style={style} onClick={this.props.itemClicked}>
        {this.props.grocery.name}
      </li>
    );
  }
}

GroceryListItem.protoTypes = {
  grocery: PropTypes.object,
};

export default GroceryList;
