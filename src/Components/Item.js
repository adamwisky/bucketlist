import React from 'react';

class Item extends React.Component {

  deleteItem(id) {
    console.log("deleteItem clicked!");
    console.log(id);
    this.props.onDelete(id);
  }

  render() {
    return (
      <li>
        <strong>Item name:</strong> {this.props.item.title} ({this.props.item.category}) <button type="button" onClick={this.deleteItem.bind(this, this.props.item.id)}>Delete</button>
      </li>
    )
  }
}

export default Item
