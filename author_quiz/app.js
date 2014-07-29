/** @jsx React.DOM */

(function () {
  'use strict';

  var Quiz = React.createClass({
    render: function () {
      return <div>Test {this.props.data}</div>;
    }
  });

  React.renderComponent(<Quiz data={"foo"} />,
    document.getElementById('app'));

}());
