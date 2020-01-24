import React from "react";
import axios from "axios";
import Search from "./Search";
import ItemForm from "./ItemForm";
import List from "./List";
import Item from "./Item";

class SellOnlineAppPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formEditData: {
        name: "",
        price: "",
        category: ""
      },
      name: `Items listed!`,
      items: [
        {
          name: "50 in Samsung Smart TV",
          price: 50,
          category: "Electronics"
        },
        {
          name: "25 L Refrigerator",
          price: 150,
          category: "Appliance"
        },
        {
          name: "Vizio Smart speakers",
          price: 450,
          category: "Electronics"
        },
        {
          name: "Leather couch",
          price: 2000,
          category: "Home improvement"
        },
        {
          name: "Precious wood dinner table",
          price: 4000,
          category: "Home improvement"
        }

        // "50 L Refrigerator",
        // "Vizio smart speakers",
        // "Leather couch",
        // "Precious wood table"
      ],
      itemFormMode: "add"
    };
    this.handleAddEditItem = this.handleAddEditItem.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.handleEditItem = this.handleEditItem.bind(this);
    this.handleFormInputChange = this.handleFormInputChange.bind(this);
  }

  fetchPosts() {
    axios
      .get("https://sell-online-app-api.herokuapp.com/api/posts")
      .then(response => {
        debugger;
        this.setState({
          items: response.data
        });

        //TODO: this.setState({list: response.data...})
      })
      .catch(error => {
        debugger;
        //TODO: alert error to user
      });
  }

  // deletePost() {}

  handleDeleteItem(index, id) {
    // let array = [...this.state.items];
    // array.splice(index, 1);

    // this.setState({
    //   items: array
    // });
    axios
      .delete(`https://sell-online-app-api.herokuapp.com/api/posts/${id}`)
      .then(() => {
        debugger;
        this.fetchPosts();
      })
      .catch(err => {
        debugger;
        console.log(err);
      });
  }

  componentDidMount() {
    this.fetchPosts();
  }

  handleAddEditItem(item, mode) {
    if (mode === "add") {
      axios
        .post("https://sell-online-app-api.herokuapp.com/api/posts", item)
        .then(response => {
          debugger;
          this.fetchPosts();

          //TODO: this.setState({list: response.data...})
        })
        .catch(error => {
          debugger;
          //TODO: alert error to user
        });
    } else if (mode === "edit") {
      axios
        .put(
          "https://sell-online-app-api.herokuapp.com/api/posts/" + item._id,
          item
        )
        .then(response => {
          debugger;
          this.fetchPosts();

          //TODO: this.setState({list: response.data...})
        })
        .catch(error => {
          debugger;
          //TODO: alert error to user
        });
    }
    this.setState({
      itemFormMode: "add",
      formEditData: { name: "", price: "", category: "" }
    });
    // const itemsClone = [...this.state.items];
    // itemsClone.push(item);
    // this.setState({ items: itemsClone });
  }

  handleFormInputChange(field, value) {
    this.setState({
      [field]: value
    });
  }

  handleEditItem(index) {
    this.setState({
      itemFormMode: "edit",
      formEditData: this.state.items[index]
    });
  }

  render() {
    return (
      <div>
        <Search />
        <ItemForm //will need another prop to load the fields to be edited on the form.
          onAddEditItem={this.handleAddEditItem}
          mode={this.state.itemFormMode}
          editData={this.state.formEditData}
          handleFormInputChange={this.handleFormInputChange}
        />
        <List
          list={this.state.items}
          handleDeleteItem={this.handleDeleteItem}
          handleEditItem={this.handleEditItem}
        />
      </div>
    );
  }
}

export default SellOnlineAppPage;
