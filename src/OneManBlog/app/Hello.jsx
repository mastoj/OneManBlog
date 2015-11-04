import React from "react";

export default React.createClass({
  render: function() {
    return (
      <div className="greeting">
          <h1>Hello yolo again from atom, {this.props.name} component!</h1>
      </div>
    );
  },
});
