/** @jsx React.DOM */

(function () {
  'use strict';

  var Quiz = React.createClass({
    propTypes: {
      books: React.PropTypes.array.isRequired
    },
    render: function () {
      return React.DOM.div(
        null,
        this.props.books.map(function (book) {
          return Book({title: book});
        })
      );
    }
  });

  var Book = React.createClass({
    propTypes: {
      title: React.PropTypes.string.isRequired
    },
    render: function () {
      return React.DOM.div(
        null,
        React.DOM.h4(null, this.props.title)
      );
    }
  });

  React.renderComponent(
    Quiz({books: ['The Lord of the Rings']}),
    document.getElementById('app')
  );
}());
