/** @jsx React.DOM */

(function () {
  'use strict';
  
  var Timer = React.createClass({
    propTypes: {
      onInterval: React.PropTypes.func.isRequired
    },

    getDefaultProps: function () {
      return {
        interval: 1000
      };
    },
    
    render: function () {
      return <div style={{display: 'none'}} />;
    },

    componentDidMount: function () {
      setInterval(this.props.onInterval, this.props.interval);
    }
  });

  function log () {
    console.log('log');
  }

  React.renderComponent(
    <Timer onInterval={log} />,
    document.body
  );
}());
