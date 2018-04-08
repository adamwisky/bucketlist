import React from 'react';

class Item extends React.Component {

  constructor(props) {
    super(props);
  }

  deleteItem(id) {
    console.log("deleteItem clicked!");
    console.log(id);
    this.props.onDelete(id);
  }

  render() {
    return (
      <li>
        <strong>Item name:</strong> {this.props.item.title} ({this.props.item.category}) <a href="#" onClick={this.deleteItem.bind(this, this.props.item.id)}>Delete</a>
      </li>
    )
  }
}

export default Item
