var Item = createReactClass({
  getInitialState() {
    return { editable: false }
  },

  handleEdit() {
    if (this.state.editable) {
      var id = this.props.item.id
      var name = this.name.value;
      var description = this.description.value;
      var item = { id: id, name: name, description: description }
      this.props.handleUpdate(item);
    }
    this.setState({ editable: !this.state.editable })
  },

  render() {
    var name = this.state.editable ? <input type='text' ref={(name) => { this.name = name; }}  defaultValue={this.props.item.name} /> : <h3>{this.props.item.name}</h3>;
    var description = this.state.editable ? <input type='text' ref={(description) => { this.description = description; }} defaultValue={this.props.item.description} />: <p>{this.props.item.description}</p>;
    return(
      <div>
        {name}
        {description}
        <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit' }</button>
        <button onClick={this.props.handleDelete}>Delete</button>
      </div>
    )
  }
});
