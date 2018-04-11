import React from 'react';

class ItemDetails extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      itemTitle: '',
      itemCategory: 'Personal',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log('at handleChange');
    let newState = this.state;
    let target = event.target;

    switch (target.name) {
      case 'title':
        newState.itemTitle = target.value;
        break;
      case 'category':
        newState.itemCategory = target.value;
        break;
      default:
        console.log('unknown form entry');
    }

    this.setState(newState);

  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state);

    this.props.addItem(this.state);
  }

  render() {
    let categories = ['Personal', 'Home', 'Work'];
    let categoriesSelector = categories.map(category => (
        <option key={category} value={category}>{category}</option>
      ));

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>
        Item Name:
        <input type="text" name="title" value={this.state.itemTitle} onChange={this.handleChange} />
      </label>
      <br/>
      <label>
        Item Category:
        <select name="category" value={this.state.itemCategory} onChange={this.handleChange}>
          {categoriesSelector}
        </select>
      </label>
        <input type="submit" value="Add Item" />
      </form>
    );
  }
}

export default ItemDetails;
