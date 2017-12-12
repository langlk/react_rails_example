var NewItem = createReactClass({
  handleClick() {
    var name = this.name.value;
    var description = this.description.value;

    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: { item: { name: name, description: description } },
      success: (item) => {
        this.props.handleSubmit(item);
      }
    });
  },

  render() {
    return (
      <div>
        <input type="text" placeholder="Name" ref={(name) => { this.name = name; }} />
        <input type="text" placeholder="Description" ref={(description) => { this.description = description; }} />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    )
  }
});
