var React = require("react");

var Results = React.createClass({

	//render the component
	render: function() {

		return (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-default" >
                <div className="panel-heading">
                  <h3 className="panel-title">Search Results</h3>
                </div>
                <div className="panel-body text-center">
                {this.props.history.map(function(article, i) {
                  return(
                    <div key={i} id={i}>
                      <p>{article.title} - {article.date}</p>
                      <a href='{article.articleURL}'>{article.articleURL}</a>
                    </div>                  
                    );
                })}
                </div>
              </div>
            </div>
          </div>
        </div>
		);
	}
});

//export the component back for use in other files
module.exports = Results;