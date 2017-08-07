// include react dependency
var React = require("react");

// require helpers
var helpers = require("../../../utils/helpers");

// build Results Component
var Results = React.createClass({

  getInitialState: function() {
    return {
      title: "",
      url: "",
      pubdate: ""
    };
  },

  // send search term back to parent
  handleClick: function(item) {

    helpers.postSaved(item.headline.main, item.pub_date, item.web_url).then(function() {
      console.log(item.web_url);
    });
  },

  // render all found articles by looping through results with the map function
  renderArticles: function() {
    return this.props.results.docs.map(function(article, index) {

      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{article.headline.main}</em>
              </span>
              <span className="btn-group pull-right">
                <a href={article.web_url} rel="noopener noreferrer" target="_blank">
                  <button className="btn btn-default ">View Article</button>
                </a>
                <button className="btn btn-primary" onClick={() => this.handleClick(article)}>Save</button>
              </span>
            </h3>
            <p>Date Published: {article.pub_date}</p>

          </li>

        </div>
      );

    }.bind(this));

  },

  // this will render our articles if a search has been initialized
  renderContainer: function() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-list-alt"></i>
                    Results
                  </strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderArticles()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  render: function() {
    // If we have no articles, render this message
    if (!this.props.results.docs) {
      return (
        <li className="list-group-item">
          <h3>
            <span>
              <em>Please enter a search term to find articles...</em>
            </span>
          </h3>
        </li>
      );
    }
    // If we have articles, return this.renderContainer() to render all found articles
    return this.renderContainer();
  }
});

// Export the module back to the route
module.exports = Results;
