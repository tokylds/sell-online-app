import React from "react";

class ItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
      category: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.editData.name !== this.props.editData.name ||
      prevProps.editData.price !== this.props.editData.price ||
      prevProps.editData.category !== this.props.editData.category
    ) {
      this.setState({
        name: this.props.editData.name,
        price: this.props.editData.price,
        category: this.props.editData.category
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemClone = { ...this.state };

    this.props.onAddEditItem(itemClone, this.props.mode);
    this.setState({
      name: "",
      price: "",
      category: ""
    });
  }

  render() {
    return (
      <div>
        <form className="item-form-container" onSubmit={this.handleSubmit}>
          {this.props.mode === "add" ? (
            <h1 className="label">Add Items</h1>
          ) : (
            <h1 className="label">Edit Items</h1>
          )}
          <label className="item-name">Item name:</label>
          <input
            className="item-input"
            type="text"
            required
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <label className="item-name">Item price:</label>
          <input
            className="item-input"
            type="number"
            required
            value={this.state.price}
            onChange={e => this.setState({ price: e.target.value })}
          />
          <label className="item-name">Item category:</label>
          <input
            className="item-input"
            type="text"
            required
            value={this.state.category}
            onChange={e => this.setState({ category: e.target.value })}
          />
          {this.props.mode === "add" ? (
            <button className="add">Add Item</button>
          ) : (
            <button className="add">Update Item</button>
          )}
        </form>
      </div>
    );
  }
}

export default ItemForm;
