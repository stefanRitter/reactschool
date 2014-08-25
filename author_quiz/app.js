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

    handleBookSelected: function (title) {
      var isCorrect = this.state.checkAnswer(title);
      alert(isCorrect);
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
                return <Book onBookSelected={this.handleBookSelected} title={book} />;
              }.bind(this))}
            </div>
            <div className="col-md-1"></div>
          </div>
      );
    }
  });


  var Book = React.createClass({
    propTypes: {
      title: React.PropTypes.string.isRequired,
      onBookSelected: React.PropTypes.func.isRequired
    },

    handleClick: function () {
      this.props.onBookSelected(this.props.title);
    },
    
    render: function () {
      return React.DOM.div(
        {
          className: 'answer',
          onClick: this.handleClick
        },
        React.DOM.h4(null, this.props.title)
      );
    }
  });

  React.renderComponent(
    Quiz({data: window.quizData}),
    document.getElementById('app')
  );
}());
