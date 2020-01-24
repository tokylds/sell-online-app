import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="search">
        <h1 className="label">Search Items</h1>
        <label className="item-name">Item name:</label>
        <input className="item-input" type="text" />
        <label className="item-name">Item price:</label>
        <input className="item-input" type="text" />
        <label className="item-name">Item category:</label>
        <input className="item-input" type="text" />
        <button className="searchbutton">Search Item</button>
      </form>
    );
  }
}

export default Search;
