import React from 'react';
import Item from './Item';
import ItemDetails from './ItemDetails';
const uuidv4 = require('uuid/v4');

class ItemList extends React.Component {

  constructor(props) {
    super(props);

    console.log('showing itemBank:', props.itemBank);

    let items = [
    [
      { id: uuidv4(), title: 'Take garbage out', category: 'Home' },
      { id: uuidv4(), title: 'Clean apartment', category: 'Home' },
      { id: uuidv4(), title: 'Buy new shoes', category: 'Personal' },
    ],
    [
      { id: uuidv4(), title: 'Take garbage out2', category: 'Home' },
      { id: uuidv4(), title: 'Clean apartment', category: 'Home' },
      { id: uuidv4(), title: 'Buy new shoes', category: 'Personal' },
    ],
    [
      { id: uuidv4(), title: 'Take garbage out', category: 'Home' },
      { id: uuidv4(), title: 'Clean apartment', category: 'Home' },
      { id: uuidv4(), title: 'Buy new shoes', category: 'Personal' },
    ],
    ];

    this.state = {
      items: items,
      activeItem: props.itemBank,
      showAddItemMode: false,
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.showAddItem = this.showAddItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let newState = prevState;
    newState.activeItem = nextProps.itemBank;
    return newState;
  }

  showAddItem() {
    console.log('i want to add an item');
    let newState = this.state;
    newState.showAddItemMode = !newState.showAddItemMode;
    this.setState(newState);
  }

  addItem(item) {
    console.log(item);

    let newItem = { id: uuidv4(), title: item.itemTitle, category: item.itemCategory };

    let newState = this.state;

    newState.items[newState.activeItem].push(newItem);
    newState.showAddItemMode = false;

    this.setState(newState);

  }

  deleteItem(id) {
    console.log('will delete item:', id);

    let newState = this.state;

    let items = newState.items[newState.activeItem];

    console.log('before', items);
    newState.items[newState.activeItem] = items.filter(item => item.id !== id);

    console.log('after', items);

    this.setState(newState);
  }

  render() {

    const itemList = this.state.items[this.state.activeItem].map((item) =>
    <div className="row" key={item.id}>
      <Item item={item} onDelete={this.deleteItem}/>
    </div>
    );

    return (
      <div>
        <h1>Hi! This is your Bucket List #{this.state.activeItem + 1}:</h1>
            <ul>
              {itemList}
            </ul>
            <button type="button" onClick={this.showAddItem}>
              {this.state.showAddItemMode ? 'Cancel' : 'Add Item'}</button>

            {this.state.showAddItemMode && <ItemDetails newItem='true' addItem={this.addItem} />}

      </div>
    );
  }
}

export default ItemList;
