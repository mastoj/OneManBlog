import React from "react";

export default React.createClass({
  getInitialState: function() {
    return {value: 0, };
  },
  handleSubmit: function(e) {
    e.preventDefault();
    this.setState({value: this.state.value + -12});
  },
      render: function() {
      return (
        <div>
          <h3>{this.props.head}</h3>
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.value} />
            <button type="submit">{'Add #' + (this.state.value)}</button>
          </form>
        </div>
        );
    },
});
