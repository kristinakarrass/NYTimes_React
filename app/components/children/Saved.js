var React = require("react");

var Saved = React.createClass({

	//render the component
	render: function() {

		return (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default" >
                <div className="panel-heading">
                  <h3 className="panel-title">Saved Articles</h3>
                </div>
                <div className="panel-body">
                 {this.props.results.map(function(articles, i) {
                   return (
                    <div key={i} id={i}>
                      <li className = "list-group-item">
                       <p>{articles.title} - {articles.date}</p>
                       <a href={articles.articleURL} target="blank"><button className="btn btn-default">Read Article</button></a>
                       <button className="btn btn-danger" onClick={this.handleClick(article)}>Save Article</button>
                      </li>
                    </div>
                   );
                 }.bind(this))}
                </div>
              </div>
            </div>
          </div>
        </div>
		);
	}
});

//export the component back for use in other files
module.exports = Saved;