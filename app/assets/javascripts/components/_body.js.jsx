var Body = createReactClass({
  getInitialState() {
    return { items: [] }
  },

  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) })
  },

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({ items: newState })
  },

  render() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit} />
        <AllItems items={this.state.items}/>
      </div>
    )
  }
});
