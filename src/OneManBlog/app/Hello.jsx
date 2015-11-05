import React from "react";
import MyForm from "./MyForm";

export default React.createClass({
  render: function() {
    return (
      <div className="greeting">
          <h1>Hello again from atom, {this.props.name} component!</h1>
          <MyForm heading="This is a form"></MyForm>
      </div>
    );
  },
});
