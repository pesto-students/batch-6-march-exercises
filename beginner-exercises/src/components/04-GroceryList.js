/* eslint-disable react/prop-types */
import React from 'react';

class GroceryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ name: 'Apples' }, { name: 'KitKat' }, { name: 'Red Bull' }],
      itemToPurchase: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.addToList = this.addToList.bind(this);
    this.clearList = this.clearList.bind(this);
    this.toggleItemPurchase = this.toggleItemPurchase.bind(this);
  }
  handleChange(event) {
    // this.setState({ groceries: [...this.state, { name: event.target.value }] });
    this.setState({ itemToPurchase: event.target.value });
  }
  addToList() {
    if (this.state.itemToPurchase.length > 0) {
      this.setState(
        { groceries: [...this.state.groceries, { name: this.state.itemToPurchase }] }, 
        () => this.setState({ itemToPurchase: '' }),
      );
    }
  }
  clearList() {
    this.setState({ groceries: [] });
  }
  toggleItemPurchase(index) {
    const { groceries } = this.state;
    groceries[index].purchased = groceries[index].purchased !== true;
    this.setState({ groceries });
  }

  render() {
    const { groceries } = this.state;
    const groceriesComponents = groceries.map((item, i) => (
      <GroceryListItem grocery={item} itemIndex={i} toggleItemPurchase={this.toggleItemPurchase} />
    ));
    return (
      <div>
        {groceriesComponents}
        <br />
        <label htmlFor="purchase-item">
          Item to purchase
          <br />
          <input id="purchase-item" type="text" name="item" value={this.state.itemToPurchase} onChange={this.handleChange} />
        </label>
        <button onClick={this.addToList}>Add to list</button>
        <br />
        <button onClick={this.clearList}>Clear list</button>
      </div>
    );
  }
}

/* eslint-disable react/no-multi-comp, no-useless-constructor */
// eslint-disable-next-line react/prefer-stateless-function
class GroceryListItem extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { grocery, itemIndex } = this.props;
    return (
      <li
        onClick={() => this.props.toggleItemPurchase(itemIndex)}
        // eslint-disable-next-line no-undef
        onKeyPress={() => this.props.toggleItemPurchase(itemIndex)}
        role="presentation"
        style={{ color: (grocery.purchased === true ? 'red' : 'black') }}
      >
        {grocery.name}
      </li>
    );
  }
}

// Do prop validation here using the package `prop-types`

export default GroceryList;
