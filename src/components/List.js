import React from "react";
import Item from "./Item";

class List extends React.Component {
  constructor(props) {
    super(props);

    this.renderItemsElements = this.renderItemsElements.bind(this);
  }

  renderItemsElements() {
    return this.props.list.map((item, index) => {
      item.index = index;
      return (
        <Item
          item={item}
          key={index}
          id={item._id}
          handleDeleteItem={this.props.handleDeleteItem}
          handleEditItem={this.props.handleEditItem}
        />
      );
    });
  }

  render() {
    return (
      <div className="list">
        <h1 className="label">Browse Existing Items</h1>
        {this.renderItemsElements()}
      </div>
    );
  }
}

export default List;
