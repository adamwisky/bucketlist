import React from 'react';

class Item extends React.Component {

  render() {
    console.log('created item');

    return (
      <div>
        <li>
          <strong>Item name:</strong> {this.props.item.title}
          ({this.props.item.category}) <button type="button" onClick={() =>
             this.props.onDelete(this.props.item.id)}>Delete</button>
        </li>
      </div>
    );
  }

}

export default Item;
