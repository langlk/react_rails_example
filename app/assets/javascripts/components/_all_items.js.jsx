var AllItems = createReactClass({

  handleDelete(id) {
    this.props.handleDelete(id);
  },

  render() {
    var items = this.props.items.map((item) => {
      return (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <button onClick={this.handleDelete.bind(this, item.id)}>Delete</button>
        </div>
      )
    });

    return (
      <div>
        {items}
      </div>
    )
  }
});
