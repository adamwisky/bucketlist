import React from 'react';
import Item from './Item'
import ItemDetails from './ItemDetails'
const uuidv4 = require('uuid/v4');

class ItemList extends React.Component {
  constructor(props) {
    super(props);

    let items = [
      {id: uuidv4(), title: "Take garbage out", category: "Home"},
      {id: uuidv4(), title: "Clean apartment", category: "Home"},
      {id: uuidv4(), title: "Buy new shoes", category: "Personal"},
    ]

    this.state = {
      items: items,
      showAddItemMode: false
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.showAddItem = this.showAddItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  showAddItem() {
    console.log("i want to add an item");
    let newState = this.state;
    newState.showAddItemMode = !newState.showAddItemMode;
    this.setState(newState);
  }

  addItem(item) {
    console.log(item);

    let newItem = {id: uuidv4(), title: item.itemTitle, category: item.itemCategory}

    let newState = this.state;

    newState.items.push(newItem);
    newState.showAddItemMode = false;

    this.setState(newState);

  }

  deleteItem(id) {
    console.log("will delete item:", id);

    let newState = this.state;

    console.log("before", newState.items);
    newState.items = newState.items.filter(item => item.id !== id);

    console.log("after", newState.items);

    this.setState( newState );
  }

  render() {

    const itemList = this.state.items.map((item) =>
      <Item key={item.id} item={item} onDelete={this.deleteItem}/>
    );

    return (
      <div>
        <h3>Hi! This is your <u><i>Bucket List</i></u>:</h3>
            <ul>
              {itemList}
            </ul>
            <a href="#" onClick={this.showAddItem}>{this.state.showAddItemMode ? "Cancel" : "Add Item"}</a>

            {this.state.showAddItemMode && <ItemDetails newItem='true' addItem={this.addItem} />}

      </div>
    )
  }
}

export default ItemList
