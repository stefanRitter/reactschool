/** @jsx React.DOM */

(function () {
  'use strict';

  var Quiz = React.createClass({
    propTypes: {
      books: React.PropTypes.array.isRequired
    },
    render: function () {
      return <div>
        {this.props.books.map(function (book) {
          return <Book title={book} />;
        })}
      </div>;
    }
  });

  var Book = React.createClass({
    propTypes: {
      title: React.PropTypes.string.isRequired
    },
    render: function () {
      return <div><h4>{this.props.title}</h4></div>;
    }
  });

  React.renderComponent(<Quiz books={['The Lord of the Rings']} />,
    document.getElementById('app'));

}());
