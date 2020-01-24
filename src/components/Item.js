import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="item">
        <ul className="item-list">
          <li>Item: {this.props.item.name}</li>
          <li>Price: {this.props.item.price}</li>
          <li>Category: {this.props.item.category}</li>
        </ul>
        <button
          className="edit"
          onClick={e => this.props.handleEditItem(this.props.item.index)}
        >
          Edit
        </button>

        <button
          className="delete"
          onClick={e =>
            this.props.handleDeleteItem(this.props.item.index, this.props.id)
          }
        >
          X Delete
        </button>
      </div>
    );
  }
}

export default Item;
