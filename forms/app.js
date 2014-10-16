/** @jsx React.DOM */

(function () {
  'use strict';


  var ControlledComponent = React.createClass({
    getInitialState: function () {
      return {init: 'init'};
    },

    render: function () {
      return <input type="text" value={this.state.init} onChange={this.handleChange} />;
    },

    handleChange: function (e) {
      this.setState({init: e.target.value});
    }
  });


  var UnControlledComponent = React.createClass({
    render: function () {
      return <input type="text" onChange={this.handleChange} defaultValue="init" />;
    },

    handleChange: function (e) {
      console.log(e.target.value);
    }
  });


  React.renderComponent(
    ControlledComponent(),
    document.getElementById('app')
  );
}());
