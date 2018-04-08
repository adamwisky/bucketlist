import React from 'react';
import Item from './Item'

class ItemList extends React.Component {
  constructor(props) {
    super(props);

    let items = [
      {id: 1, title: "Take garbage out"},
      {id: 2, title: "Clean apartment"},
      {id: 3, title: "Buy new shoes"},
    ]

    this.state = {items: items};

    this.deleteItem = this.deleteItem.bind(this);

  }

  deleteItem(id) {
    console.log("will delete item:", id);

    let items = this.state.items;

    console.log("before", items);
    items = items.filter(item => item.id !== id);

    console.log("after", items);

    this.setState( { items: items} );
  }

  render() {

    const itemList = this.state.items.map((item) =>
      <Item key={item.id} item={item} onDelete={this.deleteItem}/>
    );

    return (
      <div>
        <h3>Hello, I am an ItemList</h3>
            <ul>
              {itemList}
            </ul>
      </div>
    )
  }
}

export default ItemList
