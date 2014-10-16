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


  var Refs = React.createClass({
    render: function () {
      return <input type="text" ref="inp" />;
    },

    componentDidMount: function () {
      this.refs.inp.getDOMNode().value = 'set by ref';
    }
  });


  var RefTest = React.createClass({
    render: function () {
      return <div>
                <input type="text" ref="first" />
                <br />
                <input type="text" ref="second" />
                <br />
                <input type="button" value="add" onClick={this.handleAdd} />
              </div>;
    },

    handleAdd: function () {
      alert(
        parseFloat(this.refs.first.getDOMNode().value) +
        parseFloat(this.refs.second.getDOMNode().value)
      )
    }
  });


  React.renderComponent(
    <RefTest />,
    document.getElementById('app')
  );
}());
