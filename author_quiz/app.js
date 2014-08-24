/** @jsx React.DOM */

(function () {
  'use strict';

  var Quiz = React.createClass({
    propTypes: {
      data: React.PropTypes.array.isRequired
    },
    
    getInitialState: function () {
      return this.props.data.selectGame();
    },
    
    render: function () {
      return React.DOM.div(
        null,
          <div className="row">
            <div className="col-md-4">
              <img src={this.state.author.imageUrl} className="authorimage col-md-3" />
            </div>
            <div className="col-md-7">
              {this.state.books.map(function (book) {
                return <Book title={book} />;
              })}
            </div>
            <div className="col-md-1"></div>
          </div>
      );
    }
  });

  var Book = React.createClass({
    propTypes: {
      title: React.PropTypes.string.isRequired
    },
    render: function () {
      return React.DOM.div(
        {className: 'answer'},
        React.DOM.h4(null, this.props.title)
      );
    }
  });

  React.renderComponent(
    Quiz({data: window.quizData}),
    document.getElementById('app')
  );
}());
